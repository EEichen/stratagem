import {useSelector} from 'react-redux'

import SideBar from '../SideBar'
import SplashPage from './SplashPage'




const Homepage = () => {
    const sessionUser = useSelector(state => state.session.user)


    if(sessionUser){
        return (
            <div>
                user Homepage
                <SideBar />
            </div>
        )
    }
    else {
        return (
            <SplashPage />
        )
    }
}

export default Homepage