import { useSelector } from "react-redux"
import Preview from "./Preview"


const StratagemsPreviewArea = () => {
    const stratagems = useSelector(state => state.stratagems)

    return(
        <div>
            <div>strat preview area (placeholder)</div>

            <div className='stratagems-list'>
                {Object.values(stratagems).reverse().map(stratagem => (
                    <Preview key={stratagem.id} stratagem={stratagem}/>
                ))}
            </div>
        </div>
    )
}

export default StratagemsPreviewArea