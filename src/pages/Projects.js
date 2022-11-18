import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Proj1 from '../assets/proj1.png'
import '../styles/Projects.css'

function Projects() {
    return (
        <div className="projects">
            <h1> My Personal Projects </h1>
            <div className='projectList'>
                <ProjectItem name="Uni Capstone Project" image={Proj1} url="https://bitbucket.org/sraj2279/comp3888_t17_07_group1/src/master/" />
                <ProjectItem name="example 2" />
                <ProjectItem name="example 3" />
                <ProjectItem name="example 4" />
                <ProjectItem name="example 5" />
                <ProjectItem name="example 6" />
            </div>
        </div>
    )
}

export default Projects