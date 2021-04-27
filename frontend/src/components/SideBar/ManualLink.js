import { useState } from "react"
import ManualOptions from "./ManualOptions";

const ManualLink = ({manual}) => {
    const [showOptions, setShowOptions] = useState(false);

    
    return(
        <div>
            <div id={`manual-${manual.id}`}>
                {manual.title} 
                <span onClick={
                    e => setShowOptions( (prevShowOptions) => !prevShowOptions)
                    }>...</span>
            </div>
            {showOptions ? <ManualOptions manual={manual}/> : ''}
        </div>
    )
}

export default ManualLink