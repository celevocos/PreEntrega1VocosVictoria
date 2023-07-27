import { Item } from "./Item"
import { Container, Row , Col} from "react-bootstrap"

export const ItemListContainer = ({ products }) => {
    return (
        <Container className='my-5'>
            <h2 className='text-center'>Productos</h2>
              <Row className="justify-content-center">
                {products.map((product) =>
                    <Item  
                    key={product.id}
                    id={product.id}
                    img={product.img}
                    category={product.category}
                    title={product.title}
                    price={product.price} />
                )}
            </Row>
        </Container>
    )
}
