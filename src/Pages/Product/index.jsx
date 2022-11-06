import { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";
import Card from "../../Components/Card";
import Header from "../../Components/Header"
import ProductDetails from "../../Components/ProductDetails";
import ProductGallery from "../../Components/ProductGallery";
import Related from "../../Components/Related";
import ReturnButton from "../../Components/ReturnButton";
import { MyContext } from "../../Context/MyContext";
import { getFilteredProducts, getRelated, getSingleProducts } from "../../services/api";
import dark from "../../Styled/Themes/dark";
import light from "../../Styled/Themes/light";
import PageContainer, { Loading, ProductInfoContainer } from "../style";

const ProductPage = () => {
    
    const { id } = useParams()

    const [ toggle, setToggle] = useState('off');
    const {theme, setTheme} = useContext(MyContext);
    const [ product, setProduct ] = useState(false);
    const [ related, setRelated ] = useState([])

    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }

    useEffect(() => {
        getSingleProducts(setProduct, id);
        getRelated(setRelated, id)
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
                    <ReturnButton/>
                    <h1 className="product__name">{product.title} <span>{product.rating}</span></h1>
                    <div className="details">
                        <ProductGallery 
                        firstImage={product.images[0]}
                        gallery={product.images}
                        />
                        <ProductDetails
                        description={product.description}
                        brand={product.brand}
                        stock={product.stock}
                        price={product.price}
                        discount={product.price - (product.price * product.discountPercentage / 100)}
                        />
                    </div>
                    <Related 
                    relatedProducts={related.map(product => <Card 
                        key={product.id}
                        path={'/product/'+product.id}
                        image={product.thumbnail}
                        rating={product.rating}
                        name={product.title}
                        price={product.price}
                        discount={product.price - (product.price * product.discountPercentage / 100)}
                    />)}
                    />
                </ProductInfoContainer>
            </PageContainer>
            
        )
        
       
    }
}
export default ProductPage