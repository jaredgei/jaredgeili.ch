import React from 'react';
import '../css/about.scss';

class About extends React.Component {
    render() {
        return (
            <div className='about'>
                <div class='aboutContainer'>
                    <h1>Hello.</h1>
                    <div>
                        <span>I am a 24-year-old developer and designer, recently graduated from Wesleyan University in Middletown, CT. I am currently working in Northern California as a software engineer at </span>
                        <a href='https://grokker.com'>Grokker</a>
                        <span>, an online television network specializing in health and wellness. I work primarily with javascript since our stack is built upon Node.js, using React Native for our mobile applications.</span>
                    </div>
                    <img className="selfie" src='images/me.png' />
                </div>
            </div>
        );
    }
}

export default About;
