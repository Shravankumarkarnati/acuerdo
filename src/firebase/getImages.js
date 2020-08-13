import { firebase } from "./firebase.main";

const getImage = async () => {
  var storage = firebase.storage();
  var storageRef = storage.ref();

  let url = await storageRef.child("images/books_display.jpg").getDownloadURL();

  console.log(url);
};

export { getImage };
