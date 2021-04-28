import { useSelector } from "react-redux"

const SearchResults = ({selectManual}) => {
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
                        <div key={stratagem.id}>(placeholder) {stratagem.title}</div>
                        ))}
                </div>
            </div>
            
            <div>
                {foundManuals[0] ? <div>Manuals:</div> : ''}
                <div className='search-manuals' onClick={selectManual}>
                    {foundManuals.map(manual => (
                        <div 
                        key={manual.id} 
                        id={`manual-${manual.id}`}
                        >
                            {manual.title}
                        </div>
                        ))}
                </div>
            </div>

        </div>
    )
}

export default SearchResults