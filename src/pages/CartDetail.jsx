import { useRef, useState } from "react";
import { useCartContext } from "../state/Cart.context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';
import { AiFillDelete } from "react-icons/ai";
import { agregarOrden } from "../lib/orders.request";
import { updateManyProducts } from "../lib/productos.request";

export const CartDetail = () => {
    const { cart, getTotal, cleanCart, getCartCant, removeProduct } = useCartContext();
    const [activa, setActive] = useState(false);
    
    let divForm = useRef(null);
    let button = useRef(null);

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

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        email2: '',
        telefono: '',
    })

    const [validations, setValidations] = useState({
        nombre: '',
        email: '',
        email2: '',
        telefono: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value, })
    }

    //VALIDAR CADA INPUT DEL FORMULARIO CUANDO SALGA DEL FOCO
    const validateOne = (e) => {
        const { name } = e.target
        const value = values[name]
        let message = ''

        if (!value) {
            message = `${name} es requerido`
        } else {
            if (name === 'nombre') {
                (value.length < 3 || value.length > 20) ?
                    message = 'El nombre debe contener entre 3 y 20 caracteres' : message = 'OK'
            }
            if (name === 'email') {
                (!/\S+@\S+\.\S+/.test(value)) ?
                    message = 'El formato del mail debe ser como example@mail.com' : message = 'OK'
            }

            if (name === 'email2') {
                (validations.email === 'OK') ? ((value === values.email) ?
                    message = 'OK' : message = 'No coincide mail ingresado') : message = 'Validar email'

            }

            if (name === 'telefono') {
                (!/^[0-9]*(\.?)[ 0-9]+$/.test(value)) ?
                    message = 'El telefono debe ser numérico' : message = 'OK'

            }

        }
        setValidations({ ...validations, [name]: message })

    }

    //BOTON DEL FORMILARIO PARA REGISTRAR EL PEDIDO
    const handleClick = () => {
        const { nombre, email, email2, telefono } = validations;

        if (nombre === 'OK' && email === 'OK' && email2 === 'OK' && telefono === 'OK') {

            createOrder();

        }
        else {
            swal({
                title: "Datos erróneos del formulario",
                icon: "warning",
            });
        }

    }

    const handleActive = () => {
        //si es true es porque ya se hizo click, la clase ya es active
        //si es false es la primera vez
        objeto.map((element) => {
            activa ? seteoClases(false, element.name, element.classInitial) : seteoClases(true, element.name, element.classActive);
        })
    }

    const seteoClases = (value, ref, clase) => {
        setActive(value)
        ref.current.className = clase;
    }

    const createOrder = async () => {

        const items = cart.map(({ id, title, cant, price }) => ({ id, title, cant, price, }))

        const { nombre, email2, telefono } = values;

        const order = {
            buyer: { nombre, email2, telefono },
            items,  //le pasamos items, el resultado del map
            total: getTotal(),
        };

        const id = await agregarOrden(order);

        await updateManyProducts(items);

        swal({
            title: "Pedido Registrado!",
            text: "ORDEN: " + id,
            icon: "success",
        });
        setTimeout(() => {
            cleanCart();

        }, 1000);

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
                                        <td> <AiFillDelete style={{ cursor: "pointer" }} onClick={() => removeProduct(item.id)} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div id="cajaTotal" className="rounded-4 overflow-hidden">
                            <div>
                                TOTAL
                            </div>
                            <div className="centradoFlex">
                                ${getTotal()}
                            </div>
                        </div>

                    </div>

                    <div type="button" className="collapsible rounded-3" ref={button} onClick={handleActive}>Finalizar Compra</div>
                    <div className="content" ref={divForm}>
                        <Form className="centradoFlex">
                            <div className="col-md-9" style={{ fontSize: "13px" }}>
                                <Form.Group className="mb-3" controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control name="nombre" type="text" size="sm" placeholder="Nombre" onChange={handleChange} onBlur={validateOne} />
                                    <label className="mensaje">{validations.nombre}</label>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.correo">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control name="email" type="email" size="sm" placeholder="Correo" onChange={handleChange} onBlur={validateOne} />
                                    <label className="mensaje">{validations.email}</label>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="correo2">
                                    <Form.Label>Repite Correo</Form.Label>
                                    <Form.Control type="email" name="email2" size="sm" placeholder="Correo" onChange={handleChange} onBlur={validateOne} />
                                    <label className="mensaje">{validations.email2}</label>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="telefono">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control type="text" name="telefono" size="sm" placeholder="Telefono" onChange={handleChange} onBlur={validateOne} />
                                    <label className="mensaje">{validations.telefono}</label>
                                </Form.Group>

                                <div className="centradoFlex" style={{ paddingBottom: "10px" }}>
                                    <div type='button' className="buttonPedido" onClick={handleClick}>Realizar Pedido</div>
                                </div>
                            </div>
                        </Form>
                    </div>

                </>
            ) : (<div className="rounded-4 overflow-hidden cartEmpty">
                <h3 className="centradoFlex">El Carrito está vacio</h3>
            </div>
            )}

        </div>
    )
}