import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {NavLink} from 'react-router-dom'
import { getManuals } from "../../store/manuals";
import { getStratagemsWithId } from "../../store/stratagems";
import ManualLink from "./ManualLink";

const SideBar = () => {
    const dispatch = useDispatch();
    const manuals = useSelector(state => state.manuals);
    // console.log(manuals)
    
    useEffect(() => {
        dispatch(getManuals())
    }, [dispatch])

    const selectManual = (e) => {
        // console.log(e.target.id)
        if(e.target.id.startsWith('manual-')){
            const id = e.target.id.split('-')[1]
            console.log(id);

            dispatch(getStratagemsWithId(id))
        }
    }

    return(
        <div>
            Side Bar (placeholder)
            <div>
                <NavLink to='/allStratagems'>Stratagems</NavLink>
            </div>
            <div>Manuals</div>
            <div className='manuals-list' onClick={selectManual}>
                {Object.values(manuals).map(manual => (
                    <ManualLink key={manual.id} manual={manual}/>
                ))}
            </div>
        </div>
    )
}

export default SideBar