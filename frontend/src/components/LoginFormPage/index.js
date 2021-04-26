import { useState } from "react"
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

    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <ul>
                    {errors.map((error, i) => <li key={i}>{error}</li> )}
                </ul>
                <input 
                type="text" 
                name="" 
                id="" 
                placeholder='username' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type="text"
                placeholder='password' 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                />
                <button type='submit'>Log In!</button>
            </form>
        </div>
    )
}

export default LoginForm