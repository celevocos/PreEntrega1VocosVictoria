import { Item } from "../Item/Item"
import { Container, Row } from "react-bootstrap"
import { Loader } from "../Loader/Loader"
import { Skeleton } from "../Skeleton/Skeleton"
import './ItemListContainer.css'
import '../Skeleton/Skeleton.css'

export const ItemListContainer = ({ products, category, loading }) => {
    return (
        <>
            {loading ? (<> <Loader />
                <div className="skeleton-prin" >
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </>
            ) : <>
             <Container className='my-5'>
                <h2 className='titulo-prod' >{category ? "Productos de " + category : "Catálogo de Productos"}</h2>
                <Row className="justify-content-center">
                    {products.map((product) =>
                        <Item
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            category={product.category}
                            description={product.description}
                            title={product.title}
                            price={product.price} />
                    )}
                </Row>
            </Container> </>}
        </>
    )
}
