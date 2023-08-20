import { db } from "./config"
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
    query,
    where,
    writeBatch,
    increment
} from "firebase/firestore";


const productsRef = collection(db, "items");
//recibe dos parametros, base de datos, nombre de coleccion

//TRAER TODOS LOS PRODUCTOS
export const getProducts = async (category) => {
    const q = category
        ? query(productsRef, where('category', '==', category))
        : productsRef;

    let products = [];
    //obtengo todo de la coleccion items, en este caso
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
        products = [...products, { ...doc.data(), id: doc.id }]; //data es todo el contenido de cada registro, le agregamos el id 
    });
    return products;
};

//TRAER PRODUCTO DE UN ID
export const getProduct = async (id) => {

    const document = doc(db, "items", id);
    const docSnap = await getDoc(document);

    if (docSnap.exists) return { id: docSnap.id, ...docSnap.data() };

    return null;
}

//INSERTAR TODOS DESDE EL ARRAY
// export const uploadData = () => {

//     console.log(PRODUCTOS.length)
//     PRODUCTOS.map(async (product) => {
//         await addDoc(productsRef, product)

//     })
// }

//BORRADO DE TODOS
export const deleteData = (products) => {
    products.forEach(async (product) => {
        await deleteDoc(doc(db, "items", product.id));
        console.log("se borro ID: " + product.id)
    })

}

//BORRADO DE UN ID
export const deleteProduct = async (id) => {
    return await deleteDoc(doc(db, "items", id));
};


//ACTUALIZAR UN PRODUCTO
export const updateProduct = async (id, item) => {
    const newProduct = await updateDoc(doc(db, "items", id), item);
    return;
};

//OPERACION EN LOTE
export const updateManyProducts = async (items) => {
    const batch = writeBatch(db);

    items.forEach(({ id, cant }) => {
        batch.update(doc(db, "items", id), {
            stock: increment(-cant)
        })
        
    })

    batch.commit();
}