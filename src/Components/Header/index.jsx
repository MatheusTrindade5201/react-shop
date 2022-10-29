import HeaderContainer from './style'
import logo from '../../assets/images/logo.svg'
import { FaShoppingCart } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'



const Header = (props) => {
    return (
        <HeaderContainer>
            <div className='logo'>
            <img src={logo} />
            </div>
            <div className='user'>
                <FaShoppingCart  className='icon'/>
                <CgProfile className='icon'/>
            </div>
            {props.themeSwitch}
        </HeaderContainer>
    )
}

export default Header