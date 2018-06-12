import React from 'react';
import '../css/about.scss';

class About extends React.Component {
    render() {
        return (
            <div className='about'>
                <div className='aboutContainer'>
                    <img className="selfie" src='static/images/me.png' />
                    <div>
                        <h2>Hello</h2>
                        <div className='description'>
                            <span>Thanks for checking out my site. I am a 25-year-old developer and designer, currently working as a software engineer at </span>
                            <a href='https://grokker.com'>Grokker</a>
                            <span>, an online television network specializing in health and wellness. I work primarily with javascript, and focus on front-end and mobile development.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
