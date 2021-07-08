import React from 'react'
import { useDispatch } from "react-redux"
import { logOut } from "../../store/session";


const ProfileDisplay = ( {user} ) => {
    const dispatch = useDispatch();


    return (
        <div className='profile'>
            <div className='profile-display'>Welcome! - {user.username}</div>
            <div className='profile-display'>Stratagem</div>
            <div className='profile-display'>
                <button className='button' onClick={e => dispatch(logOut())}>Log Out</button>
            </div>
        </div>
    )
    
}

export default ProfileDisplay