import styled, { keyframes } from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    box-sizing: border-box;

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
        display: flex;
        gap: 5rem;
        align-items: center;
        padding: 1rem 0;
        color: ${props => props.theme.settings.text}
    }

    .product__name span {
        font-size: 1.2rem;
        background-color: ${props => props.theme.settings.opacity};
        padding: .5rem;
        border-radius: 8px 0
    }

    .details {
        display: flex;
        gap: .5rem
    }

    @media screen and (max-width: 900px){
        .details{
            flex-direction: column
        }
    }

`

export const Return = styled.div`
    padding: 2rem 5vw;

    .return__button{
        text-decoration: none;
        color: ${props => props.theme.settings.text};
        border: 1px solid ${props => props.theme.settings.text};
        padding: .5rem 1rem;
        transition: .2s
    }

    .return__button:hover{
        color: ${props => props.theme.settings.primary};
        border: 1px solid ${props => props.theme.settings.primary};
        background-color: ${props => props.theme.settings.text}
    }
`