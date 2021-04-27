import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getSearchResults } from "../../store/search";
import SearchResults from "./SearchResults";


const Search = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const onSearch = (e) => {
        setInput(e.target.value)
    }
    
    useEffect(() => {
        dispatch(getSearchResults(input))
        
    })

    return (
        <div>
            <span>🔍</span>
            <input 
            type="text"
            placeholder='Search'
            value={input}
            onChange={onSearch}
             />
             <SearchResults />
        </div>
    )
}

export default Search