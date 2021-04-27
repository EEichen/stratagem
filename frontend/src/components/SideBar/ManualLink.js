
const ManualLink = ({manual}) => {
    return(
        <div id={`manual-${manual.id}`}>{manual.title}</div>
    )
}

export default ManualLink