import { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import CartAmount from "../../Components/CartAmount";
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
    const [products, setProducts] = useState(false);
    const [total, setTotal] = useState(0);


    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }

    const getTotal = () => {
        let price = 0
        for(let i = 0; i < products.length; i++){
            price += products[i].price - (products[i].price * products[i].discountPercentage / 100).toFixed(2)
        }
        setTotal(price);
    }
    
    useEffect(() => {
        setProducts(fillCart(setTotal))
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
                <CartAmount total={total.toFixed(2)} />
        </PageContainer>
        )
    }
}

export default CartPage