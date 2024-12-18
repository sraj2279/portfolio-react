import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Proj1 from '../assets/proj1.png'
import Proj2 from '../assets/proj2.png'
import '../styles/Projects.css'

function Projects() {
    return (
        <div className="projects">
            <h1> My Personal Projects </h1>
            <div className='projectList'>
                <ProjectItem name="Uni Capstone Project" image={Proj1} url="https://bitbucket.org/sraj2279/comp3888_t17_07_group1/src/master/" />
                <ProjectItem name="Metalcraft Business Website" image={Proj2} url="https://github.com/sraj2279/portfolio-react" />
            </div>
        </div>
    )
}

export default Projects