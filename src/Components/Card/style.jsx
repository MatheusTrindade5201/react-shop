import styled from "styled-components";

const CardContainer = styled.div`
    width: 250px;
    height: 300px;
    margin-bottom: 5rem;
    transition: .2s;

    .link{
        text-decoration: none;
        color: #fff
    }

    :hover{
        transform: scale(1.05)
    }

    .card__top{
        display: flex;
        height: 290px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        flex-direction: column;
        justify-content: space-between;
    }

    .card__name{
        padding: .5rem;
        background-color: #00000074
    }

    .card__rating{
        align-self: flex-end;
        padding: .5rem;
        background-color: #00000084;
        border-radius: 50% 0 0 50%;
        font-size: 1.5rem
    }

    .card__bottom {
        display: flex;
        justify-content: space-between;
        padding: .5rem 1rem; 
        align-items: center;
        font-size: 1.5rem;
        background-color: #00000064;
        color: #fff
    }

    .icon {
        border: solid #C2C5D0 1px;
        padding: .5rem;
        border-radius: 8px;
        transition: .2s
    }

    .icon:hover{
        background-color: #C2C5D0;
        color: black;
        cursor: pointer;
    }

    .original_price {
        text-decoration: line-through;
        color: #C2C5D0
    }

    button {
        background-color: unset;
        border: none;
        color: #fff
    }
`

export default CardContainer