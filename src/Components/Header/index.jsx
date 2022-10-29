import HeaderContainer from './style'
import logo from '../../assets/images/logo.svg'
import { FaShoppingCart } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'



const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} />
            <div className='user'>
                <FaShoppingCart  className='icon'/>
                <CgProfile className='icon'/>
            </div>
        </HeaderContainer>
    )
}

export default Header