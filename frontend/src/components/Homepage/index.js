import {useSelector} from 'react-redux'

import SideBar from '../SideBar'
import StratagemsPreviewArea from '../StratagemsPreviewArea'
import SplashPage from './SplashPage'
import './Homepage.css'




const Homepage = () => {
    const sessionUser = useSelector(state => state.session.user)


    if(sessionUser){
        return (
            <div className='homepage'>
                <SideBar />
                <StratagemsPreviewArea />
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