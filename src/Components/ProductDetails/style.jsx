import styled from "styled-components";

const ProductDetailsContainer = styled.div`
    color: ${props => props.theme.settings.text};
    display:flex;
    flex-direction:column;
    gap: 1.5rem;
    background-color: ${props => props.theme.settings.opacity};
    padding: .5rem;
    flex-grow: 1;

    div{
        display:flex;
        flex-direction: column;
        gap: .5rem
    }

    .price {
        text-decoration: line-through;
        color: #C2C5D0  
    }
`

export default ProductDetailsContainer