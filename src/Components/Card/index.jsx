import { FaShoppingCart } from "react-icons/fa"
import CardContainer from "./style"

const Card = (props) => {
    return (
        <CardContainer>
            <div className="card__top" style={{backgroundImage: `url(${props.image})`}}>
                <p className="card__rating">{props.rating}</p>
                <h2 className="card__name">{props.name}</h2>
            </div>
            <div className="card__bottom">
                <div>
                    <p className="original_price">$ {props.price}</p>
                    <p>$ {props.discount}</p>
                </div>
                <FaShoppingCart className='icon'/>
            </div>
        </CardContainer>
    )
}

export default Card