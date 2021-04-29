import { useSelector } from "react-redux"
import Preview from "./Preview"


const StratagemsPreviewArea = ({selectedManual}) => {
    const stratagems = useSelector(state => state.stratagems)
    const manual = useSelector(state => state.manuals[selectedManual])

    return(
        <div>
            <div
        
            >
                {manual ? `${manual.title}:` : ''}
            </div>

            <div className='stratagems-list'>
                {Object.values(stratagems).reverse().map(stratagem => (
                    <Preview key={stratagem.id} stratagem={stratagem}/>
                ))}
            </div>
        </div>
    )
}

export default StratagemsPreviewArea