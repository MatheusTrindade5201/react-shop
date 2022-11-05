import { NavLink } from "react-router-dom"
import CategoriesContainer from "./style"

const Categories = (props) => {
    return (
        <CategoriesContainer>
            <div className="categories">
                <select onChange={event => props.onSelected(event.target.value)}>
                    <option value={''}>All</option>
                {props.categories.map(categorie => <option key={categorie} value={categorie}>{categorie.charAt(0).toUpperCase()+categorie.slice(1)}</option>)}
                </select>
                
            </div>
           
         </CategoriesContainer>
    )
}

export default Categories