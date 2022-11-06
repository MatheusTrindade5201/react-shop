import ProductDetailsContainer from "./style"

const ProductDetails = (props) => {
    return (
        <ProductDetailsContainer>
            <div>
                <h2>Description:</h2>
                <p>{props.description}</p>
            </div>
            <div>
                <h2>Brand:</h2>
                <p>{props.brand}</p>
            </div>
            <div>
                <h2>Stock:</h2>
                <p>{props.stock}</p>
            </div>
            <div>
                <h2>Price:</h2>
                <p className="price">$ {props.price}</p>
                <p>$ {props.discount}</p>
            </div>
        </ProductDetailsContainer>
    )
}

export default ProductDetails