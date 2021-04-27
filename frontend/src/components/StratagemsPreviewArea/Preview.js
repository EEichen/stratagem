import { NavLink } from "react-router-dom"

const Preview = ({stratagem}) => {
    return (
        <div>
            <NavLink to={`/stratagem/${stratagem.id}`}>{stratagem.title}</NavLink>
            <div>{stratagem.text}</div>
        </div>
    )
}
export default Preview