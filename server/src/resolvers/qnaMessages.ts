import { Products, Resolver } from "./type";
import { DBField, writeDB, readDB } from "../dbController";
import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  DocumentData,
  doc,
  orderBy,
  addDoc,
  serverTimestamp,
  where,
  query,
  limit,
  startAfter,
  updateDoc,
} from "firebase/firestore";

const PAGE_SIZE = 15;

const qnaMessagesResolver: Resolver = {
  Query: {
    qnaMessages: async (parent, { cursor = "" }) => {
      const qnaMessages = collection(db, "qnaMessages");
      const queryOptions = [orderBy("createdAt", "desc")];
      const data: DocumentData[] = [];

      if (cursor) {
        const snapshot = await getDoc(doc(db, "qnaMessages", cursor));
        queryOptions.push(startAfter(snapshot));
      }
      const q = query(qnaMessages, ...queryOptions, limit(PAGE_SIZE));
    },
    qnaMessage: async (parent, { id }) => {
      const querySnapshot = await getDoc(doc(db, "qnaMessages", id));
      return {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      };
    },
  },
  Mutation: {
    createMessage: async (parent, { password, text, qnaType, userId }) => {
      const newMessages = {
        password,
        text,
        qnaType,
        userId,
        createdAt: serverTimestamp(),
      };
      const addMessages = await addDoc(
        collection(db, "qnaMessages"),
        newMessages
      );
      const querySnapshot = await getDoc(addMessages);

      return {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      };
    },
  },
};
