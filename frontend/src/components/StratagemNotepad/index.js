import { useSelector } from "react-redux"
import { useParams } from "react-router"
import EditArea from "./EditArea"


const StratagemNotepad = () => {
    const {id} = useParams()
    const stratagem = useSelector(state => state.stratagems[id])


    if(stratagem){
        return (
            <EditArea key={stratagem.id} stratagem={stratagem}/>
        )
    }else return ''
}

export default StratagemNotepad