import { useEffect, useRef, useState } from "react";
import { useCartContext } from "../state/Cart.context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiFillDelete } from "react-icons/ai";
import { agregarOrden } from "../lib/orders.request";

export const CartDetail = () => {
    //  const claseInicialButon ='collapsible';
    const claseActiva = 'activa';
    const claseInicial = 'content';
    const { cart, getTotal, cleanCart, getCartCant, removeProduct } = useCartContext();
    const [activa, setActive] = useState(false);
    //const [classname , setClasname] = useState(classInicial)
    const [nombre, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    let divForm = useRef(null);
    let button = useRef(null);
    let objRef = [divForm, button];

    const objeto = [{
        name: divForm,
        classInitial: 'content',
        classActive: 'activo'
    },
    {
        name: button,
        classInitial: 'collapsible',
        classActive: 'collapsible activa'
    }
    ];


    function handleClick() {
        //si esta activa tiene que mostrar
        activa ? divForm.current.className = "activo" : divForm.current.className = "content"

    }


    // const handleChange = ((event) => {
    //     setValue((props) => ({
    //         ...props,
    //         [event.target.name]: event.target.value,
    //     }))
    //     console.log(JSON.stringify(value));
    // })


    const handleActive = () => {
        console.log(activa)
        //si es true es porque ya se hizo click, la clase ya es active
        //si es false es la primera vez
        //activa ?  seteoClases(false, classInicial): seteoClases(true, classInicial+' activa');
        objeto.map((element) => {
            console.log(element)
            activa ? seteoClases(false, element.name, element.classInitial) : seteoClases(true, element.name, element.classActive);
        })

        // activa ? seteoClases(false, divForm, claseInicial) : seteoClases(true, divForm, claseActiva);
    }

    const seteoClases = (value, ref, clase) => {
        setActive(value)
        ref.current.className = clase;
        console.log("activa " + activa)
        console.log("clase " + clase)
    }

    //VALIDAR EL FORMULARIO
    //SUBIRLO A GIT
    //VER VARIABLES DE ENTORNO
    //HACER EL README
    //VER LO DEL USEMEMO
    //CUANDO EL CARRITO ESTA VACIO QUE NO MUESTE EL CUADRO
    //ver de hacer el form con accordeon en otro componenten Formulario



    const createOrder = async () => {
        const items = cart.map(({ id, title, cant, price }) => ({ id, title, cant, price, }))


        const order = {
            buyer: { nombre, email, telefono },
            items,  //le pasamos items, el resultado del map
            total: getTotal(),
        };

        console.log({ order });

        const id = await agregarOrden(order);
        console.log("Id de la orden " + id);
    }


    return (
        <div className="container" style={{ width: "65%", paddingBottom: "20px" }}>
            {cart.length ? (
                <>
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
                                    <th scope="col">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td> {item.title}</td>
                                        <td>{item.cant}</td>
                                        <td>${item.price}</td>
                                        <td>${item.cant * item.price}</td>
                                        <td> <AiFillDelete  onClick={()=> removeProduct(item.id)}/></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div id="cajaTotal" className="rounded-4 overflow-hidden">
                            <div>
                                TOTAL
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                ${getTotal()}
                            </div>
                        </div>
                       
                    </div>

                    <div type="button" className="collapsible rounded-3" ref={button} onClick={handleActive}>Finalizar Compra</div>
                    <div className="content" ref={divForm}>
                        <Form style={{ display: "flex", justifyContent: "center" }}>
                            <div className="col-md-9" style={{ fontSize: "13px" }}>
                                <Form.Group className="mb-3" controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control name="nombre" type="text" size="sm" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.correo">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control name="email" type="email" size="sm" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="correo2">
                                    <Form.Label>Repite Correo</Form.Label>
                                    <Form.Control type="email" size="sm" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="telefono">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control type="number" size="sm" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} />
                                </Form.Group>

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Button variant="secondary" className="my-1" style={{ fontSize: "16px" }} onClick={createOrder}>Realizar Pedido</Button>
                                </div>
                            </div>
                        </Form>
                    </div>

                </>
            ) : (<h2>El Carrito está VACIO</h2>)}


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