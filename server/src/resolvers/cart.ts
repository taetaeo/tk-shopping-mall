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
import { db } from "../../firebase";
import { DBField, writeDB, readDB } from "../dbController";
import { Cart, Resolver } from "./type";

const getJSON = () => readDB(DBField.CART);
const setJSON = (data: Cart) => writeDB(DBField.CART, data);

const cartResolver: Resolver = {
  CartItem: {
    product: async (cartItem, args) => {
      console.log("-==========================", cartItem);
      const querySnapshot = await getDoc(cartItem.product);
      const data = querySnapshot.data() as any;

      return {
        ...data,
        id: querySnapshot.id,
      };
    },
  },
  Query: {
    cart: async (parent, args) => {
      const cart = collection(db, "cart");
      const querySnapshot = await getDocs(cart);
      const data: DocumentData[] = [];

      querySnapshot.forEach((doc) => {
        const d = doc.data();
        data.push({
          id: doc.id,
          ...d,
        });
      });
      const jsonData: any = data;
      setJSON(jsonData);
      return data;
    },
  },
  Mutation: {
    addCart: async (parent, { productId }) => {
      if (!productId) throw Error("상품 아이디가 없습니다.");
      const productRef = doc(db, "products", productId);
      const cartCollection = collection(db, "cart");

      const exist = (
        await getDocs(query(cartCollection, where("product", "==", productRef)))
      ).docs[0]; // product에 해당 아이디가 존재하는것

      let cartRef;
      if (exist) {
        // 기존에 있는 것
        cartRef = doc(db, "cart", exist.id);
        await updateDoc(cartRef, {
          amount: increment(1),
        });
      } else {
        // 새로 추가된 것
        cartRef = await addDoc(cartCollection, {
          amount: 1,
          product: productRef,
        });
      }

      const cartSnapshot: any = await getDoc(cartRef);

      // db폴더 JSON데이터 업데이트
      const jsonData = getJSON();
      jsonData.unshift({
        id: cartSnapshot.id,
        amount: cartSnapshot.amount,
        ...cartSnapshot.data(),
      });
      setJSON(jsonData);

      return {
        ...cartSnapshot.data(),
        product: productRef,
        id: cartSnapshot.id,
      };
    },
  },
};
export default cartResolver;
