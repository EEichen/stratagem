import { useState } from "react";
import { useDispatch } from "react-redux"
import { deleteManual } from "../../store/manuals";
import ManualForm from "./ManualForm";


const ManualOptions = ({manual}) => {
    const dispatch = useDispatch();
    const [showManualForm, setShowManualForm] = useState(false);

    const onDelete = () => {
        dispatch(deleteManual(manual.id))
    }

    return (
        <div>
            <button onClick={()=> setShowManualForm(true)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
            {
            showManualForm ? <ManualForm
                setShowManualForm={setShowManualForm}
                isNewManual={false}
                manual={manual}
             /> : ''}
        </div>
    )
}

export default ManualOptions