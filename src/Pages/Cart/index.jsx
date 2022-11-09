import { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Header from "../../Components/Header";
import ProductCartList from "../../Components/ProductIten";
import { MyContext } from "../../Context/MyContext";
import { fillCart } from "../../services/api";
import dark from "../../Styled/Themes/dark";
import light from "../../Styled/Themes/light";
import PageContainer, { Loading } from "../style";

const CartPage = () => {

    const [ toggle, setToggle] = useState('off');
    const {theme, setTheme} = useContext(MyContext);
    const [products, setProducts] = useState(false)

    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }
    
    useEffect(() => {
        setProducts(fillCart());
    },[])

   if(!products){
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
    }else{
        return (
         <PageContainer>
                <Header 
                themeSwitch={toggle === 'off' ?  <MdDarkMode className="icon" onClick={switchToggle}/> :<MdOutlineDarkMode className="icon" onClick={switchToggle}/> }
                />
                <ProductCartList products={products} />
        </PageContainer>
        )
    }
}

export default CartPage