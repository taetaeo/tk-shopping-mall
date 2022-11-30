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
      if (!keyword) throw Error("검색한 브랜드 정보가 없습니다.");
      const newKeyword = keyword.replace(/\s/g, "");
      const queryOptions = [orderBy("createdAt", "desc")];
      const newData = [];

      const searchBrand = collection(db, "products");
      const brandSnapshot = await getDocs(searchBrand);
      const data: DocumentData[] = [];
      brandSnapshot.forEach((doc: DocumentData) => {
        const d = doc.data();
        if (!data.includes(d.brand)) {
          data.push(d.brand);
        }
      });
      for (const d of data) {
        const newD = d.replace(/\s/g, "");
        if (newD.includes(newKeyword)) {
          newData.push(d);
        }
      }

      for (const d of newData) {
        queryOptions.unshift(where("brand", "==", d));
      }

      const q = query(searchBrand, ...queryOptions);
      const searchSnapshot = await getDocs(q);
      const searchData: DocumentData[] = [];
      searchSnapshot.forEach((doc: DocumentData) => {
        const d = doc.data();
        searchData.push({
          id: doc.id,
          ...d,
        });
      });
      return searchData;
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
