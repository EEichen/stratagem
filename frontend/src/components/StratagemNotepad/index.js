import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"


const StratagemNotepad = () => {
    const {id} = useParams()
    const stratagem = useSelector(state => state.stratagems[id])
    const dispatch = useDispatch();
    const history = useHistory();

    if(!stratagem) history.push('/')

    const [title, setTitle] = useState(stratagem ? stratagem.title : '');
    const [text, setText] = useState(stratagem ? stratagem.text : '');
    const [imageUrl, setImageUrl] = useState(stratagem ? stratagem.imageUrl : '')

    useEffect(() => {

    })

    if(stratagem){
        return (
            <div>
                <input 
                type="text"
                placeholder='Title'
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Image Url'
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                />
                <div>
                    <textarea 
                    value={text}
                    onChange={e => setText(e.target.value)}
                    ></textarea>
                </div>
                <img src={imageUrl} alt=""/>
            </div>
        )
    }else return ''
}

export default StratagemNotepad