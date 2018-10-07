import React from 'react';
import { _NavBar, _Header, _Post } from '../components';

import Img1 from '../assets/images/logo/Unsplash_pics/Natural Lashes.jpg';
import Img2 from '../assets/images/logo/Unsplash_pics/Lights & Lashes.jpg';
import Img3 from '../assets/images/logo/Unsplash_pics/B & W Wedding Image.jpg';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header />
                <_Post
                    header="For those about to rock..."
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
                    img={Img3}
                />
                <_Post 
                    header="We salute you!"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
                    img={Img2}
                />
                <_Post 
                    header="This should change!"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
                    img={Img1}
                />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}
