import { useEffect, useState } from "react";
import { getProduct } from "../lib/productos.request"
import { useParams } from "react-router-dom";

export const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(id).then((res) => {
            setProduct(res)
        });
    }, [])

    return (
        <div className="row justify-content-center align-items-center" style={{paddingTop:"20px"}}>
            <div style={{ width: "900px", height: "330px" }}>
                <div className="boxflex">
                    <img src={product.img} className="img-fluid"></img>
                    <div className="box">
                        <h5>{product.title} </h5>
                        <h4 className="text-warning">${product.price}</h4>
                        <span className="mb-2 text-muted">{product.category}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam repudiandae nesciunt? Vitae dolorum necessitatibus nemo corporis incidunt quae molestiae quam cum soluta, consequuntur reprehenderit deleniti! Ducimus aut corrupti amet.
                        </p>
                        <span className="mb-2 text-muted">Stock: {product.stock}</span>
                        <div>
                        <button type="button" className="btn btn-warning">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
