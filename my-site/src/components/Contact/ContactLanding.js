import React from 'react';

const ContactLanding = () => {
    return (
        <>
        <div>
            <ul>
                <li>
                    <a href='https://github.com/laurengus17'>
                    <i className='fab fa-github fa-2x'/>
                    <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/lauren-gustafson-7b8877b3/'>
                    <i className='fab fa-linkedin fa-2x' />
                    <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href='https://angel.co/u/lauren-gustafson-4'>
                    <i className='fab fa-angellist fa-2x' />
                    <span>AngelList</span>
                    </a>
                </li>
                <li>
                    <a href='mailto:lauren.gustafson17@gmail.com'>
                    <i className='fas fa-envelope-square fa-2x'/>
                    <span>Email</span>
                    </a>
                </li>
            </ul>
        </div>
        </>
    );
}

export default ContactLanding;