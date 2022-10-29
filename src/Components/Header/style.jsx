import styled from "styled-components";

const HeaderContainer = styled.header`
   display: flex;
   align-items: center;
   padding: 1rem 2vw;
   box-shadow: 0px 4px 4px 0px rgba(0,0,0,.3);
   justify-content: space-between;
   width: 100%;
   box-sizing: border-box;
   gap: 2rem;

   .logo{
      flex-grow: 2
   }

   img{
      max-width: 100px;
   }

   .icon {
      font-size: 1.5rem;
      transition: .2s;
      color: ${props => props.theme.settings.text}
   }

   .icon:hover{
      cursor: pointer;
      color: ${props => props.theme.settings.text_hover}
   }

   .user{
      display:flex;
      gap: 1rem;
   }
`

export default HeaderContainer