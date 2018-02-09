import React from 'react';
import '../css/connect.scss';

class Connect extends React.Component {
    render() {
        return (
            <div className='connect'>
                <div className='stars1' />
                <div className='stars2' />
                <div className='stars3' />
                <h2>Connect With Me</h2>
                <div className="icons">
                    <a href='https://www.linkedin.com/in/jgeilich/'><i className="fab fa-linkedin fa-3x" /></a>
                    <a href='https://github.com/jaredgei'><i className="fab fa-github-square fa-3x" /></a>
                    <a href='https://www.facebook.com/jaredgei'><i className="fab fa-facebook fa-3x" /></a>
                    <a href='mailto:jgeilich@gmail.com'><i className="fas fa-envelope-square fa-3x" /></a>
                </div>
            </div>
        );
    }
}

export default Connect;
