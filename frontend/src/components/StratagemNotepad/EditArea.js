import React, {useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteStratagem, editStratagem } from '../../store/stratagems';
// import DrawArea from '../DrawArea';

const EditArea = ({stratagem}) => {
    const dispatch = useDispatch();
    const id = stratagem.id
    const history = useHistory();

    
    const [title, setTitle] = useState(stratagem ? stratagem.title : '');
    const [text, setText] = useState(stratagem ? stratagem.text : '');
    const [imageUrl, setImageUrl] = useState(stratagem ? stratagem.imageUrl : '')
    const [saved, setSaved] = useState(false)
    const [initalLoad, setInitialLoad] = useState(true)
    // const [showDrawArea, setShowDrawArea] = useState(false)
    
    useEffect(() => {
        if (!stratagem.id) history.push('/')
        setSaved(false);

        let timeout;
        if(title.length > 0 && title.length < 200 && text.length <= 10000){

            if(!initalLoad){
                timeout = setTimeout(() => {
                    dispatch(editStratagem({ id, title, text, imageUrl }))
                    setSaved(true)
                    
                }, 800);
            }
        }

        return () => clearTimeout(timeout);

    }, [title, text, imageUrl, dispatch, id, history, stratagem.id, initalLoad])

    return(
        <div className='edit-area'>
            <input 
            type="text"
            placeholder='Title'
            className='edit-title'
            value={title}
            onChange={e => {
                setTitle(e.target.value)
                setInitialLoad(false)
            }}
            />
            <button 
                className='button delete-button' 
                onClick={() => dispatch(deleteStratagem(id))}
            >
                Delete
            </button>
            <span className='save-notif'>{saved ? 'saved' : ''}</span>
            <input
                type="text"
                placeholder='Image Url'
                className='edit-url'
                value={imageUrl}
                onChange={e => {
                    setImageUrl(e.target.value)
                    setInitialLoad(false)
                }}
                />
                {/* <button className='button show-drw-area' onClick={()=> setShowDrawArea(true)}>➕</button> */}
            <div className='text-img-area'>
                <textarea 
                className='edit-text'
                value={text}
                onChange={e => {
                    setText(e.target.value)
                    setInitialLoad(false)
                }}
                >

                </textarea>
                {imageUrl ? <img className='edit-area-image' src={imageUrl} alt=""/>: ''}
                {/* {showDrawArea ? <DrawArea setShowDrawArea={setShowDrawArea} setImageUrl={setImageUrl} /> : ''} */}

            </div>
            
        </div>
    )
}
export default EditArea