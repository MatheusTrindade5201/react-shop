import styled from "styled-components";

const RelatedContainer = styled.div`

    padding: 2rem 0;

    h2{
        color: ${props => props.theme.settings.text};
        padding-bottom: 2rem
    }

    .related{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center
    }
`

export default RelatedContainer