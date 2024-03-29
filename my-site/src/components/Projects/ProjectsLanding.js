import React from 'react';
import HomeGrown from './HomeGrown';
import Artifacts from './Artifacts'
import KettleOverflow from './KettleOverflow';
import './Projects.css'

const ProjectsLanding = () => {
    return (
        <div className='projects_landing_container'>
            <p className='projects_title'>MyProjects.forEach()</p>
                <div className='projects_container'>
                    <div className='specific_project'>
                        <div className='project_name_container'>
                        <a href='https://homegrownplantapp.herokuapp.com/' target='_blank'>
                        <p className='project_name'>const HomeGrown = </p>
                        </a>
                        <p className='project_description'>Goodreads-inspired app for house plant lovers.</p>
                        <ul className='project_tech'>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>Redux</li>
                        </ul>
                        </div>
                        <HomeGrown />
                    </div>
                    <div className='specific_project'>
                        <div className='project_name_container'>
                            <p className='project_name'>const Artifacts = </p>
                            <p className='project_description_a'>Etsy inspired e-commerce app for time-travelers.</p>
                            <ul className='project_tech_a'>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                        <Artifacts />
                    </div>
                    <div className='specific_project'>
                        <div className='project_name_container'>
                            <p className='project_name'>const KettleOverflow = </p>
                            <p className='project_description_so'>Stack Overflow inspired app for all the tea heads out there.</p>
                            <ul className='project_tech_so'>
                                <li>JavaScript</li>
                                <li>Pug</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <KettleOverflow />
                    </div>
                </div>
        </div>
    );
}

export default ProjectsLanding;
