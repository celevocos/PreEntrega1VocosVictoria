// const PRODUCTS = [

//     {
//         id: 1,
//         title: "Jabones en barra exfoliantes Ekos",
//         category: "Higiene",
//         price: 1550,
//         img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw2adb675d/1200x1200/72998_2.jpg",
//         stock: 10,
//     },

//     {
//         id: 2,
//         title: "Irresistible",
//         category: "Perfumes",
//         price: 6805,
//         img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw449cb4f1/1200x1200/119436_1.jpg",
//         stock: 10,

//     },

//     {
//         id: 3,
//         title: "Labial Hidratante UNA",
//         category: "Maquillaje",
//         price: 1299,
//         img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw5f328613/1200x1200/92529_1.jpg",
//         stock: 5,
//     },

//     {
//         id: 4,
//         title: "Esmalte ",
//         category: "Maquillaje",
//         price: 450,
//         img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw8566229b/1200x1200/106542_1.jpg",
//         stock: 24,
//     },

//     {
//         id: 5,
//         title: "Cher",
//         category: "Perfumes",
//         price: 15000,
//         img: "https://distribuidorabioesenciavilo.com.ar/wp-content/uploads/2021/03/Type-absolutely-irresistible-foto1-700x700-1.jpg",
//         stock: 8
//     },

//     {
//         id: 6,
//         title: "Crema de rostro",
//         category: "Higiene",
//         price: 2800,
//         img: "https://static1.mujerhoy.com/www/multimedia/202005/14/media/cortadas/cremas-proteccion-olay-kC6C--676x900@MujerHoy.jpg",
//         stock: 14
//     },

//     {
//         id: 7,
//         title: "Ilía Plena",
//         category: "Perfumes",
//         price: 10500,
//         img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dwb899df73/1200x1200/113151_1.jpg",
//         stock: 9
//     },

//     {
//         id: 8,
//         title: "Jabones en barra vegetal salvia",
//         category: "Higiene",
//         price: 3700,
//         img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw155c48dd/1200x1200/72147_1.jpg",
//         stock: 18
//     },
//     {
//         id: 9,
//         title: "Jabon liquido corporal Cereza",
//         category: "Higiene",
//         price: 2100,
//         img: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dw789ccd26/NATARG-95843_1.jpg",
//         stock: 6
//     }, 
//     {
//         id:10,
//         title: "Labial liquido mate",
//         category: "Maquillaje",
//         price: 1800,
//         img:"https://production.na01.natura.com/on/demandware.static/-/Sites-natura-ar-storefront-catalog/default/dwaed1593c/1200x1200/111397_1.jpg",
//         stock: 11
//     }
// ];

/* Constantes en mayusculas*/

export const getProducts =  (id) => {
    const _prods = id
        //  const _products = PRODUCTS.filter((prod) => prod.category === id)
        ? PRODUCTS.filter((product) => product.category === id)
        : PRODUCTS;
    return new Promise((res) => {
        setTimeout(() => {
            res(_prods); //Se resuelve con el array de libros
        }, 2500);
    });

};

export const getProduct = (id) => {
    const product = PRODUCTS.filter((product) => product.id === +id)[0];
    return new Promise((res) => {
        setTimeout(() => {
            res(product)
        }, 100);
    });

}