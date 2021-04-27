import { useState } from "react";
import { useDispatch } from "react-redux"
import ManualForm from "./ManualForm";


const ManualOptions = ({manual}) => {
    const dispatch = useDispatch();
    const [showManualForm, setShowManualForm] = useState(false);

    return (
        <div>
            <button onClick={()=> setShowManualForm(true)}>Edit</button>
            <button>Delete</button>
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