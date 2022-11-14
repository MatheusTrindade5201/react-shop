import styled from "styled-components";

const AmountContainer = styled.div`
    border-top: solid 1px ${props => props.theme.settings.secondary};
    padding: 2rem;
    display:flex;
    justify-content: space-between;
    box-sizing: border-box;
    color:${props => props.theme.settings.text}
`

export default AmountContainer