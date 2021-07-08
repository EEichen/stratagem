import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { login } from "../../store/session"
import './LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    if(sessionUser) return (
        <Redirect to='/' />
    )

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors([])
        return dispatch(login(username, password))
            .catch(async (res) => {
                const data = await res.json()
                if(data && data.errors) setErrors(data.errors)
        })
    } 
    
    const loginDemoUser = (e) => {
        e.preventDefault()
        return dispatch(login('DemoUser', 'password'))
    }
    
    return (
        <div className='sign-up-page'>
            <h1 className='sign-up-title'>Log In Here!</h1>
            <form className='sign-up' onSubmit={onSubmit}>
                <ul>
                    {errors.map((error, i) => <li key={i}>{error}</li> )}
                </ul>
                <input 
                    className='lo-input'
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                    className='lo-input'
                    type="password"
                    placeholder='password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
                <button 
                    className='button submit-button'  type='submit'>Log In!</button>
                <button 
                    className='button submit-button'  
                    onClick={loginDemoUser}
                >
                        Demo User
                </button>
            </form>
        </div>
    )
}

export default LoginForm