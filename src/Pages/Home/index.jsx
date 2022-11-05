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
import { getCategories, getFilteredProducts, getProducts } from "../../services/api"
import PageContainer, { Loading } from "./style"


const Home = () => {

    const initialimit = 20
    const [ toggle, setToggle] = useState('off');
    const [ categories, setCategories ] = useState([])
    const [ products , setProducts ] = useState(false) 
    const [ filter, setFilter ] = useState('')
    const [ limit, setLimit ] = useState(initialimit)
    const limitIncrease = 10;

    const {theme, setTheme} = useContext(MyContext)

    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }

    useEffect(() => {
        getCategories(setCategories);
        if(filter === ''){
            getProducts(setProducts, limit)
        }else{
            getFilteredProducts(setProducts, filter)
        }
    },[filter, limit])

    if(!products){

        return(
            <div>
                <Header 
                themeSwitch={toggle === 'off' ?  <MdDarkMode className="icon" onClick={switchToggle}/> :<MdOutlineDarkMode className="icon" onClick={switchToggle}/> }
                />
                <Categories categories={categories}/>
                <Loading>
                    <span></span>
                </Loading>
            </div>
        )
    }else{
        return(
            <PageContainer>
                <Header 
                themeSwitch={toggle === 'off' ?  <MdDarkMode className="icon" onClick={switchToggle}/> :<MdOutlineDarkMode className="icon" onClick={switchToggle}/> }
                />
                <Categories value={filter} onSelected={value => {
                    setFilter(value)
                    setLimit(initialimit)
                    }} categories={categories}/>
                <div className="page__products">
                    {products.map(product => <Card 
                    key={product.id}
                    path={'/product/'+product.id}
                    image={product.thumbnail}
                    rating={product.rating}
                    name={product.title}
                    price={product.price}
                    discount={product.price - (product.price * product.discountPercentage / 100)}
                    />)}
                </div>
                <button className="loadMore" disabled={limit === 100 ? true : false} onClick={()=>setLimit(limit < 100 ? limit + limitIncrease : limit)}>Load More</button>
            </PageContainer>
        )
        
       
    }
}

export default Home