import styled from "styled-components";

const ProductListContainer = styled.div`

    margin: 2rem 2vw;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .product{
        display: flex;
        gap: 2rem;
        color: ${props => props.theme.settings.text}
    }

    img{
        width: 200px;
        max-height: 120px
    }

    .infos {
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }
`

export default ProductListContainer