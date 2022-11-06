import { useState } from "react"
import ProductGalleryContainer from "./style"

const ProductGallery = (props) => {

    const [currentImage, setCurrentImage] = useState(props.firstImage)

    return (
        <ProductGalleryContainer>
            <img className="main__image" src={currentImage} />
            <div className="gallery">
                {props.gallery.map(image => <img src={image} onClick={event => setCurrentImage(event.target.src)} /> )}
            </div>
        </ProductGalleryContainer>
    )
}

export default ProductGallery