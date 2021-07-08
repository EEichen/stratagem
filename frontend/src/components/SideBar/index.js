import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { getManuals } from "../../store/manuals";
import { createStratagem, getStratagems, getStratagemsWithId } from "../../store/stratagems";
import Search from "../Search";
import ManualForm from "./ManualForm";
import ManualLink from "./ManualLink";
import './SideBar.css'

const SideBar = ({ selectedManual, setSelectedManual}) => {
    const dispatch = useDispatch();
    const manuals = useSelector(state => state.manuals);
    const history = useHistory();

    const [isSelected, setIsSelected] = useState(false);
    const [showManualForm, setShowManualForm] = useState(false);
    
    useEffect(() => {
        dispatch(getManuals())
    }, [dispatch])

    const selectManual = (e) => {
        if(e.target.id.startsWith('manual-')){
            const id = e.target.id.split('-')[1]

            setIsSelected(true)
            setSelectedManual(id)


            dispatch(getStratagemsWithId(id))
            history.push('/')
        }
    }


    return(
        <div className='side-bar'>
            <div className='search'>
                <Search selectManual={selectManual} />
            </div>
            <div className='add-stratagem'>
                <button 
                disabled={!isSelected} 
                onClick={e => dispatch(createStratagem(selectedManual))}
                className='add-stratagem-button'
                >
                ➕ Add a Stratagem
                </button>
            </div>

            <div>
                <div
                className='stratagems' 
                onClick={() => dispatch(getStratagems())}
                >
                    Stratagems
                </div>
            </div>
            <div
                className='manuals'
            >Manuals 
                <span
                    onClick={() => setShowManualForm(true)}
                    >
                    <button className='add-manual button'>

                     ➕
                    </button>
                </span>
            </div>

            {showManualForm ? <ManualForm  
                setShowManualForm={setShowManualForm} 
                isNewManual={true}
                manual={{}}
                /> : ''}

            <div className='manuals-list' onClick={selectManual}>
                {Object.values(manuals).reverse().map(manual => (
                    <ManualLink key={manual.id} manual={manual}/>
                ))}
            </div>
        </div>
    )
}

export default SideBar