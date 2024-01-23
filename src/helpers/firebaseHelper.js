import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config.js';

export const fetchProductsFromFirebase = async (category) => {
    try {
        const productsCollection = collection(db, 'products');
        const q = category
            ? query(productsCollection, where('category', '==', category))
            : productsCollection;

        const querySnapshot = await getDocs(q);
        const productsData = [];

        querySnapshot.forEach((doc) => {
            productsData.push({ ...doc.data(), id: doc.id });
        });

        return productsData;
    } catch (error) {
        console.error('Error fetching products: ', error);
        throw error;
    }
}

export const fetchProductByIdFromFirebase = async (productId) => {
    try {
        const itemDocRef = doc(db, 'products', productId);
        const itemDocSnapshot = await getDoc(itemDocRef);

        if (itemDocSnapshot.exists()) {
            return { ...itemDocSnapshot.data(), id: itemDocSnapshot.id };
        } else {
            console.error("El producto no fue encontrado");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        throw error;
    }
};

export default {
    fetchProductsFromFirebase,
    fetchProductByIdFromFirebase,
};