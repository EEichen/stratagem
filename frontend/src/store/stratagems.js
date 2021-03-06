import { csrfFetch } from './csrf'

//actions-----------------------------------------------------------------------
const POPULATE_STRATAGEMS = 'stratagems/populateStratagems'
const ADD_STRATAGEM = 'stratagems/addStratagem'
const REMOVE_STRATAGEM = 'stratagems/removeStratagem'
const CLEAR_STRATAGEMS = 'stratagems/clearStratagems'

const populateStratagems = (stratagems) => ({
    type: POPULATE_STRATAGEMS,
    stratagems
})

const addStratagem = (stratagem) => ({
    type: ADD_STRATAGEM,
    stratagem
})

const removeStratagem = (id) => ({
    type: REMOVE_STRATAGEM,
    id
})

export const clearStratagems = () => ({
    type: CLEAR_STRATAGEMS
})



//thunks------------------------------------------------------------------------
export const getStratagems = () => async (dispatch) => {
    const res = await csrfFetch('/api/stratagems')
    const {stratagems} = await res.json()

    dispatch(populateStratagems(stratagems))
}

export const getStratagemsWithId = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/stratagems/${id}`)
    const {stratagems} = await res.json()

    dispatch(populateStratagems(stratagems))
}


export const createStratagem = (manualId) => async (dispatch) => {
    const stratagem = { title: 'untitled', text: '', imageUrl: '', manualId}
    const res = await csrfFetch('/api/stratagems', {
        method: 'POST',
        body: JSON.stringify(stratagem)
    })

    const {newStratagem} = await res.json();

    dispatch(addStratagem(newStratagem))
}


export const editStratagem = (stratagem) => async (dispatch) => {
    const res = await csrfFetch(`/api/stratagems/${stratagem.id}`, {
        method: 'PUT',
        body: JSON.stringify(stratagem)
    })

    const {newStratagem} = await res.json();

    dispatch(addStratagem(newStratagem))
}


export const deleteStratagem = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/stratagems/${id}`,{
        method: 'DELETE'
    })

    dispatch(removeStratagem(id))
    return res
}


//reducer-----------------------------------------------------------------------
const initialState = {}

export default function stratagemsReducer(state = initialState, action){
    let newState;
    switch(action.type){
        case POPULATE_STRATAGEMS:
            newState = {...action.stratagems}
            return newState
        case ADD_STRATAGEM:
            newState = {...state, [action.stratagem.id]: action.stratagem}
            return newState
        case REMOVE_STRATAGEM:
            newState = {...state}
            delete newState[action.id]
            return newState;
        case CLEAR_STRATAGEMS:
            return {};
        default:
            return state
    }
}
