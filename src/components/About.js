import React from 'react';
import '../css/about.scss';

class About extends React.Component {
    render() {
        return (
            <div className='about'>
                <div className='aboutContainer'>
                    <img className="selfie" src='images/me.png' />
                    <div>
                        <h2>Hello</h2>
                        <div>
                            <span>Thanks for checking out my site. I am a 24-year-old developer and designer, currently working as a software engineer at </span>
                            <a href='https://grokker.com'>Grokker</a>
                            <span>, an online television network specializing in health and wellness. I work primarily with javascript since our stack is built upon Node.js, using React Native for our mobile applications.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
