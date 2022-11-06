import styled from "styled-components";

const CategoriesContainer = styled.div`
    padding: 1rem;
    box-sizing: border-box;

    select{
        box-sizing: border-box;
        background-color: unset;
        padding: .5rem;
        color: ${props => props.theme.settings.text}
    }

    option{
        background-color: ${props => props.theme.settings.primary}
    }
`

export default CategoriesContainer