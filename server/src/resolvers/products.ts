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
} from "firebase/firestore";

const getJSON = () => readDB(DBField.PRODUCTS);
const setJSON = (data: Products) => writeDB(DBField.PRODUCTS, data);

const PAGE_SIZE = 15;

const productResolver: Resolver = {
  // 기본 형식 : (parent, args, context, info)=>{}
  Query: {
    products: async (parent, arg) => {
      const products = collection(db, "products");
      const querySnapshot = await getDocs(products);
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        const d = doc.data();
        data.push({
          id: doc.id,
          ...d,
        });
      });
      // const newData: any = data;
      // setJSON(newData);
      return data;
    },
    product: async (parent, { id }) => {
      const querySnapshot = await getDoc(doc(db, "products", id));
      return {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      };
    },
    selectedProducts: async (
      parent,
      { cursor = "", category_lg, category_md = "", category_sm = "" }
    ) => {
      const products = collection(db, "products");
      const queryOptions = [orderBy("createdAt", "desc")];

      // category_sm에 따라 분리
      if (category_sm && category_md && category_lg) {
        queryOptions.unshift(where("category.category_sm", "==", category_sm)); // category_sm에 따라 long, short 등 분리
        queryOptions.unshift(where("category.category_md", "==", category_md)); // category_md에 따라 top, bottom, outer 등 분리
        queryOptions.unshift(where("category.category_lg", "==", category_lg)); // category_lg에 따라 men or women 분리
      }
      // category_md에 따라 분리
      if (category_md !== "all" && category_md !== "new" && category_lg) {
        queryOptions.unshift(where("category.category_md", "==", category_md)); // category_md에 따라 top, bottom, outer 등 분리
        queryOptions.unshift(where("category.category_lg", "==", category_lg)); // category_lg에 따라 men or women 분리
      }
      // category_lg에 따라 men or women 분리
      if (category_md === "all" || category_md === "new") {
        queryOptions.unshift(where("category.category_lg", "==", category_lg));
      }

      if (cursor) {
        const snapshot = await getDoc(doc(db, "products", cursor));
        queryOptions.push(startAfter(snapshot));
      }

      const q = query(products, ...queryOptions, limit(PAGE_SIZE));
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
  },

  Mutation: {
    addProduct: async (
      parent,
      {
        brand,
        name,
        image_url,
        origin_price,
        discount,
        category_lg,
        category_md,
        category_sm,
      }
    ) => {
      const newProduct = {
        brand,
        name,
        image_url,
        origin_price,
        discount,
        category: {
          category_lg,
          category_md,
          category_sm,
        },
        createdAt: serverTimestamp(),
      };
      const result = await addDoc(collection(db, "products"), newProduct);
      const querySnapshot = await getDoc(result);

      // db폴더 JSON데이터 업데이트
      const jsonData = getJSON();
      jsonData.unshift({ id: querySnapshot.id, ...querySnapshot.data() });
      setJSON(jsonData);

      return {
        ...querySnapshot.data(),
        id: querySnapshot.id,
      };
    },
  },
};
export default productResolver;
