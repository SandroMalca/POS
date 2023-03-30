import {
  collection,
  addDoc,
  getDocs,
  query,
  limit,
  setDoc,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../db/config/firebase";
import { IProductForm, IProduct } from "../../models/index";

interface IMessage {
  message: string | Error;
}

const createProduct = async (
  productData: IProductForm
): Promise<IMessage | undefined> => {
  try {
    await addDoc(collection(db, "users"), {
      productData,
    });
    return { message: "Product created!" };
  } catch (error) {
    if (error instanceof Error) {
      return { message: error };
    }
  }
};

const updateProduct = async (id: string, productData: IProductForm) => {
  const productRef = doc(db, "products", id);
  try {
    await setDoc(productRef, productData);
  } catch (error) {}
};

export { createProduct };
