import styled from "styled-components";

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