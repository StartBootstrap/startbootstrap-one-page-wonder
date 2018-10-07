import React from 'react';
import Img from '../../assets/images/logo/Regular_Logo/Main Logo Transparent Background.png';

export default class _Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <header class="masthead text-center text-white">
                    <div class="masthead-content">
                        <div class="container">
                        <div>
                            {/* eslint-disable  */}
                        <img id="header-logo" src={Img} />
                        {/* eslint-enable */}
                    </div>
                            {/* <h1 class="masthead-heading mb-0">{this.props.headerProp}</h1> */}
                            <h2 class="masthead-subheading mb-0">{this.props.subheadingProp}</h2>
                            {/* <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">{this.props.buttonProp}</a> */}
                        </div>
                    </div>                    
                </header>
            </div>
        );
    }
}


_Header.defaultProps = { 
    headerProp: "",
    subheadingProp: "Subheading Here",
    buttonProp: null
}