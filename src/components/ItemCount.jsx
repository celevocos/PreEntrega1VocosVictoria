import { useEffect, useState } from 'react';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
import  Button  from 'react-bootstrap/Button';

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0);

    const agregar = () => {
        console.log(stock)
        count < stock ? setCount(prevCount => prevCount + 1) : console.log("No hay mas stock")
    }
    /* useEffect(()=>{
         setCount(prevCount => prevCount + 1)
 
     },[])*/

    const quitar = () => {
        if (count > 0)
            setCount(prevCount => prevCount - 1)
    }


    return (
        <div style={{alignItems:"center"}}>
            <ButtonGroup aria-label="Basic example" style={{paddingLeft:"10px"}}>
                <Button variant="secondary" onClick={() => quitar()}>-</Button>
                <div className='contador'>{count}</div>
                <Button variant="secondary" onClick={() => agregar()}>+</Button>
            </ButtonGroup>
            <div>
            <Button variant="warning" className="my-1" style={{fontSize: "14px"}} onClick={() => onAdd(count)}> Agregar al carrito</Button>
            </div>
        </div>

    )
};