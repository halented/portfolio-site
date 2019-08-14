import React, { Component } from 'react';
import Nav from './Nav';
import dog1 from '../images/dog1.png';
import dog2 from '../images/dog2.png';
import dog3 from '../images/dog3.png';
import dog4 from '../images/dog4.png';
import dog5 from '../images/dog5.png';
import dog6 from '../images/dog6.png';
import dog7 from '../images/dog7.png';
import dog8 from '../images/dog8.png';

class Homepage extends Component {

    insta = (path) => {
        window.open(`https://www.instagram.com/p/${path}`, '_blank')
    }
    
    render() {
        return (
            <>
            <div className='head'>About</div>
            <div className='displayBox'>
                <div id='desc'>I'm Hal. I'm a full-stack software engineer. I love my dogs, all other dogs, and Javascript. I'm one of those midwest transplants -- I received my bachelor's degree from Ohio University and learned to code from the <a href='https://flatironschool.com/'>Flatiron School</a> here in Seattle. I'm currently working as a Software Engineering Coach for that same school. I'm always interested in new opportunities/projects!</div>
                <h2 id='head2'>Important Dog Photos</h2>
                <div id='dogDiv'>
                    <div className='scrollItem'>
                        <img src={dog1} alt='dog' className='dog' onClick={()=>this.insta('Bn2FgpOB0xL/')}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog2} alt='dog' className='dog' onClick={()=>this.insta('BbXUoRmAb6S/')}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog3} alt='dog' className='dog' onClick={()=>this.insta('BZytMgggbbn/')}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog4} alt='dog' className='dog' onClick={()=>this.insta('BzWeFB4HVph/')}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog5} alt='dog' className='dog' onClick={()=>this.insta('BxVxSdyBopD/')}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog6} alt='dog' className='dog' onClick={()=>this.insta('Br3X2fvhHPs/')}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog7} alt='dog' className='dog' onClick={()=>this.insta('BrF--SZhin_/')}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog8} alt='dog' className='dog' onClick={()=>this.insta('Bl1ZlswBtJm/')}></img>
                    </div>
                </div>
            </div>
            <Nav/>
            </>
        )
    }
}

export default Homepage;