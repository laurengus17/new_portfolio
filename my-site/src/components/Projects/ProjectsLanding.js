import React from 'react';
import HomeGrown from './HomeGrown';
import './Projects.css'

const ProjectsLanding = () => {
    return (
        <div className='projects_landing_container'>
            <p className='projects_title'>MyProjects.forEach()</p>
                <div className='projects_container'>
                    <div className='specific_project'>
                        <div className='project_name_container'>
                        <p className='project_name'>const HomeGrown = </p>
                        </div>
                        <HomeGrown />
                    </div>
                    <div className='specific_project'>
                        <div className='project_name_container'>
                            <p>const Artifacts = </p>
                        </div>
                    </div>
                    <div className='specific_project'>
                        <h4>const KettleOverflow = </h4>
                    </div>
                </div>
        </div>
    );
}

export default ProjectsLanding;
