import { csrfFetch } from "./csrf"


//actions-----------------------------------------------------------------------
const SET_USER_SESSION = 'session/setUserSession'
const REMOVE_USER_SESSION = 'session/removeUserSession'


const setUserSession = (session) => ({
    type: SET_USER_SESSION,
    session
})

const removeUserSession = () => ({
    type: REMOVE_USER_SESSION,
})


//thunks------------------------------------------------------------------------
export const login = (credential, password) => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({credential, password})
    })

    if(!res.ok) throw res;

    const session = await res.json()

    dispatch(setUserSession(session))
    return res;
}


export const restoreUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/session')
    const session = await res.json();
    if(!session.user) session.user = null;
    dispatch(setUserSession(session))
    return res;
}


export const signUp = ({username, email, password}) => async (dispatch) => {
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, email, password})
    })

    const session = await res.json();

    dispatch(setUserSession(session));
    return res;
}


export const logOut = () => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    })

    dispatch(removeUserSession());
    
    return res;
}


//reducer-----------------------------------------------------------------------
const initialState = {
    user: null
}

export default function sessionReducer(state = initialState, action){
    let newState;
    switch(action.type){
        case SET_USER_SESSION:
            newState = Object.assign({}, state)
            newState.user = action.session.user
            return newState
        case REMOVE_USER_SESSION:
            newState = Object.assign({}, state)
            newState.user = null;
            return newState;
        default: 
            return state
    }
}

