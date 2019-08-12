import React, { Component } from 'react'
import Nav from './Nav'
import twit from '../twit.png'
import die from '../die.png'

class Projects extends Component {

  populateDeets = (n) => {
    let prev = document.getElementById('prev')
    prev.style = {display: ''}
    prev.innerText = ''
    let img = document.createElement('img')
    img.id = 'prevImage'
    img.style = 'margin: auto'
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
      img.src = twit
      a1.innerText = 'Github Repo'
      a1.href= 'https://github.com/halented/twitflip'
      a2.innerText = "Live Demo"
      a2.href = 'http://twitflip.herokuapp.com/'
      p.innerText = "Tester account username: 'tester'. Account information is case sensitive."
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
      <h1 className='head'>Projects</h1>
      <div className='displayBox'>
        <div id='projectWheel'> 
          <ul>
            <li onClick={()=>this.populateDeets(1)}><strong>DnDluxe</strong> - A web app where you can store information about DnD characters and games.</li>
            <li onClick={()=>this.populateDeets(2)}><strong>TwitFlip</strong> - A Twitter surfing web-app. I'm adding more words here so that it fluffs it out a litte.</li>
            <li onClick={()=>this.populateDeets(3)}><strong>Java the Script</strong> - A single page Javascript-based game. I'm adding a lot of words here so that it fluffs it out a lot.</li>
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