import React from 'react';
import '../css/projects.scss';

class Projects extends React.Component {
    render() {
        return (
            <div className='projects'>
                <div className='cardRow'>
                    <a className='card' href='https://soundcloud.com/swordfishdoula'><img src='static/images/sfd.png' /></a>
                    <a className='card' href='http://potlux.org/'><img src='static/images/potlux.png' /></a>
                </div>
                <div className='cardRow'>
                    <a className='card' href='https://pilot.ai/'><img src='static/images/pilot.png' /></a>
                    <a className='card' href='https://mediocre.business/'><img src='static/images/mediocre.png' /></a>
                </div>
                <div className='cardRow'>
                    <a className='card' href='https://synthesize.consulting/'><img src='static/images/synthesize.png' /></a>
                    <a className='card' href='http://thestallwall.com/'><img src='static/images/stallwall.png' /></a>
                </div>
            </div>
        );
    }
}

export default Projects;
