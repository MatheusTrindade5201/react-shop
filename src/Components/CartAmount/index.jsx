import { useEffect, useState } from "react";
import { fillCart } from "../../services/api";
import AmountContainer from "./style";

const CartAmount = (props) => {
    
    const [total, setTotal] = useState()

    return(
        <AmountContainer>
            <p>Total</p>
            <p>$ {props.total}</p>
        </AmountContainer>
    )
}

export default CartAmount