import { NavLink } from "react-router-dom"


const ManualLink = ({manual}) => {
    return(
        <NavLink to={`stratagems/${manual.id}`}></NavLink>
    )
}

export default ManualLink