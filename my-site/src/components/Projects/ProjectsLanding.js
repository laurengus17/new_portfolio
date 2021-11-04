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
                        <p className='project_name'>const HomeGrown = </p>
                        </div>
                        <HomeGrown />
                    </div>
                    <div className='specific_project'>
                        <div className='project_name_container'>
                            <p className='project_name'>const Artifacts = </p>
                        </div>
                        <Artifacts />
                    </div>
                    <div className='specific_project'>
                        <div className='project_name_container'>
                            <p className='project_name'>const KettleOverflow = </p>
                        </div>
                        <KettleOverflow />
                    </div>
                </div>
        </div>
    );
}

export default ProjectsLanding;
