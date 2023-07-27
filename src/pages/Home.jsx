import { useEffect, useState } from "react";
import { ItemListContainer } from "../components/ItemListContainer";
import { getProducts } from "../lib/productos.request";


export const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //Cuando se monta el componente trae los productos
    useEffect(() => {
        getProducts().then(res => {
            setIsLoading(false);
            setProducts(res)
        }
        )
    }, []);


    return (<div className="container">
        <span> {isLoading ? "Cargando productos..." : "Productos cargados correctamente!"}</span>
        <ItemListContainer products={products} />
    </div>
    ) //le pasamos el array a los componentes hijos
    // greeting={"Bienvenido a mi página de bellezaaaaaaaa"}
}