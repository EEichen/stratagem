import {useSelector} from 'react-redux'

import SideBar from '../SideBar'
import StratagemsPreviewArea from '../StratagemsPreviewArea'
import SplashPage from './SplashPage'
import './Homepage.css'
import { Route } from 'react-router'
import StratagemNotepad from '../StratagemNotepad'
import { useState } from 'react'




const Homepage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [selectedManual, setSelectedManual] = useState('');

    if(sessionUser){
        return (
            <div className='homepage'>
                <SideBar selectedManual={selectedManual} setSelectedManual={setSelectedManual}/>
                <StratagemsPreviewArea selectedManual={selectedManual}/>
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