import React from 'react';
import './Contact.css';

const ContactLanding = () => {
    return (
        <div className='contact_landing_container'>
            <p className='contact_title'>Get In Touch</p>
            <ul>
                <li className='contact_list'>
                    <a href='https://github.com/laurengus17'>
                    <i className='fab fa-github fa-3x'/>
                    <span className='portal_name'>GitHub</span>
                    </a>
                </li>
                <li className='contact_list'>
                    <a href='https://www.linkedin.com/in/lauren-gustafson-7b8877b3/'>
                    <i className='fab fa-linkedin fa-3x' />
                    <span className='portal_name'>LinkedIn</span>
                    </a>
                </li>
                <li className='contact_list'>
                    <a href='https://angel.co/u/lauren-gustafson-4'>
                    <i className='fab fa-angellist fa-3x' />
                    <span className='portal_name'>AngelList</span>
                    </a>
                </li>
                <li className='contact_list'>
                    <a href='mailto:lauren.gustafson17@gmail.com'>
                    <i className='fas fa-envelope-square fa-3x'/>
                    <span className='portal_name'>Email</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ContactLanding;