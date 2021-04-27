import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getManuals } from "../../store/manuals";
import { createStratagem, getStratagems, getStratagemsWithId } from "../../store/stratagems";
import ManualForm from "./ManualForm";
import ManualLink from "./ManualLink";

const SideBar = () => {
    const dispatch = useDispatch();
    const manuals = useSelector(state => state.manuals);

    const [isSelected, setIsSelected] = useState(false);
    const [selectedManual, setSelectedManual] = useState('');
    const [showManualForm, setShowManualForm] = useState(false);
    // console.log(manuals)
    
    useEffect(() => {
        dispatch(getManuals())
    }, [dispatch])

    const selectManual = (e) => {
        // console.log(e.target.id)
        if(e.target.id.startsWith('manual-')){
            const id = e.target.id.split('-')[1]
            console.log(id);

            setIsSelected(true)
            setSelectedManual(id)


            dispatch(getStratagemsWithId(id))
        }
    }


    return(
        <div>
            Side Bar (placeholder)
            <div>
                <button disabled={!isSelected} onClick={e => dispatch(createStratagem(selectedManual))}>
                ➕ Add a Stratagem
                </button>
            </div>
            
            <div>
                <div onClick={() => dispatch(getStratagems())}>Stratagems</div>
            </div>
            <div>Manuals <span onClick={() => setShowManualForm(true)}>➕</span></div>

            {showManualForm ? <ManualForm  
                setShowManualForm={setShowManualForm} 
                isNewManual={true}
                manual={{}}
            /> : ''}

            <div className='manuals-list' onClick={selectManual}>
                {Object.values(manuals).map(manual => (
                    <ManualLink key={manual.id} manual={manual}/>
                ))}
            </div>
        </div>
    )
}

export default SideBar