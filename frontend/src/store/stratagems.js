import { csrfFetch } from './csrf'

//actions-----------------------------------------------------------------------
const POPULATE_STRATAGEMS = 'stratagems/populateStratagems'
const ADD_STRATAGEM = 'stratagems/addStratagem'
const REMOVE_STRATAGEM = 'stratagems/removeStratagem'

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


//thunks------------------------------------------------------------------------
export const getStratagems = () => async (dispatch) => {
    const res = await csrfFetch('/api/stratagems')
    const stratagems = await res.json()

    dispatch(populateStratagems(stratagems))
}


export const createStratagem = (stratagem) => async (dispatch) => {
    const res = await csrfFetch('/api/stratagems', {
        method: 'POST',
        body: JSON.stringify(stratagem)
    })

    const newStratagem = await res.json();

    dispatch(addStratagem(newStratagem))
}


export const editStratagem = (stratagem) => async (dispatch) => {
    const res = await csrfFetch(`/api/stratagems/${stratagem.id}`, {
        method: 'PUT',
        body: JSON.stringify(stratagem)
    })

    const newStratagem = await res.json();

    dispatch(addStratagem(newStratagem))
}


export const deleteStratagem = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/manuals/${id}`,{
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
            newState = {...state, ...action.stratagems}
            return newState
        case ADD_STRATAGEM:
            newState = {...state, [action.stratagem.id]: action.stratagem}
            return newState
        case REMOVE_STRATAGEM:
            newState = {...state}
            delete newState[action.id]
            return newState;
        default:
            return state
    }
}
