import React from 'react';
import HG_browse from '../Images/HG_browse.png';
import HG_user from '../Images/HG_user.png';
import './Projects.css'

const HomeGrown = () => {
    return (
        <>
            <img className='project_image' src={HG_browse} alt='HG browse' />
            <img className='project_image' src={HG_user} alt='HG_user' />
        </>
    );
}

export default HomeGrown;