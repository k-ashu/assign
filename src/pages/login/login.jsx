import React from 'react'
import {Link} from 'react-router-dom'

import LoginForm from './../../components/login/login'
import CustomButton from './../../components/button/custom-button'

import './login.scss'

function Login () {
    return (
        <div className='login'>
            <div>
                <h1 className='title'>Employee Login</h1>
                <LoginForm />
                <Link to='/home'>
                    <CustomButton type='submit'>Login</CustomButton>
                </Link>
            </div>
            <div>
                <h1 className='title'>Admin Login</h1>
                <LoginForm />
                <Link to='/addEmployee'>
                    <CustomButton type='submit'>Admin Login</CustomButton>
                </Link>
            </div>
        </div>
    )
}

export default Login