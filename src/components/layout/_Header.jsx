import React from 'react';

export default class _Header extends React.Component {
    render() {
        return (

            <header class="masthead text-center text-white">
                <div class="masthead-content">
                    <div class="container">
                        {/* eslint-disable  */}

                        <h1 class="masthead-heading mb-0">{this.props.headerProp}</h1>
                        <h2 class="masthead-subheading mb-0">{this.props.subheadingProp}</h2>
                        <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">{this.props.buttonProp}</a>.
                                {/* eslint-enable */}

                    </div>
                </div>
                <div class="bg-circle-1 bg-circle"></div>
                <div class="bg-circle-2 bg-circle"></div>
                <div class="bg-circle-3 bg-circle"></div>
                <div class="bg-circle-4 bg-circle"></div>
            </header>
        );
    }
}


_Header.defaultProps = {
    headerProp: "One Page Wonder",
    subheadingProp: "Will Rock Your Socks Off",
    buttonProp: "Learn More"
}