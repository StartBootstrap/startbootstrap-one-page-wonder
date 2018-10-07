import React from 'react';
import { _NavBar, _Footer, _Header, PriceList } from '../../components';


export default class _Price extends React.Component { 
    render () { 
        return ( 
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header 
                    headerProp="The Little Lash Lab"
                    subheadingProp="View our Price List below"
                />
                <PriceList />
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}