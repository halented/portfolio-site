import React, { Component } from 'react';
import Nav from './Nav';
import me from '../closeup.png';
import dog1 from '../dog1.png';
import dog2 from '../dog2.png';
import dog3 from '../dog3.png';
import dog4 from '../dog4.png';
import dog5 from '../dog5.png';
import dog6 from '../dog6.png';
import dog7 from '../dog7.png';
import dog8 from '../dog8.png';

class Homepage extends Component {

    insta = () => {
        window.location='https://www.instagram.com/beantheredunnthat/'
    }
    
    render() {
        return (
            <>
            <h1 className='head'>About me</h1>
            <div className='displayBox'>
                <img src={me} alt='its me' id='me'></img>
                <div id='desc'>I'm Hal. I'm a full-stack software engineer. I'm filling out all these words with words so that you can see how wordy this post full of words is. I love my dogs, and your dogs, and the outdoors. I love the sun, I love the feel of it in the late afternoon when you know it's getting tired but it's still warm, like you. Your skin, sun skin. Your eyelids, thin, full of light. Your vision is glowy red. You aren't sad to be here, but here's only a few minutes. Then it's the evening, which is okay too. </div>
                <h2>Important Dog Photos</h2>
                <div id='dogDiv'>
                    <div className='scrollItem'>
                        <img src={dog1} alt='dog' className='dog' onClick={this.insta}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog2} alt='dog' className='dog' onClick={this.insta}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog3} alt='dog' className='dog' onClick={this.insta}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog4} alt='dog' className='dog' onClick={this.insta}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog5} alt='dog' className='dog' onClick={this.insta}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog6} alt='dog' className='dog' onClick={this.insta}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog7} alt='dog' className='dog' onClick={this.insta}></img>
                    </div>
                    <div className='scrollItem'>
                        <img src={dog8} alt='dog' className='dog' onClick={this.insta}></img>
                    </div>
                </div>
            </div>
            <Nav/>
            </>
        )
    }
}

export default Homepage;