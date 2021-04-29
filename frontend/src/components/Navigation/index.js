import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import ProfileDisplay from './ProfileButton'
import './Navigation.css'



const Navigation = ({ isLoaded }) =>{
    const sessionUser = useSelector(state => state.session.user);

    let links;

    if(sessionUser){
        links = (
            <ProfileDisplay user={sessionUser} />
        )
    }
    else {
        links = (
            <>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <h1 className='welcome'>Welcome to Stratagem!</h1>
            </>
        )
    }

    return (
        <nav className='nav-bar'>
            {isLoaded && links}
        </nav>
    )
}

export default Navigation