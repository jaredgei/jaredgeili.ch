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
                            <span>Thanks for checking out my site. I am a 28-year-old developer and designer, currently working as a software engineer at </span>
                            <a href='https://pilot.ai'>Pilot AI</a>
                            <span>, an artificial intelligence company that creates computer vision software for embedded devices. I work primarily with javascript, focusing on building node.js and react.js based applications.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
