import React from 'react';
import KO_question from '../Images/KO_question.png';
import KO_search from '../Images/KO_search.png';
import './Projects.css'

const KettleOverflow = () => {
    return (
        <>
            <img className='project_image' src={KO_search} alt='KO search' />
            <img className='project_image' src={KO_question} alt='KO question'/>
        </>
    );
}

export default KettleOverflow;