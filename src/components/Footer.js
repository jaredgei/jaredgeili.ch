import React from 'react';
import '../css/footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                Designed by Jared Geilich &copy; {new Date().getFullYear()}
            </div>
        );
    }
}

export default Footer;
