import styled, { keyframes } from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    width: 100vw; 
    .page__products{
        display: flex;
        flex-wrap: wrap;
        margin: 2rem 2vw;
        gap: 2rem;
        justify-content: center
    }

    .loadMore {
        margin: 0 auto;
        font-size: 1.2rem;
        padding: .5rem 1rem;
        background-color: unset;
        color: ${props => props.theme.settings.text};
        border: 1px solid ${props => props.theme.settings.secondary};
        transition: .2s
    }

    .loadMore:hover {
        color: ${props => props.theme.settings.primary};
        background-color: ${props => props.theme.settings.secondary};
        cursor: pointer;
    }
`

export default PageContainer

export const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;

    span{
        width: 20px;
        height: 20px;
        display: block;
        animation: ${rotate} 2s linear infinite;
        padding: 1rem;
        font-size: 1.2rem;
        border-top: 1px #fff solid;
        border-radius: 50%;
    }
    
`

export const ProductInfoContainer = styled.div`
    margin: 2rem 2vw;
    
    .product__name{
        padding: 1rem 0;
        color: ${props => props.theme.settings.text}
    }

`