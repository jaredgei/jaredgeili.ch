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

        if (this.state.scrolled && pageY < this.lastPageY && pageY < 150) {
            return this.setState({
                scrolled: false
            });
        }

        if (!this.state.scrolled && pageY > 0) {
            if (this.lastPageY && this.lastPageY < pageY) {
                return;
            }

            return this.setState({
                scrolled: true
            });
        }

        this.lastPageY = pageY;
    }

    render() {
        const extraClasses = this.state.scrolled ? ' scrolled' : '';
        return (
            <div className={'cover' + extraClasses}>
                <div className='absoluteContainer'>
                    <div className='dayBackground' />
                    <div className='nightBackground' />
                    <div className='sunAndMoon' >
                        <div className='sun' />
                        <div className='moon' />
                    </div>
                    <div className='city'>
                        <Parallax
                            className='myInfo'
                            offsetYMax={(window.innerHeight * 1.5) + 'px'}
                            offsetYMin={'-' + (window.innerHeight * 1.5) + 'px'}
                            slowerScrollRate>
                            <h1>Jared Geilich</h1>
                            <div>DEVELOPER // DESIGNER // MUSICIAN</div>
                        </Parallax>
                        <Parallax
                            className='image'
                            offsetYMax={40}
                            offsetYMin={0}
                            slowerScrollRate>
                            <img src='images/vector.svg' />
                        </Parallax>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cover;
