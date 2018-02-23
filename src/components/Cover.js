import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import utils from '../lib/utils';
import '../css/cover.scss';

class Cover extends React.Component {
    constructor() {
        super();
        this.handleScrollEvent = utils.debounce(this.handleScroll.bind(this), 10);
        this.state = {
            scrolled: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollEvent);
    }

    handleScroll(event) {
        const doc = document.documentElement;
        const pageY = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        if (this.state.scrolled && pageY < 150) {
            return this.setState({
                scrolled: false
            });
        }

        if (!this.state.scrolled && pageY > 0) {
            return this.setState({
                scrolled: true
            });
        }
    }

    render() {
        const extraClasses = this.state.scrolled ? ' scrolled' : '';
        const infoOffset = window.innerHeight * 3;
        return (
            <div className={'cover' + extraClasses}>
                <div className='absoluteContainer'>
                    <div className='dayBackground' />
                    <div className='nightBackground' />
                    <div className='sunAndMoon' >
                        <div className='sun' />
                        <div className='moon' />
                    </div>
                    <Parallax
                        className='clouds'
                        offsetYMax={100}
                        offsetYMin={-100}
                        slowerScrollRate>
                        <div className='cloud' />
                        <div className='cloud' />
                        <div className='cloud' />
                        <div className='cloud' />
                    </Parallax>
                    <Parallax
                        className='myInfo'
                        offsetYMax={infoOffset + 'px'}
                        offsetYMin={(-infoOffset / 4) + 'px'}
                        slowerScrollRate>
                        <h1>Jared Geilich</h1>
                        <div>DEVELOPER // DESIGNER // MUSICIAN</div>
                    </Parallax>
                    <Parallax
                        className='city'
                        offsetYMax={20}
                        offsetYMin={-20}
                        slowerScrollRate>
                        <img src='static/images/vector.svg' />
                    </Parallax>
                </div>
            </div>
        );
    }
}

export default Cover;
