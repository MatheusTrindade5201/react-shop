import { NavLink } from "react-router-dom"
import CategoriesContainer from "./style"

const Categories = (props) => {
    return (
        <CategoriesContainer>
            <div className="categories">
                <select size={1}>
                    <option>All</option>
                {props.categories.map(categorie => <option onClick={event => props.onSelected(event.target.value)}key={categorie} value={categorie}>{categorie.charAt(0).toUpperCase()+categorie.slice(1)}</option>)}
                </select>
                
            </div>
           
         </CategoriesContainer>
    )
}

export default Categories