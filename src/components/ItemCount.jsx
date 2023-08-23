import { useRef, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);
     let buttonAdd = useRef(null);
    let buttonSumar = useRef(null);

    const agregar = () => {

        count < stock ? (setCount(prevCount => prevCount + 1)) : disabledButton();
    }

    const quitar = () => {
        if (count > 1)
            setCount(prevCount => prevCount - 1)
        enabledButton()
    }


    const enabledButton = () => {
        buttonAdd.current.disabled = false;
        buttonSumar.current.disabled = false;

    }
    //Inhabilitar el boton agregar cuando no hay mas stock
    const disabledButton = () => {
        //  buttonAdd.current.disabled = true;
        buttonSumar.current.disabled = true;

    }

    return (
        <>
            {(stock) ? (
                <>
                    <ButtonGroup aria-label="Basic example" style={{ paddingLeft: "10px" }}>
                        <Button variant="secondary" onClick={() => quitar()}>-</Button>
                        <div className="contador">{count}</div>
                        <Button variant="secondary" ref={buttonSumar} onClick={() => agregar()}>+</Button>
                    </ButtonGroup>
                    <div>
                        <Button className="buttonAgregar rounded-3 overflow-hidden" ref={buttonAdd} onClick={() => { onAdd(count), setCount(1) }}> Agregar al carrito</Button>

                    </div> </>)
                : <span className="mb-2 text-muted">No hay stock del producto</span>}
        </>
    )
};