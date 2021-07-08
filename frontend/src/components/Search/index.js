import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getSearchResults } from "../../store/search";
import SearchResults from "./SearchResults";
import './Search.css'


const Search = ({selectManual}) => {
    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const onSearch = (e) => {
        setInput(e.target.value)
    }
    
    useEffect(() => {
        dispatch(getSearchResults(input))
        
    }, [input, dispatch])

    return (
        <div>
            <span>🔍</span>
            <input 
            type="text"
            placeholder='Search'
            value={input}
            onChange={onSearch}
             />
             <SearchResults selectManual={selectManual}/>
        </div>
    )
}

export default Search