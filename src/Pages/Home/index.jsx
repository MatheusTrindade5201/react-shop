import Header from "../../Components/Header"
import {MdOutlineDarkMode, MdDarkMode} from 'react-icons/md'
import { useState } from "react"


const Home = () => {
    const [ toggle, setToggle] = useState('off');

    const switchTheme = () => {
        setToggle(toggle === 'off' ? 'on' : 'off')
    }

    return(
        <div>
            <Header 
            themeSwitch={toggle === 'off' ?  <MdDarkMode onClick={switchTheme}/> :<MdOutlineDarkMode onClick={switchTheme}/> }
            />
        </div>
    )
}

export default Home