import { Resolver } from "./type";
import { DBField, writeDB } from "../dbController";
import { Events } from "./type";
import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  DocumentData,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// 기본 형식
// (parent, args, context, info)=>{}

const setJSON = (data: Events) => writeDB(DBField.EVENT, data);

const productResolver: Resolver = {
  Query: {
    products: async (parent, arg) => {
      const events = collection(db, "products");

      const querySnapshot = await getDocs(events);
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        const d = doc.data();
        data.push({
          id: doc.id,
          ...d,
        });
      });
      console.log("data", data);
      return data;
    },
    product: async (parent, { id }) => {
      const querySnapshot = await getDoc(doc(db, "products", id));
      return {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      };
    },
  },
};
export default productResolver;
