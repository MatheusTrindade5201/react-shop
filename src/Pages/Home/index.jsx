import Header from "../../Components/Header"
import {MdOutlineDarkMode, MdDarkMode} from 'react-icons/md'
import { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import light from "../../Styled/Themes/light"
import dark from "../../Styled/Themes/dark"
import { MyContext } from "../../Context/MyContext"
import Categories from "../../Components/Categories"
import api from "../../Services/axios"
import Card from "../../Components/Card"
import { getCategories, getProducts } from "../../services/api"
import PageContainer from "./style"


const Home = () => {

    const [ toggle, setToggle] = useState('off');
    const [ categories, setCategories ] = useState([])
    const [ products , setProducts ] = useState(false) 

    const {theme, setTheme} = useContext(MyContext)

    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }

    useEffect(() => {
        getCategories(setCategories);
        getProducts(setProducts)
    },[])

    if(!products){

        return(
            <div>
                <Header 
                themeSwitch={toggle === 'off' ?  <MdDarkMode className="icon" onClick={switchToggle}/> :<MdOutlineDarkMode className="icon" onClick={switchToggle}/> }
                />
                <Categories categories={categories}/>
                
            </div>
        )
    }else{
        return(
            <PageContainer>
                <Header 
                themeSwitch={toggle === 'off' ?  <MdDarkMode className="icon" onClick={switchToggle}/> :<MdOutlineDarkMode className="icon" onClick={switchToggle}/> }
                />
                <Categories categories={categories}/>
                <div className="page__products">
                    {products.map(product => <Card 
                    path={'/'+product.id}
                    image={product.thumbnail}
                    reting={product.rating}
                    name={product.title}
                    price={product.price}
                    discount={product.price - (product.price * product.discountPercentage / 100)}
                    />)}
                </div>
            </PageContainer>
        )
        
       
    }
}

export default Home