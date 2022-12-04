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

const messagesResolver: Resolver = {
  Query: {
    messages: async (parent, args) => {
      const {} = args;
    },
  },
  Mutation: {},
};
