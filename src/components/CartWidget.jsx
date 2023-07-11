import { PiShoppingCartFill } from 'react-icons/pi'

export const CartWidget = () => {
    return <>
        <div style={{alignItems:"flex-end", color: "white"}}>
            <PiShoppingCartFill style={{ color: "white" ,fontSize: 28}} />
             <span style={{ fontSize:13, fontFamily:"sans-serif"}}>(5) </span>

        </div>


    </>
}