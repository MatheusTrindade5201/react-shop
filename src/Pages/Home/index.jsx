import Header from "../../Components/Header"
import {MdOutlineDarkMode, MdDarkMode} from 'react-icons/md'
import { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import light from "../../Styled/Themes/light"
import dark from "../../Styled/Themes/dark"
import { MyContext } from "../../Context/MyContext"
import Categories from "../../Components/Categories"
import api from "../../Services/axios"


const Home = () => {

    const [ toggle, setToggle] = useState('off');
    const [ categories, setCategories ] = useState([])

    const {theme, setTheme} = useContext(MyContext)

    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }

    useEffect(() => {
        api.get('categories')
        .then((response) => setCategories(response.data))
    },[])

    return(
        <div>
            <Header 
            themeSwitch={toggle === 'off' ?  <MdDarkMode className="icon" onClick={switchToggle}/> :<MdOutlineDarkMode className="icon" onClick={switchToggle}/> }
            />
            <Categories categories={categories}/>
        </div>
    )
}

export default Home