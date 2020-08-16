import { firestore } from "./firebase.main";

export const getResults = async (cat) => {
  const resultsRef = firestore
    .collection("shop_data")
    .doc(cat)
    .collection("items");
  const docFlag = await resultsRef.get();

  if (docFlag) {
    return docFlag;
  } else {
    console.log("not exists");
  }
};
