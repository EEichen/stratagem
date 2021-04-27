import { useHistory } from "react-router-dom"

const Preview = ({stratagem}) => {
    let history  = useHistory();
    return (
        <div onClick={() => history.push(`/stratagem/${stratagem.id}`)}>
            <div>
                {stratagem.title}
            </div>
            <div>{stratagem.text}</div>
        </div>
    )
}
export default Preview