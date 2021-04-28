import {useSelector} from 'react-redux'

import SideBar from '../SideBar'
import StratagemsPreviewArea from '../StratagemsPreviewArea'
import SplashPage from './SplashPage'
import './Homepage.css'
import { Route } from 'react-router'
import StratagemNotepad from '../StratagemNotepad'




const Homepage = () => {
    const sessionUser = useSelector(state => state.session.user)


    if(sessionUser){
        return (
            <div className='homepage'>
                <SideBar />
                <StratagemsPreviewArea />
                <Route path='/stratagem/:id'>
                    <StratagemNotepad />
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