import {useSelector} from 'react-redux'

import SideBar from '../SideBar'
import StratagemsPreviewArea from '../StratagemsPreviewArea'
import SplashPage from './SplashPage'
import './Homepage.css'
import { Route } from 'react-router'




const Homepage = () => {
    const sessionUser = useSelector(state => state.session.user)


    if(sessionUser){
        return (
            <div className='homepage'>
                <SideBar />
                <StratagemsPreviewArea />
                <Route path='/stratagem/:id'>

                </Route>
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