import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer_container'>
            <ul className='footer_ul'>
                <li className='footer_list'>
                    <a href='https://github.com/laurengus17' className='footer_link'>
                    <i className='fab fa-github fa-2x'/>
                    <span className='footer_text'>GitHub</span>
                    </a>
                </li>
                <li className='footer_list'>
                    <a href='https://www.linkedin.com/in/lauren-gustafson-7b8877b3/' className='footer_link'>
                    <i className='fab fa-linkedin fa-2x' />
                    <span className='footer_text'>LinkedIn</span>
                    </a>
                </li>
                <li className='footer_list'>
                    <a href='https://angel.co/u/lauren-gustafson-4' className='footer_link'>
                    <i className='fab fa-angellist fa-2x' />
                    <span className='footer_text'>AngelList</span>
                    </a>
                </li>
                <li className='footer_list'>
                    <a href='mailto:lauren.gustafson17@gmail.com' className='footer_link'>
                    <i className='fas fa-envelope-square fa-2x'/>
                    <span className='footer_text'>Email</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;