import React from 'react';
import '../css/projects.scss';

class Projects extends React.Component {
    render() {
        return (
            <div className='projects'>
                <a className='card' href='https://soundcloud.com/swordfishdoula'><img src='images/sfd.png' /></a>
                <a className='card' href='http://potlux.org/'><img src='images/potlux.png' /></a>
                <a className='card' href='https://grokker.com/'><img src='images/grokker.png' /></a>
                <a className='card' href='http://thestallwall.com/'><img src='images/stallwall.png' /></a>
            </div>
        );
    }
}

export default Projects;
