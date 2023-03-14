import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  increment,
  query,
  QueryDocumentSnapshot,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { Cart, Resolver } from "./type";

const cartResolver: Resolver = {
  // User: {
  //   product: async (user, args) => {
  //     const querySnapshot = await getDoc(user.cartId);
  //     const data = querySnapshot.data() as any;

  //     return {
  //       ...data,
  //       id: querySnapshot.id,
  //     };
  //   },
  // },
  Query: {
    user: async (parent, args) => {
      const user = collection(db, "user");
      const querySnapshot = await getDocs(user);
      const data: DocumentData[] = [];

      querySnapshot.forEach((doc) => {
        const d = doc.data();
        data.push({
          id: doc.id,
          ...d,
        });
      });
      return data;
    },
  },
};
export default cartResolver;
