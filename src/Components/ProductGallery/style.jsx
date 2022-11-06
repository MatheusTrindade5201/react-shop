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

.gallery::-webkit-scrollbar {
  width: 0px;
  height: 6px;
}
.gallery::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

.gallery::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
.gallery::-webkit-scrollbar-thumb:active {
  background: #000000;
}
.gallery::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
.gallery::-webkit-scrollbar-track:hover {
  background: #666666;
}
.gallery::-webkit-scrollbar-track:active {
  background: #333333;
}
.gallery::-webkit-scrollbar-corner {
  background: transparent;
}

@media screen and (max-width: 520px) {
    width: 100%;
    .main__image{
       width: 100%;
       height: 100%
    }
}

`

export default ProductGalleryContainer