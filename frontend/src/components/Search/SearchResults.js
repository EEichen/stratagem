import { useSelector } from "react-redux"
import { useHistory } from "react-router"

const SearchResults = ({selectManual}) => {
    let history = useHistory();

    const {
        foundManuals, 
        foundStratagems
    } = useSelector(store => store.searchResults)

    const getStrat = (e) => {
        if(e.target.id.startsWith('stratagem-')){
            const id = e.target.id.split('-')[1]

            history.push(`/stratagem/${id}`)

        }
    }

    return(
        <div>
            <div>
                {Object.keys(foundStratagems)[0] ? <div>Stratagems:</div> : ''}
                <div className='search-strats' onClick={getStrat}>
                    {Object.values(foundStratagems).map(stratagem => (
                        <div 
                        key={stratagem.id} 
                        id={`stratagem-${stratagem.id}`}
                        >
                            {stratagem.title}
                        </div>
                        ))}
                </div>
            </div>
            
            <div>
                {Object.keys(foundManuals)[0] ? <div>Manuals:</div> : ''}
                <div className='search-manuals' onClick={selectManual}>
                    {Object.values(foundManuals).map(manual => (
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