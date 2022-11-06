import styled from "styled-components";

const ReturnBtn = styled.div`
       .return__button{
        padding: .5rem 1rem;
        font-size: .8rem;
        background-color: unset;
        color: ${props => props.theme.settings.text};
        border: 1px solid ${props => props.theme.settings.secondary};
        transition: .2s;
        text-decoration: none
    }

    .return__button:hover {
        color: ${props => props.theme.settings.primary};
        background-color: ${props => props.theme.settings.secondary};
        cursor: pointer;
    } 
`

export default ReturnBtn