import React from 'react';
import HomeGrown from './HomeGrown';
import './Projects.css'

const ProjectsLanding = () => {
    return (
        <div className='projects_container'>
            <div>
                <p className='projects_title'>MyProjects.forEach()</p>
                <div className='specific_project'>
                    <p className='project_name'>const HomeGrown = </p>
                    <HomeGrown />
                </div>
                <div>
                    <h4>const Artifacts = </h4>
                </div>
                <div>
                    <h4>const KettleOverflow = </h4>
                </div>
            </div>
        </div>
    );
}

export default ProjectsLanding;
