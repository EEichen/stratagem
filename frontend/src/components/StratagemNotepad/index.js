import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { editStratagem } from "../../store/stratagems"


const StratagemNotepad = () => {
    const {id} = useParams()
    const stratagem = useSelector(state => state.stratagems[id])
    const dispatch = useDispatch();
    const history = useHistory();

    if(!stratagem) history.push('/')

    const [title, setTitle] = useState(stratagem ? stratagem.title : '');
    const [text, setText] = useState(stratagem ? stratagem.text : '');
    const [imageUrl, setImageUrl] = useState(stratagem ? stratagem.imageUrl : '')
    const [saved, setSaved] = useState()

    useEffect(() => {
        setSaved(false);
       const timeout = setTimeout(() => {
            dispatch(editStratagem({id, title, text, imageUrl}))
            setSaved(true)
            
        }, 1500);

        return () => clearTimeout(timeout);

    }, [title, text, imageUrl, dispatch, id])

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
                <div>{saved ? 'saved' : 'saving...'}</div>
                {imageUrl ? <img src={imageUrl} alt=""/>: ''}
            </div>
        )
    }else return ''
}

export default StratagemNotepad