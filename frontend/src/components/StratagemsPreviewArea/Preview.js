import { useHistory } from "react-router-dom"

const Preview = ({stratagem}) => {
    let history  = useHistory();
    return (
        <div
            className='preview'
            onClick={() => history.push(`/stratagem/${stratagem.id}`)}>
            <div className='strat-title'>
                {stratagem.title}
            </div>
            <div className='preview-text'>{stratagem.text}</div>
        </div>
    )
}
export default Preview