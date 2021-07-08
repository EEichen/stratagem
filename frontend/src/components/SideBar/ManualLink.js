import React, { useState } from "react"
import ManualOptions from "./ManualOptions";

const ManualLink = ({manual}) => {
    const [showOptions, setShowOptions] = useState(false);

    
    return(
        <div className='manual'>
            <div id={`manual-${manual.id}`}>
                {manual.title} 
                <button 
                className='manual-options'
                onClick={
                    e => setShowOptions( (prevShowOptions) => !prevShowOptions)
                    }>...</button>
            </div>
            {showOptions ? <ManualOptions manual={manual}/> : ''}
        </div>
    )
}

export default ManualLink