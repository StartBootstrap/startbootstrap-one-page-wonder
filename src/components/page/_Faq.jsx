import React from 'react';
import { _Footer, _NavBar, _Header, _Post } from '../../components';
import Img1 from '../../assets/images/logo/Unsplash_pics/Natural Lashes.jpg';
import Img2 from '../../assets/images/logo/Unsplash_pics/Lights & Lashes.jpg';
import Img3 from '../../assets/images/logo/Unsplash_pics/B & W Wedding Image.jpg';
export default class _Faq extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header
                    headerProp="The Little Lash Lab"
                    subheadingProp="Got Some Questions?"
                />
                <_Post
                    header="Here's something interesting"
                    paragraph="Keep reading to get some answers!"
                    img={Img1}
                />
                <_Post
                    header="Here's something interesting"
                    paragraph="Keep reading to get some answers!"
                    img={Img2}
                />
                <_Post
                    header="Here's something interesting"
                    paragraph="Keep reading to get some answers!"
                    img={Img3}
                />
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}