import React from 'react';
import Cover from './Cover';
import About from './About';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Cover />
                <About />
            </div>
        );
    }
}

export default Home;
