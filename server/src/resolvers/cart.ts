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
    addCart: async (parent, { productId, count = 1 }) => {
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
          amount: increment(count),
        });
      } else {
        // 새로 추가된 것
        cartRef = await addDoc(cartCollection, {
          amount: count,
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
    updateCart: async (parent, { cartId, amount }) => {
      if (amount < 1) throw Error("수량이 1이하로는 변경할 수 없습니다.");
      const cartRef = doc(db, "cart", cartId);
      if (!cartRef) throw Error("장바구니 정보가 없습니다.");
      await updateDoc(cartRef, {
        amount: amount,
      });
      const cartSnapshot = await getDoc(cartRef);
      return {
        ...cartSnapshot.data(),
        id: cartSnapshot.id,
      };
    },
    deleteCart: async (parent, { cartId }) => {
      const cartRef = doc(db, "cart", cartId);
      if (!cartRef) throw Error("장바구니에 해당 아이템 정보가 없습니다.");
      await deleteDoc(cartRef).then(() => {
        console.log("성공적으로 삭제가 완료되었습니다.");
      });
      return cartId;
    },
  },
};
export default cartResolver;
