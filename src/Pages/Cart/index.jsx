import { useContext, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Header from "../../Components/Header";
import { MyContext } from "../../Context/MyContext";
import dark from "../../Styled/Themes/dark";
import light from "../../Styled/Themes/light";
import { Loading } from "../style";

const CartPage = () => {

    const [ toggle, setToggle] = useState('off');
    const {theme, setTheme} = useContext(MyContext);

    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }

   
    return (
        <div>
            <Header 
            themeSwitch={toggle === 'off' ?  <MdDarkMode className="icon" onClick={switchToggle}/> :<MdOutlineDarkMode className="icon" onClick={switchToggle}/> }
            />
            <Loading>
                <span></span>
            </Loading>
         </div>
    )
}

export default CartPage