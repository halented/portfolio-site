import React, { Component } from 'react';
import Nav from './Nav';
import twit from '../twit.png';
import die from '../die.png';
import java from '../javathescript.png';

class Projects extends Component {

  populateDeets = (n) => {
    let prev = document.getElementById('prev')
    prev.style = {display: ''}
    prev.innerText = ''
    let img = document.createElement('img')
    img.id = 'prevImage'
    img.style = 'margin: auto; margin-bottom: 10%;'
    let a1 = document.createElement('a')
    let a2 = document.createElement('a')
    a1.target = '_blank'
    a2.target = '_blank'
    let p = document.createElement('p')
    let br = document.createElement('br')
    if(n===1){
      img.src = die
      a1.innerText = 'Github Repo'
      a1.href= 'https://github.com/halented/dndeluxe-frontend'
      a2.innerText = "Live Demo"
      a2.href = 'http://dndluxe.herokuapp.com/'
      p.innerText = "Tester account username: 'maeCat' / password: 'woods'. Account information is case sensitive."
    }
    else if(n===2){
      img.src = twit
      a1.innerText = 'Github Repo'
      a1.href= 'https://github.com/halented/twitflip'
      a2.innerText = "Live Demo"
      a2.href = 'http://twitflip.herokuapp.com/'
      p.innerText = "Tester account username: 'tester'. Account information is case sensitive."
    }
    else if(n===3){
      img.src = java
      img.style = 'margin: auto; margin-bottom: 10%; margin-top: 20%;'
      a1.innerText = 'Github Repo'
      a1.href= 'https://github.com/halented/One_Page_RPG_Frontend'
      a2.innerText = "Video Demo"
      a2.href = 'https://www.youtube.com/watch?v=KkO_6orX0ow&feature=youtu.be'
      p.innerText = "Please clone both front and backend repositories to play the game locally!"
    }
    prev.appendChild(img)
    prev.appendChild(a1)
    prev.appendChild(br)
    prev.appendChild(a2)
    prev.appendChild(p)
  }

  render(){
    return (
      <>
      <div className='head'>Projects</div>
      <div className='displayBox'>
        <div id='projectWheel'> 
          <ul>
            <li onClick={()=>this.populateDeets(1)}><strong>DnDluxe</strong> - A web app where a user can store information about DnD characters and games.</li>
            <li onClick={()=>this.populateDeets(2)}><strong>TwitFlip</strong> - A Twitter surfing web-app. Users can search and save tweets, and use the positive/negative attitude filter.</li>
            <li onClick={()=>this.populateDeets(3)}><strong>Java the Script</strong> - A single page Javascript-based game. Users control a hero who must defeat all enemies on the page.</li>
          </ul> 
        </div>
        <div id='prev' style={{display: 'none'}}>project preview</div>
      </div>
      <Nav/>
      </>
    )
  }
}

export default Projects;