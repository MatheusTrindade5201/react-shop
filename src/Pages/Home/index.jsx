import Header from "../../Components/Header"
import {MdOutlineDarkMode, MdDarkMode} from 'react-icons/md'
import { useContext, useState } from "react"
import { createContext } from "react"
import light from "../../Styled/Themes/light"
import dark from "../../Styled/Themes/dark"
import { MyContext } from "../../Context/MyContext"


const Home = () => {

    const [ toggle, setToggle] = useState('off');

    const {theme, setTheme} = useContext(MyContext)

    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }

    return(
        <div>
            <Header 
            themeSwitch={toggle === 'off' ?  <MdDarkMode className="icon" onClick={switchToggle}/> :<MdOutlineDarkMode className="icon" onClick={switchToggle}/> }
            />
        </div>
    )
}

export default Home