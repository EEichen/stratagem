import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { createManual, editManual } from "../../store/manuals";


const ManualForm = ({manual, setShowManualForm, isNewManual}) => {
    const dispatch = useDispatch();

    const [titleInput, setTitleInput] = useState(manual.title ? manual.title : '')

    const onSave = () => {
        if(titleInput.length > 0 && titleInput.length < 50){

            if(isNewManual){
                dispatch(createManual({title: titleInput}))
            }
            else {
                const newManual = {...manual}
                newManual.title = titleInput;
                dispatch(editManual(newManual))
            }
            
            setShowManualForm(false);
        }
    }

    return(
        <div className='manual-form'>
            <label htmlFor="titleInput">Manual Title: </label>
            <input 
            type="text" 
            name='titleInput' 
            id='titleInput' 
            className='title-input'
            value={titleInput}
            onChange={e => setTitleInput(e.target.value)}
            />
            <button className='button save' onClick={onSave}>Save</button>
            <button className='button cancel' onClick={() => setShowManualForm(false)}>Cancel</button>
        </div>
    )
}
export default ManualForm