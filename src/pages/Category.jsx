import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../lib/productos.request"
import { ItemListContainer } from "../components/ItemListContainer";

export const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setIsLoading(true);
    getProducts(id).then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, [id]);

  return (
    <div>
      <div className="container">
      <span> {isLoading ? "Cargando productos...": "Productos cargados correctamente!"}</span>
        <ItemListContainer products={products} />
      </div>
    </div>
  );
};