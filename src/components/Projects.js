import React from 'react';
import '../css/projects.scss';

class Projects extends React.Component {
    render() {
        return (
            <div className='projects'>
                <div className='cardRow'>
                    <a className='card' href='https://soundcloud.com/swordfishdoula'><img src='images/sfd.png' /></a>
                    <a className='card' href='http://potlux.org/'><img src='images/potlux.png' /></a>
                </div>
                <div className='cardRow'>
                    <a className='card' href='https://grokker.com/'><img src='images/grokker.png' /></a>
                    <a className='card' href='http://thestallwall.com/'><img src='images/stallwall.png' /></a>
                </div>
            </div>
        );
    }
}

export default Projects;
