import React from 'react';
import HG_browse from '../Images/HG_browse.png';
import HG_user from '../Images/HG_user.png';
import './Projects.css'

const HomeGrown = () => {
    return (
        <div container='project_container'>
            <img className='project_image' src={HG_browse} alt='HG browse'/>
            <img className='project_image' src={HG_user} alt='HG_user' />
        </div>
    );
}

export default HomeGrown;