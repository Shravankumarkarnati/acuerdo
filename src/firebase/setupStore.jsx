import { data } from "../utils/data/data";
// import { firestore, storage, firebase } from "./firebase.main";
import { firestore } from "./firebase.main";

// const categories = [
//   "Books",
//   "Sports",
//   "Movies",
//   "Grocery",
//   "Games",
//   "Jewelery",
//   "Garden",
//   "Shoes",
//   "Outdoors",
//   "Beauty",
//   "Automotive",
//   "Clothing",
//   "Baby",
//   "Tools",
//   "Kids",
//   "Music",
//   "Home",
//   "Electronics",
//   "Industrial",
//   "Computers",
//   "Health",
//   "Toys",
// ];

const uploadShopData = () => {
  Object.keys(data).forEach((category) => {
    const items = data[category];
    items.forEach(async (item) => {
      const { id: item_id } = item;
      const categoryRef = firestore
        .collection("shop_data")
        .doc(category.toLowerCase())
        .collection("items")
        .doc(`${item_id}`);
      await categoryRef.set(item);
    });
  });
};

// const uploadShopImages = () => {
//   const metadata = {
//     contentType: "image/jpg",
//   };
//   var storageRef = firebase.storage().ref();
//   categories.forEach((category) => {
//     // const path = "../images/Images/";
//     // const display_image = `${category.toLowerCase()}_display.jpg`;
//     // const display_title = `${category.toLowerCase()}_title.jpg`;
//     // const image_display = require(path + display_image);
//     // const image_title = require(path + display_title);
//     // var uploadTask_display = storageRef
//     // .child(`images/${display_image}`)
//     // .put(image_display, metadata);
//     // var uploadTask_title = storageRef
//     // .child(`images/${display_title}`)
//     // .put(image_title, metadata);
//     const file = require("../images/Images/books_display.jpg");
//     var upload = storageRef.child("images/image.jpg").put(file, metadata);
//     console.log("Image completed", category);
//   });
// };

export { uploadShopData };
