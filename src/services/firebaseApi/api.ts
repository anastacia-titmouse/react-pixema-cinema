import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateEmail,
  updatePassword,
  AuthErrorCodes,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  limit,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  IFavoriteMovieModel,
  ITrendMovieModel,
  IUserLoginRequestPayload,
  IUserModel,
  IUserRegisterRequestPayload,
} from "services";
import { setAuthStatus, setEmail, setUid, setUseDarkTheme, setUserName, store } from "store";
import { firebaseConfig } from "./config";
import { FirebaseCollections } from "./types";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    fetchUserInfo(user.uid).then((userInfo) => {
      store.dispatch(setEmail(userInfo.email));
      store.dispatch(setUserName(userInfo.name));
      store.dispatch(setAuthStatus(true));
      store.dispatch(setUid(user.uid));
      store.dispatch(setUseDarkTheme(!!userInfo.useDarkTheme));
    });
  } else {
    store.dispatch(setAuthStatus(false));
  }
});

const fetchUserInfo = async (userUid: string) => {
  const q = query(collection(db, "users"), where("uid", "==", userUid));
  const doc = await getDocs(q);
  return doc.docs[0].data() as IUserModel;
};

const registerWithEmailAndPassword = async ({
  name,
  email,
  password,
}: IUserRegisterRequestPayload): Promise<Omit<IUserModel, "authProvider">> => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,
    useDarkTheme: true,
  });

  return { name, email, uid: user.uid, useDarkTheme: true };
};

const logInWithEmailAndPassword = async ({ email, password }: IUserLoginRequestPayload) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const sendPasswordReset = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};

const updateUserSettings = async ({
  uid,
  useDarkTheme,
  name,
  email,
  password,
}: {
  uid: string;
  useDarkTheme: boolean;
  name: string;
  email?: string;
  password: string;
}) => {
  if (!auth.currentUser) {
    throw new Error("Unauthorized");
  }

  const userDocRef = doc(db, FirebaseCollections.users, uid);

  if (email) {
    await updateEmail(auth.currentUser, email);
    await updateDoc(userDocRef, { email });
  }

  if (password) {
    await updatePassword(auth.currentUser, password);
  }

  await updateDoc(userDocRef, { useDarkTheme, name });

  return { useDarkTheme, name, email };
};

const logout = async () => {
  await signOut(auth);
};

const fetchFavorites = async (userUid: string | null): Promise<IFavoriteMovieModel[]> => {
  if (!userUid) {
    throw new Error("Missing user id");
  }

  const q = query(collection(db, FirebaseCollections.favorites), where("uid", "==", userUid));
  const doc = await getDocs(q);
  return doc.docs.map((doc) => doc.data()) as IFavoriteMovieModel[];
};

const fetchTrendMovies = async (): Promise<ITrendMovieModel[]> => {
  const q = query(collection(db, FirebaseCollections.trends));
  const doc = await getDocs(q);
  return doc.docs.map((doc) => doc.data()) as ITrendMovieModel[];
};

const isMovieExistsInFavorites = async ({
  userId,
  imdbId,
}: {
  userId: string | null;
  imdbId: string;
}): Promise<boolean> => {
  if (!userId) {
    throw new Error("Missing user id");
  }

  const q = query(
    collection(db, FirebaseCollections.favorites),
    where("uid", "==", userId),
    where("imdbId", "==", imdbId),
    limit(1),
  );
  const doc = await getDocs(q);

  return !!doc.docs[0];
};

const putFavoriteMovie = async (movie: IFavoriteMovieModel) => {
  await addDoc(collection(db, FirebaseCollections.favorites), movie);
};

export const getFirebaseErrorMessage = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    if (error.code === AuthErrorCodes.CREDENTIAL_TOO_OLD_LOGIN_AGAIN) {
      return (
        "Unable to change email, or password - credentials are too old." +
        " Try to reAuth and change parameter again."
      );
    }
  }
  return "Unknown firebase error";
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  fetchFavorites,
  putFavoriteMovie,
  isMovieExistsInFavorites,
  fetchTrendMovies,
  updateUserSettings,
};
