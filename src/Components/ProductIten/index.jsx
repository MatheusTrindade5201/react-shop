import ProductListContainer from "./stye"
import { AiFillCloseCircle } from "react-icons/ai"


const ProductCartList = (props) => {
    return(
        <ProductListContainer>
            {props.products.map(product => <div key={product.title} className="product">
                <img src={product.thumbnail} />
                <div className="infos">
                    <h2>{product.title}</h2>
                    <p>$ {(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</p>
                </div>
                <AiFillCloseCircle className="delete"/>
            </div>)}
        </ProductListContainer>
    )
}

export default ProductCartList