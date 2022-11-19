import styled from "styled-components";

const ProductListContainer = styled.div`

    margin: 2rem 2vw;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    

    .product{
        display: flex;
        gap: 2rem;
        color: ${props => props.theme.settings.text};
        justify-content: space-between;
        
    
        .delete{
            color: ${props => props.theme.settings.text};
            align-self: center;
            font-size: 1.5rem;
            transition: .2s;
        }

        .delete:hover{
            color: coral;
            cursor: pointer;
        }
    }

    img{
        width: 200px;
        max-height: 120px
    }

    .infos {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1
    }

    
`

export default ProductListContainer