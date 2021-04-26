import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import ProfileButton from './ProfileButton'
import './Navigation.css'



const Navigation = ({ isLoaded }) =>{
    const sessionUser = useSelector(state => state.session.user);

    let links;

    if(sessionUser){
        links = (
            <ProfileButton user={sessionUser} />
        )
    }
    else {
        links = (
            <>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            </>
        )
    }

    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            {isLoaded && links}
        </nav>
    )
}

export default Navigation