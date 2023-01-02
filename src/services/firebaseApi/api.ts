import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { IUserLoginRequestPayload, IUserRegisterRequestPayload } from "services";
import { setAuthStatus, setEmail, setUid, setUserName, store } from "store";
import { firebaseConfig } from "./config";
import { IFavoriteMovie } from "../../store/features/movieSlice/types";
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
    });
  } else {
    store.dispatch(setAuthStatus(false));
  }
});

const fetchUserInfo = async (userUid: string) => {
  const q = query(collection(db, "users"), where("uid", "==", userUid));
  const doc = await getDocs(q);
  return doc.docs[0].data();
};

const registerWithEmailAndPassword = async ({
  name,
  email,
  password,
}: IUserRegisterRequestPayload) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await addDoc(collection(db, "users"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email,
  });

  return { name, email, uid: user.uid };
};

const logInWithEmailAndPassword = async ({ email, password }: IUserLoginRequestPayload) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const sendPasswordReset = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};

const logout = async () => {
  await signOut(auth);
};

const fetchFavorites = async (userUid: string) => {
  const q = query(collection(db, FirebaseCollections.favorites), where("uid", "==", userUid));
  const doc = await getDocs(q);
  console.log(doc);
  return doc.docs[0].data() as IFavoriteMovie[];
};

const putFavoriteMovie = async (movie: IFavoriteMovie) => {
  await addDoc(collection(db, FirebaseCollections.favorites), movie);
};

export const getFirebaseErrorMessage = (error: unknown) => {
  //TODO
  return "TODO getFirebaseErrorMessage";
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
};
