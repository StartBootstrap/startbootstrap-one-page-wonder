import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default class ContactIcons extends React.Component { 
    render() { 
        return(
            <div className="SocialIcons">
                <SocialIcon url="https://www.facebook.com/pg/thelittlelashlab" />
                <SocialIcon url="https://www.instagram.com/thelittlelashlab/" />
                <SocialIcon url="mailto:thelittlelashlab@gmail.com" />
                <SocialIcon url="tel:0276248778" />
            </div>
        );
    }
}