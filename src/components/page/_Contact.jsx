import React from 'react';
import { _NavBar, _Footer, _Header, _Post, ContactIcons } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from '../../assets/images/alexander-andrews-633927-unsplash.jpg'
export default class _Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header
                    headerProp="The Little Lash Lab"
                    subheadingProp="Contact us to Book!"
                    buttonProp="Book Now!"
                />
                <_Post 
                    header="Lets Talk!"
                    paragraph="Simply Click on any of the icons below to Get in touch!"
                    img={Img}
                />
                <ContactIcons />
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}