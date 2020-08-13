import { firestore } from "./firebase.main";

export const createUserFirebase = async (data) => {
  const { email } = data;
  const userRef = firestore.collection("users").doc(email);
  await userRef.set({ ...data });
};

export const getUsernameFirebase = async (email) => {
  const userRef = firestore.collection("users").doc(email);
  const doc = await userRef.get();
  if (!doc.exists) {
    return false;
  } else {
    return doc.data();
  }
};
