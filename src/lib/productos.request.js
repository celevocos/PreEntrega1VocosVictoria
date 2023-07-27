const PRODUCTS = [

    {
        id: 1,
        title: "Jabones en barra",
        category: "Higiene",
        price: 1550,
        img: "https://www.cualestuhuella.cl/files/602d48a4b2a47_890x533.jpg",
        stock: 10,
    },

    {
        id: 2,
        title: "Irresistible",
        category: "Perfumes",
        price: 6805,
        img:"https://phantom-telva.unidadeditorial.es/e5c549dfd89820f896246bd56389d02d/resize/720/f/webp/assets/multimedia/imagenes/2022/03/09/16468333278876.jpg",
        stock: 10,

    },

    {
        id: 3,
        title: "Labiales",
        category: "Maquillaje",
        price: 299,
        img: "https://www.mujeryestilo.cl/wp-content/uploads/2018/04/SHEER-LABIALES.jpg",
        stock: 5,
    },

    {
        id: 4,
        title: "Pinturas de uñas",
        category: "Maquillaje",
        price: 450,
        img: "https://inventamoda.com.br/wp-content/uploads/2019/08/esmalte-natura-una.png",
        stock: 24,
    },

    {
        id:5,
        title: "Cher",
        category: "Perfumes",
        price: 15000,
        img:"https://distribuidorabioesenciavilo.com.ar/wp-content/uploads/2021/03/Type-absolutely-irresistible-foto1-700x700-1.jpg",
        stock: 8
    },

    {
        id:6,
        title: "Crema de rostro",
        category: "Higiene",
        price: 2800,
        img:"https://static1.mujerhoy.com/www/multimedia/202005/14/media/cortadas/cremas-proteccion-olay-kC6C--676x900@MujerHoy.jpg",
        stock: 14
    }

];

/* Constantes en mayusculas*/
/*export const getProducts=()=>{
    return new Promise((res) => {
        setTimeout(() => {
            res(PRODUCTS)
        }, 2000);
        
    
    })
}*/


export const getProducts = (id) => {
    const _prods = id
 //  const _products = PRODUCTS.filter((prod) => prod.category === id)
   
   ? PRODUCTS.filter((product) => product.category === id)
    : PRODUCTS;
  
    return new Promise((res) => {
      setTimeout(() => {
       res(_prods); //Se resuelve con el array de libros
      }, 500);
    });
  };

export const getProduct=(id)=>{
    const product = PRODUCTS.filter((product)=> product.id === +id)[0];
       return new Promise((res)=>{
        setTimeout(()=>{
            res(product)
       }, 100);
    });

}