import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { signUp } from "../../store/session";
import './SignupForm.css'


const SignupForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('')

    const [errors, setErrors] = useState([]);

    if(sessionUser) return <Redirect to='/' />

    const onSubmit = (e) => {
        e.preventDefault();
        if(password === confPassword){
            setErrors([])
            return dispatch(signUp({username, email, password}))
                .catch(async (res) => {
                    const data = await res.json();
                    if(data && data.errors) setErrors(data.errors)
                })
        }
        return setErrors['Confirm password must be the same as password']
    }

    return (
        <div className='sign-up-page'>
            <h1 className='sign-up-title'>Sign Up Here!</h1>
            <form className='sign-up' onSubmit={onSubmit}>
                <ul>
                    {errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
                <input 
                    className='lo-input'
                    type="text" 
                    placeholder='Username' 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <input
                    className='lo-input'
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    className='lo-input'
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    className='lo-input'
                    type="password"
                    placeholder='Confirm Password'
                    value={confPassword}
                    onChange={e => setConfPassword(e.target.value)}
                />
                <button 
                    className='button submit-button' 
                    type='submit'
                    >
                        Sign Up!
                </button>
            </form>
        </div>
    )
}

export default SignupForm;