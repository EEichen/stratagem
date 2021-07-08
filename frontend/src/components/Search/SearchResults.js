import React from 'react'
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
            {Object.keys(foundStratagems)[0] || Object.keys(foundManuals)[0] ? <>
                {Object.keys(foundStratagems)[0] ? <div className='search-label'>Stratagems:</div> : ''}
                <div className='search-results'>
                    <div className='search-strats' onClick={getStrat}>
                        {Object.values(foundStratagems).map(stratagem => (
                            <div 
                                key={stratagem.id} 
                                id={`stratagem-${stratagem.id}`}
                                className='result'
                            >
                                {stratagem.title}
                            </div>
                            ))}
                    </div>
                </div>
                        
                {Object.keys(foundManuals)[0] ? <div className='search-label'>Manuals:</div> : ''}
                <div className='search-results'>
                    <div className='search-manuals' onClick={selectManual}>
                        {Object.values(foundManuals).map(manual => (
                            <div 
                                key={manual.id} 
                                id={`manual-${manual.id}`}
                                className='result'
                            >
                                {manual.title}
                            </div>
                            ))}
                    </div>
                </div>

            </> : ''}
        </div>
    )
}

export default SearchResults