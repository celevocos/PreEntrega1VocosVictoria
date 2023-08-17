import { useEffect, useState } from "react";
import { Item } from "./Item/Item"
import { Container, Row, Col } from "react-bootstrap"

export const ItemListContainer = ({ products, category }) => {

    return (
        <Container className='my-5'>
            <h2 className='text-center' style={{ color: "#34495E", fontFamily: "Segoe UI", fontStyle: "oblique" }}>{category ? "Productos de " + category : "Catálogo de Productos"}</h2>
            <Row className="justify-content-center">
                { products.map((product) =>
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
        </Container>
    )
}
