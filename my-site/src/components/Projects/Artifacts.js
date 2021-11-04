import React from 'react';
import A_user from '../Images/A_user.png';
import A_browse from '../Images/A_browse.png';
import './Projects.css'

const Artifacts = () => {
    return (
        <>
            <img className='project_image' src={A_browse} alt='A browse'/>
            <img className='project_image' src={A_user} alt='A user' />
        </>
    );
}

export default Artifacts;