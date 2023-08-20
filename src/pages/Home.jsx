import { useEffect, useState } from "react";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { deleteData, getProducts} from "../lib/productos.request";

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
                      <ItemListContainer products={products} loading={isLoading} />
        </div>
    ) 
}
