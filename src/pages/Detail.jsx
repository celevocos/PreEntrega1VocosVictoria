import { useEffect, useState } from "react";
import { getProduct } from "../lib/productos.request"
import { useParams } from "react-router-dom";
import { ItemCount } from "../components/ItemCount";
import { useCartContext } from "../state/Cart.context";
import { Loader } from "../components/Loader/Loader";
import '../styles/textos.css'

export const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const { agregarProduct } = useCartContext(); //podemos traer todo el valur o desestructurar y traer solo la funcion


    useEffect(() => {
        getProduct(id).then((res) => {
            setProduct(res)
        });
    }, [])

    const handleAdd = (cant) => {
        // console.log(product)
        agregarProduct(product, cant);
    };


    if (!Object.keys(product).length) return  <div className="spinner">
    <Loader />
  </div>

    return (
     
        <div style={{display:"flex" , justifyContent:"center"}}>
            {/*  <div style={{ width: "900px", height: "330px" }}>    className="img-fluid" es delimg*/}
            <div className="boxflex">
                <img src={product.img} ></img>
                <div className="box">
                    <h5>{product.title} </h5>
                    <h4 className="titulo">${product.price}</h4>
                    <span className="text-secondary" >{product.category}</span>
                    <p>{product.description}   </p>
                    <span className="mb-2 text-muted">Stock: {product.stock}</span>
                    <div>
                        <ItemCount stock={product.stock} onAdd={handleAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}
