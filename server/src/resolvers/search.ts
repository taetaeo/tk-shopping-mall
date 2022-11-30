import { Resolver } from "./type";
import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  DocumentData,
  doc,
  addDoc,
  serverTimestamp,
  orderBy,
  where,
  query,
} from "firebase/firestore";

// 기본 형식
// (parent, args, context, info)=>{}

const searchResolver: Resolver = {
  Query: {
    searchItems: async (parent, { keyword = "" }) => {
      const searchItems = collection(db, "products");
      const queryOptions = [orderBy("createdAt", "desc")];

      if (!keyword) throw Error("검색한 브랜드 정보가 없습니다.");
      queryOptions.unshift(where("brand", "==", keyword)); // category_sm에 따라 long, short 등 분리
      // queryOptions.unshift(where("brand", "<=", keyword));
      // queryOptions.unshift(where("brand", ">=", keyword + "\uf8ff"));
      const q = query(searchItems, ...queryOptions);
      const querySnapshot = await getDocs(q);
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
    searchBrand: async (parent, { keyword }) => {
      const newKeyword = keyword.replace(/\s/g, "");
      const newData = [];

      const searchBrand = collection(db, "products");
      const querySnapshot = await getDocs(searchBrand);
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        const d = doc.data();
        if (!data.includes(d.brand)) {
          data.push(d.brand);
        }
      });
      for (const d of data) {
        const newD = d.replace(/\s/g, "");
        if (newD.includes(newKeyword)) newData.push(d);
      }
      return newData;
    },
  },
};
export default searchResolver;
