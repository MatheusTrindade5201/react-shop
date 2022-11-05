import { useContext, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Header from "../../Components/Header"
import { MyContext } from "../../Context/MyContext";
import PageContainer, { Loading } from "../style";

const ProductPage = () => {
    
    const [ toggle, setToggle] = useState('off');

    const {theme, setTheme} = useContext(MyContext);
    const [ product, setProduct ] = useState(false)


    const switchToggle = () => {
        setToggle(toggle === 'off' ? 'on' : 'off');
        setTheme(theme === light ? dark : light)
    }

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
            </PageContainer>
        )
        
       
    }
}
export default ProductPage