import { useSelector } from "react-redux"

const SearchResults = () => {
    const {
        foundManuals, 
        foundStratagems
    } = useSelector(store => store.searchResults)

    return(
        <div>
            <div>
                {foundStratagems[0] ? <div>Stratagems:</div> : ''}
                <div className='search-strats'>
                    {foundStratagems.map(stratagem => (
                        <div>(placeholder) {stratagem.title}</div>
                        ))}
                </div>
            </div>
            
            <div>
                {foundManuals[0] ? <div>Manuals:</div> : ''}
                <div className='search-manuals'>
                    {foundManuals.map(manual => (
                        <div>(placeholder) {manual.title}</div>
                        ))}
                </div>
            </div>

        </div>
    )
}

export default SearchResults