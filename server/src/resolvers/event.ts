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

const eventResolver: Resolver = {
  Query: {
    events: async (parent, arg) => {
      const events = collection(db, "events");

      const querySnapshot = await getDocs(events);
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        const d = doc.data();
        data.push({
          id: doc.id,
          ...d,
        });
      });
      return data;
    },
    event: async (parent, { id }) => {
      const querySnapshot = await getDoc(doc(db, "events", id));
      return {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      };
    },
  },
  Mutation: {
    addEvent: async (
      parent,
      { image_main, image_lg, image_md, image_thumb }
    ) => {
      const newProduct = {
        image_main,
        image_lg,
        image_md,
        image_thumb,
        createdAt: serverTimestamp(),
      };

      const result = await addDoc(collection(db, "events"), newProduct);
      const querySnapshot = await getDoc(result);
      return {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      };
    },
  },
};
export default eventResolver;
