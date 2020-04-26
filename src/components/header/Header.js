import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header () {
    return (
        <header className='pug-header-logo'>
            <Link exact to ='/'>
                <h2>
                    HugAPug
                </h2>
            </Link>
            <Link exact to ='/pug-chosen'>
                <i className='fas fa-paw'></i>
            </Link>
        </header>
    )
}

export default Header