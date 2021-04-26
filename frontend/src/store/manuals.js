import {csrfFetch} from './csrf'

//actions-----------------------------------------------------------------------
const POPULATE_MANUALS = 'manual/populateManuals'
const ADD_MANUAL = 'manual/addManual'
const REMOVE_MANUAL = 'manual/removeManual'

const populateManuals = (manuals) => ({
    type: POPULATE_MANUALS,
    manuals
})

const addManual = (manual) => ({
    type: ADD_MANUAL,
    manual
})

const removeManual = (id) => ({
    type: REMOVE_MANUAL,
    id
})


//thunks------------------------------------------------------------------------
export const getManuals = () => async (dispatch) => {
    const res = await csrfFetch('/api/manuals')
    const manuals = await res.json()

    dispatch(populateManuals(manuals))
}


export const createManual = (manual) => async (dispatch) => {
    const res = await csrfFetch('/api/manuals', {
        method: 'POST',
        body: JSON.stringify(manual)
    })

    const newManual = await res.json();

    dispatch(addManual(newManual))
} 


export const editManual = (manual) => async (dispatch) => {
    const res = await csrfFetch(`/api/manuals/${manual.id}`, {
        method: 'PUT',
        body: JSON.stringify(manual)
    })

    const newManual = await res.json();

    dispatch(addManual(newManual))
}


export const deleteManual = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/manuals/${id}`, {
        method: 'DELETE',
    })

    dispatch(removeManual(id))
    return res;
}


//reducer-----------------------------------------------------------------------
const initialState = {}

export default function manualsReducer(state = initialState, action){
    let newState;
    switch(action.type){
        case POPULATE_MANUALS:
            newState = {...state, ...action.manuals}
            return newState;
        case ADD_MANUAL:
            newState = {...state, [action.manual.id]: action.manual }
            return newState;
        case REMOVE_MANUAL:
            newState = {...state}
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
} 