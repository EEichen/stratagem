import { csrfFetch } from './csrf'
//actions-----------------------------------------------------------------------
const SET_RESULTS ='search/setResults'
const CLEAR_SEARCH = 'manual/clearSearch'

const setResults = (searchResults) =>({
    type: SET_RESULTS,
    searchResults
})

export const clearSearch = () => ({
    type: CLEAR_SEARCH
})
//thunks------------------------------------------------------------------------

export const getSearchResults = (input) => async (dispatch) => {
    if(input){
        const res = await csrfFetch(`/api/search/${input}`)
        const results = await res.json()
        
        dispatch(setResults(results))
    }
    else dispatch(setResults({foundManuals: {}, foundStratagems: {} }))

}

//reducer-----------------------------------------------------------------------
const initialState = { foundManuals: {}, foundStratagems: {} };

export default function searchReducer(state = initialState, action){
    switch(action.type){
        case SET_RESULTS:
            return {...action.searchResults};
        case CLEAR_SEARCH:
            return { foundManuals: {}, foundStratagems: {} };
        default:
            return state;
    }
}