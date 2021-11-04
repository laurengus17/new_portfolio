import React from 'react';
import HomeGrown from './HomeGrown';
import './Projects.css'

const ProjectsLanding = () => {
    return (
        <div className='projects_container'>
            <div>
                <h2>MyProjects.forEach()</h2>
                <div>
                    <h4>const HomeGrown = </h4>
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
