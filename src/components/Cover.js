import React from 'react';
import utils from '../lib/utils';
import '../css/cover.scss';

class Cover extends React.Component {
    constructor() {
        super();
        this.handleScrollEvent = utils.debounce(this.handleScroll.bind(this), 12);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollEvent);
    }

    handleScroll(event) {
        const doc = document.documentElement;
        const pageY = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        const windowHeight = window.innerHeight;
        const percentScrolled = Math.min(pageY / windowHeight * 1.5, 1);
        const coverOffset = -pageY / 3;
        const rotation = percentScrolled * 120;
        const infoOffset = percentScrolled * -80;

        this.absoluteContainer.style.bottom = coverOffset + 'px';
        this.nightBackground.style.opacity = percentScrolled;
        this.sunAndMoon.style.transform = 'rotate(' + rotation + 'deg)';
        this.myInfo.style.marginBottom = infoOffset + '%';
    }

    render() {
        return (
            <div className='cover'>
                <div className='absoluteContainer' ref={ ref => this.absoluteContainer = ref }>
                    <div className='dayBackground' />
                    <div className='nightBackground' ref={ ref => this.nightBackground = ref } />
                    <div className='sunAndMoon' ref={ ref => this.sunAndMoon = ref }>
                        <div className='sun' />
                        <div className='moon' />
                    </div>
                    <div className='city'>
                        <div className='myInfo' ref={ ref => this.myInfo = ref }>
                            <h1>Jared Geilich</h1>
                            <div>DEVELOPER // DESIGNER // MUSICIAN</div>
                        </div>
                        <img src='images/vector.svg' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cover;
