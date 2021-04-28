import {useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { editStratagem } from '../../store/stratagems';

const EditArea = ({stratagem}) => {
    const dispatch = useDispatch();
    const id = stratagem.id
    const history = useHistory();

    
    const [title, setTitle] = useState(stratagem ? stratagem.title : '');
    const [text, setText] = useState(stratagem ? stratagem.text : '');
    const [imageUrl, setImageUrl] = useState(stratagem ? stratagem.imageUrl : '')
    const [saved, setSaved] = useState(false)
    const [initalLoad, setInitialLoad] = useState(true)
    
    useEffect(() => {
        if (!stratagem.id) history.push('/')
        // setSaved(false);
        let timeout;
        if(!initalLoad){
                timeout = setTimeout(() => {
                dispatch(editStratagem({ id, title, text, imageUrl }))
                setSaved(true)
                
            }, 800);
        }

        return () => clearTimeout(timeout);

    }, [title, text, imageUrl, dispatch, id, history, stratagem.id, initalLoad])

    return(
        <div>
            <input 
            type="text"
            placeholder='Title'
            value={title}
            onChange={e => {
                setTitle(e.target.value)
                setInitialLoad(false)
            }}
            />
            <input
                type="text"
                placeholder='Image Url'
                value={imageUrl}
                onChange={e => {
                    setImageUrl(e.target.value)
                    setInitialLoad(false)
                }}
            />
            <div>
                <textarea 
                value={text}
                onChange={e => {
                    setText(e.target.value)
                    setInitialLoad(false)
                }}
                ></textarea>
            </div>
            <div>{saved ? 'saved' : ''}</div>
            {imageUrl ? <img src={imageUrl} alt=""/>: ''}
        </div>
    )
}
export default EditArea