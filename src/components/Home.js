import React from 'react';
import Cover from './Cover';
import About from './About';
import Connect from './Connect';
import Projects from './Projects';
import Footer from './Footer';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Cover />
                <About />
                <Connect />
                <Projects />
                <Footer />
            </div>
        );
    }
}

export default Home;
