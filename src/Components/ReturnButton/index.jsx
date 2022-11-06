import { NavLink } from "react-router-dom"
import ReturnBtn from "./style"

const ReturnButton = () => {
    return (
        <ReturnBtn>
        <NavLink className='return__button' to={'/'}>Home</NavLink>
        </ReturnBtn>
        )
}

export default ReturnButton