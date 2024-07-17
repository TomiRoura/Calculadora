import React from 'react'
import FooterComponent from './FooterComponent';

const LayoutComponent = (props) => {
    const { children } = props;
    return (
        <div>
            {children}
            <FooterComponent />
        </div>
    )
}

export default LayoutComponent