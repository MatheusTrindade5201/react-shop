import HeaderContainer from './style'
import logo from '../../assets/images/logo.svg'
import { FaShoppingCart } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { useContext } from 'react'
import { MyContext } from '../../Context/MyContext'



const Header = (props) => {

    const {cart} = useContext(MyContext)

    return (
        <HeaderContainer>
            <div className='logo'>
            <img src={logo} />
            </div>
            <div className='user'>
                <div className='cart'>
                    <FaShoppingCart  className='icon'/>
                    <p>{cart > 0 ? cart : ''}</p>
                </div>
                <CgProfile className='icon'/>
            </div>
            {props.themeSwitch}
        </HeaderContainer>
    )
}

export default Header