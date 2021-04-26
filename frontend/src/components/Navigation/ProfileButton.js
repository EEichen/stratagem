import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { logOut } from "../../store/session";


const ProfileButton = ( {user} ) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        if(!showMenu) return

        const closeMenu = () => {
            setShowMenu(false);
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])


    return (
        <div>
            <button onClick={openMenu}>
                <i className='fas fa-user-circle' />
            </button>
            {showMenu && (
                <ul className='profile-dropdown'>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={e => dispatch(logOut())}>Log Out</button>
                    </li>
                </ul>
            )}
        </div>
    )
    
}

export default ProfileButton