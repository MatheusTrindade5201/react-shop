import { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header"
import ProductGallery from "../../Components/ProductGallery";
import { MyContext } from "../../Context/MyContext";
import { getSingleProducts } from "../../services/api";
import dark from "../../Styled/Themes/dark";
import light from "../../Styled/Themes/light";
import PageContainer, { Loading, ProductInfoContainer } from "../style";

const ProductPage = () => {
    
    const { id } = useParams()

    const [ toggle, setToggle] = useState('off');
    const {theme, setTheme} = useContext(MyContext);
    const [ product, setProduct ] = useState(false);


    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }

    useEffect(() => {
        getSingleProducts(setProduct, id)
    },[])

    if(!product){

        return(
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
        return(
            <PageContainer>
                <Header 
                themeSwitch={toggle === 'off' ?  <MdDarkMode className="icon" onClick={switchToggle}/> :<MdOutlineDarkMode className="icon" onClick={switchToggle}/> }
                />
                <ProductInfoContainer>
                    <ProductGallery 
                    firstImage={product.images[0]}
                    gallery={product.images}
                    />
                </ProductInfoContainer>
            </PageContainer>
        )
        
       
    }
}
export default ProductPage