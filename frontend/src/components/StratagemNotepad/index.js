import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"


const StratagemNotepad = () => {
    const {id} = useParams()
    const stratagem = useSelector(state => state.stratagems[id])
    const dispatch = useDispatch();

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
                    <span 
                    contentEditable 
                    innerText={text}
                    onChange={e => setText(e.target.innerText)}
                    ></span>
                </div>
                <div>test {text}</div>
            </div>
        )
    }else return ''
}

export default StratagemNotepad