import React, { Component } from 'react';
import Nav from './Nav';
import twit from '../images/twit.png';
import die from '../images/die.png';
import final from '../images/finally.png';
import { projects } from '../projectData.json'

class Projects extends Component {

  state = {
    showProject: false,
    selectedProject: {},
    image: null
  }

  populateDeets = (n) => {
    let selectedProject = projects.find(proj=>proj.id ===n)
    let image;
    if(selectedProject.name === "DnDluxe"){
      image = die
    }
    else {
      selectedProject.name === "Finally!" ? image = final : image = twit
    }
    this.setState({showProject: true, selectedProject, image})
  }

  populateProjects = () => {
    return projects.map(project=>{
      return <li onClick={()=>this.populateDeets(project.id)} key={project.id}><strong>{project.name}</strong> {project.sideDesc}</li>
    })
  }

  render(){
    const {showProject, image, selectedProject} = this.state
    return (
      <>
      <div className='head'>Projects</div>
      <div className='displayBox'>
        <div id='projectWheel'> 
          <ul>
            {this.populateProjects()}
          </ul> 
        </div>
        {showProject ? 
          <div id='prev' style={{display: 'flex', flexDirection: 'column'}}>
            <img id='prevImage' src={image} alt='project icon'></img>
            <a target="_blank" rel="noopener noreferrer" href={selectedProject.repo}>Github Repo</a>
            <a target="_blank" rel="noopener noreferrer" href={selectedProject.demo}>Live Demo</a>
            <p>{selectedProject.testerInfo}</p>
          </div>
        :
          <div id='prev'>Click a project for more information!</div>
        }
      </div>
      <Nav/>
      </>
    )
  }
}

export default Projects;
