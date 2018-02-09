import React from 'react';
import Cover from './Cover';
import About from './About';
import Projects from './Projects';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Cover />
                <About />
                <Projects />
            </div>
        );
    }
}

export default Home;
