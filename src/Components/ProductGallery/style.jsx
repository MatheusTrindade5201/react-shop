import styled from "styled-components";

const ProductGalleryContainer = styled.div`
    width: 500px;
    .main__image{
       width: 500px;
       height: 250px
    }

    .gallery{
        display: flex;
        gap: .5rem;
        overflow: scroll
    }

    .gallery img {
        width: 119px;
        height: 75px
    }
`

export default ProductGalleryContainer