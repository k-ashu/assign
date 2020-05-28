import React from 'react'
import './header.scss'
import Logo from './../../icons/r.png'

import {Link, withRouter} from 'react-router-dom'

function Header ({match}){
    return  (
        <div className='header'>
            <div className='logo-container'>
                <img  className='logo' src={Logo} alt='Rupee Logo'></img>
            </div>
            <h1 className='title'>Payroll Management System</h1>
            <div className='options'>
                {match.isExact===false?<Link className="option" to="/">Logout</Link>:null}
                <Link className='option' to='/about'>
                    About
                </Link>
                <Link className='option' to='/help'>
                    Help
                </Link>
            </div>
        </div>
    )
}

export default withRouter(Header)