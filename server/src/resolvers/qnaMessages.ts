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
    messages: async (parent, { cursor = "" }) => {
      const messages = collection(db, "messages");
      const queryOptions = [orderBy("createdAt", "desc")];
      const data: DocumentData[] = [];

      if (cursor) {
        const snapshot = await getDoc(doc(db, "messages", cursor));
        queryOptions.push(startAfter(snapshot));
      }
      const q = query(messages, ...queryOptions, limit(PAGE_SIZE));
    },
  },
  Mutation: {},
};
