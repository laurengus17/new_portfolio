import React from 'react';
import Flask from '../Images/Flask.png';
import AWS from '../Images/AWS.png';
import bash from '../Images/bash.png';
import CSS from '../Images/css3.svg';
import docker from '../Images/docker.svg';
import express from '../Images/express.png';
import git from '../Images/git.svg';
import heroku from '../Images/heroku.svg';
import html from '../Images/html.svg';
import JS from '../Images/JS.svg';
import mocha from '../Images/mocha.svg';
import MYSQL from '../Images/MYSQL.svg';
import node from '../Images/nodejs.svg';
import pug from '../Images/pug.svg';
import PS from '../Images/photoshop.svg';
import postgres from '../Images/postgres.svg';
import postman from '../Images/postman.svg';
import python from '../Images/python.svg';
import react from '../Images/react.svg';
import redux from '../Images/redux.svg';
import resume from '../ExternalFiles/Gustafson_Lauren_Resume.pdf';
import './Resume.css';
// download resume and put list of skills here

const ResumeLanding = () => {
    return (
        <>
        <div className='resume_download_container'>
            <p className='resume_title'>Resume</p>
            <a href={resume} target='_blank'>
                <button className='resume_button'>
                    PDF Link 🔗
                </button>
            </a>
            <br />
            <a href={resume} download='Gustafson_Lauren_Resume'>
                <button className='resume_button'>
                    PDF Download 📥
                </button>
            </a>
        </div>
        <div className='resume_tech_container'>
            <p className='tech_title'>Technologies</p>
            <div className='tech_icons_container'>
                <img src={AWS} alt="aws" width="100" height="100" className='tech_icon'></img>
                <img src={bash} alt="bash" width="100" height="100" className='tech_icon'></img>
                <img src={CSS} alt="css3" width="100" height="100" className='tech_icon'></img>
                <img src={docker} alt="docker" width="100" height="100" className='tech_icon'></img>
                <img src={express} alt="express" width="100" height="100" className='tech_icon'></img>
                <img src={Flask} alt="flask" width="100" height="100" className='tech_icon'></img>
                <img src={git} alt="git" width="100" height="100" className='tech_icon'></img>
                <img src={heroku} alt="heroku" width="100" height="100" className='tech_icon'></img>
                <img src={html} alt="html5" width="100" height="100" className='tech_icon'></img>
                <img src={JS} alt="javascript" width="100" height="100" className='tech_icon'></img>
                <img src={mocha} alt="mocha" width="100" height="100" className='tech_icon'></img>
                <img src={MYSQL} alt="mysql" width="100" height="100" className='tech_icon'></img>
                <img src={node} alt="nodejs" width="100" height="100" className='tech_icon'></img>
                <img src={pug} alt="pug" width="100" height="100" className='tech_icon'></img>
                <img src={PS} alt="photoshop" width="100" height="100" className='tech_icon'></img>
                <img src={postgres} alt="postgresql" width="100" height="100" className='tech_icon'></img>
                <img src={postman} alt="postman" width="100" height="100" className='tech_icon'></img>
                <img src={python} alt="python" width="100" height="100" className='tech_icon'></img>
                <img src={react} alt="react" width="100" height="100" className='tech_icon'></img>
                <img src={redux} alt="redux" width="100" height="100" className='tech_icon'></img>
            </div>
        </div>
        </>
    );
}

export default ResumeLanding;
