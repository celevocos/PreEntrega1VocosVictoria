import { useEffect, useState } from "react";
import { ItemListContainer } from "../components/ItemListContainer";
import { deleteData, getProducts, uploadData } from "../lib/productos.request";
import { Loader } from "../components/Loader/Loader"
import { Row } from "react-bootstrap"


export const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   
    //Cuando se monta el componente trae los productos
    useEffect(() => {
        // uploadData();  
        getProducts().then(res => {
            setProducts(res)
            setIsLoading(false);
            //   deleteData(products);
        }
        )
    }, []);



    return (
        <div className="Container">
            {isLoading ?
                <div>
                    <div className="spinner">
                        <Loader />
                    </div>
                    <div style={{display:"flex", alignItems:"center", paddingLeft:"15%"}}>
                     <div className="card m-3" style={{ width: '16rem', padding: "0px" }}>
                        <div className="imagenPro skeleton"></div>
                        <div className="card-body auto">
                            <h5 className="card-title tit-skeleton skeleton"> </h5>
                            <div className="card-text text-skeleton skeleton">  </div>
                        </div>
                     </div>
                     <div className="card m-3" style={{ width: '16rem', padding: "0px" }}>
                        <div className="imagenPro skeleton"></div>
                        <div className="card-body auto">
                            <h5 className="card-title tit-skeleton skeleton"> </h5>
                            <div className="card-text text-skeleton skeleton">  </div>
                        </div>
                     </div>
                     <div className="card m-3" style={{ width: '16rem', padding: "0px" }}>
                        <div className="imagenPro skeleton"></div>
                        <div className="card-body auto">
                            <h5 className="card-title tit-skeleton skeleton"> </h5>
                            <div className="card-text text-skeleton skeleton">  </div>
                        </div>
                     </div>
                  </div>
                 </div> 
                :
                <ItemListContainer products={products} />}
        </div>
    ) //le pasamos el array a los componentes hijos
    // greeting={"Bienvenido a mi página de bellezaaaaaaaa"}
}
