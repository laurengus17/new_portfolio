import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
        <ul className='navbar_ul'>
            <li className='navbar_list'>
                <Link to='/' exact={true} activeClassName='active' className='navbar_link'>
                <i className='fas fa-landmark fa-2x' />
                <span className='navbar_text'>Home</span>
                </Link>
            </li>
            <li className='navbar_list'>
                <Link to='/about' exact={true} activeClassName='active' className='navbar_link'> 
                <i className='far fa-smile fa-2x' />
                <span className='navbar_text'>About Me</span>
                </Link>
            </li>
            <li className='navbar_list'>
                <Link to='/projects' exact={true} activeClassName='active' className='navbar_link'> 
                <i className='fas fa-fire-alt fa-2x' />
                <span className='navbar_text'>Projects</span>
                </Link>
            </li>
            <li className='navbar_list'>
                <Link to='/resume' exact={true} activeClassName='active' className='navbar_link'> 
                <i className='fas fa-file-code fa-2x' />
                <span className='navbar_text'>Resume</span>
                </Link>
            </li>
            <li className='navbar_list'>
                <Link to='/contact' exact={true} activeClassName='active' className='navbar_link'> 
                <i className='fas fa-paper-plane fa-2x' />
                <span className='navbar_text'>Contact Me</span>
                </Link>
            </li>
        </ul>
        </nav>
    );
}

export default NavBar;
