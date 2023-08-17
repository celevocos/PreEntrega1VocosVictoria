const PRODUCTOS = [

    {
        title: "Jabones en barra exfoliantes Ekos",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Higiene",
        price: 1550,
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw2adb675d/1200x1200/72998_2.jpg",
        stock: 10,
    },

    {
        title: "Kriska Romance",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Perfumes",
        price: 6805,
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw449cb4f1/1200x1200/119436_1.jpg",
        stock: 10,

    } ,

    {
        title: "Labial Hidratante UNA",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Maquillaje",
        price: 1299,
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw5f328613/1200x1200/92529_1.jpg",
        stock: 5,
    } ,

    {
        title: "Esmalte Faces",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Maquillaje",
        price: 450,
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw8566229b/1200x1200/106542_1.jpg",
        stock: 24,
    },

    {
        title: "Luna Radiante",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Perfumes",
        price: 12300,
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dwdaf8bf48/NATARG-69614_1.jpg",
        stock: 8
    },

    {
        title: "Crema de rostro",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Higiene",
        price: 2800,
        img: "https://static1.mujerhoy.com/www/multimedia/202005/14/media/cortadas/cremas-proteccion-olay-kC6C--676x900@MujerHoy.jpg",
        stock: 14
    },

    {
        title: "Ilía Plena",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Perfumes",
        price: 10500,
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dwb899df73/1200x1200/113151_1.jpg",
        stock: 9
    },

    {
        title: "Jabones en barra vegetal salvia",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Higiene",
        price: 3700,
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw155c48dd/1200x1200/72147_1.jpg",
        stock: 18
    },
    {
        title: "Jabon liquido corporal Cereza",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Higiene",
        price: 2100,
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw789ccd26/NATARG-95843_1.jpg",
        stock: 6
    },
    {
        title: "Labial liquido mate",
        description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa beatae, quis pariatur id illo recusandae a harum ex suscipit dolorum, culpa eaque quisquam unde vel omnis nobis rerum veniam.",
        category: "Maquillaje",
        price: 1800,
        img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dwaed1593c/1200x1200/111397_1.jpg",
        stock: 11
    }
];

import { db } from "./config"
import { collection, getDocs, getDoc, addDoc, doc, deleteDoc, query, where } from "firebase/firestore";


const productsRef = collection(db, "items");
//recibe dos parametros, base de datos, nombre de coleccion
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

export const getProduct = async (id) => {

    const document = doc(db, "items", id);
    const docSnap = await getDoc(document);

    if (docSnap.exists) return { id: docSnap.id, ...docSnap.data() };

    return null;
}

export const uploadData = () => {

    console.log(PRODUCTOS.length)
    PRODUCTOS.map(async(product) => {
        //  product.title ? productsRef
      // console.log(product.title)
       // query(productsRef, where('title', '==', product.title)) ?
       // console.log("Ya existe el producto") :
          await addDoc(productsRef, product)

    })
}

export const deleteData = (products) => {
    products.forEach(async (product) => {
        await deleteDoc(doc(db, "items", product.id));
        console.log("se borro ID: "+product.id)
    })

}

