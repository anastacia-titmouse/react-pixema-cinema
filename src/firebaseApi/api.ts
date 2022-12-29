import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
import {
  FirebaseCollections,
  ICountryModel,
  IGenreModel,
  IUserLoginRequestPayload,
  IUserRegisterRequestPayload,
} from "firebaseApi";
import { setAuthStatus, setEmail, setUserName, store } from "store";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    fetchUserInfo(user.uid).then((userInfo) => {
      store.dispatch(setEmail(userInfo.email));
      store.dispatch(setUserName(userInfo.name));
      store.dispatch(setAuthStatus(true));
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

export const fetchGenreModels = async () => {
  const q = query(collection(db, FirebaseCollections.genres));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
  })) as IGenreModel[];
};

export const fetchCountryModels = async () => {
  const q = query(collection(db, FirebaseCollections.countries));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
  })) as ICountryModel[];
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
};
