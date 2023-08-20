import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../lib/productos.request"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Loader } from "../components/Loader/Loader";
import { Skeleton } from "../components/Skeleton/Skeleton";

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
    <>
      {isLoading ?
        <><Loader />
          <div className="skeleton-prin" >
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </> :
        <ItemListContainer products={products} category={id} />}
    </>
  );
};