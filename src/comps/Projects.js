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
    let a1 = document.createElement('a')
    if(n===1){
      debugger;
      img.src = {die}
      img.id = 'prevImage'
      a1.innerText = 'Github Repo'
      a1.href= 'https://github.com/halented/dndeluxe-frontend'
    }
    else if(n===2){
      img.src = {twit}
      a1.innerText = "i'll mess you up i swear on me mum"
    }
    prev.appendChild(img)
    prev.appendChild(a1)
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