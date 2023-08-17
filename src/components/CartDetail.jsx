import { useEffect } from "react";
import { useCartContext } from "../state/Cart.context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CartDetail = () => {
    const { cart, getTotal, getCartCant, cleanCart } = useCartContext();

    console.log("Carrito: ");
    console.log(cart)

    return (
        <div className="container" style={{ width: "65%" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="secondary" className="my-1" style={{ fontSize: "16px" }} onClick={() => cleanCart()}> Vaciar carrito</Button>
            </div>
            <div className="detailCart">
                <table className="table table-hover table-dark rounded rounded-4 overflow-hidden">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td> {item.title}</td>
                                <td>{item.cant}</td>
                                <td>${item.price}</td>
                                <td>${item.cant * item.price}</td>
                            </tr>
                        ))}
                        <tr>
                            <th scope="col" colSpan={3}>TOTAL</th>
                            <th>${getTotal()}</th>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="Container">
                <Form>
                    <div className="col-md-9" style={{ fontSize: "13px" }}>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="Nombre" />
                        </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.correo">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email"  size="sm" placeholder="Correo" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="correo2">
                                <Form.Label>Repite Correo</Form.Label>
                                <Form.Control type="email" size="sm" placeholder="Correo" />
                            </Form.Group>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button variant="secondary" className="my-1" style={{ fontSize: "16px" }}>Realizar Pedido</Button>
                            </div>
                    </div>
                </Form>
            </div>

            {/*  <div className="col-md-4">
                <input type="text" className="form-control form-control-sm" placeholder="Nombre" />
            </div>
            <div className="col-md-4">
                <input type="email" className="form-control form-control-sm" placeholder="Correo" />
            </div>
            <div className="col-md-4">
                <input type="email" className="form-control form-control-sm" placeholder="Repite Correo" />
            </div> 
            <div className="row">
                <Button variant="secondary" className="my-1" style={{ fontSize: "16px" }}>Realizar Pedido</Button>

            </div>*/}
        </div>
    )
}