import { addDoc, collection } from 'firebase/firestore';
import { db } from './config';

const ordersRef = collection(db, 'orders'); //creamos la referencia a la base de datos

export const agregarOrden = async (order) => {
    const orderDoc = await addDoc(ordersRef, order);
    return orderDoc.id; //este es el id de la compra

}