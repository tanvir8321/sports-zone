import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="text-center py-3 bg-dark text-white">
            <p className="m-0"><FontAwesomeIcon icon={ faCopyright}/> Sports Zone 2021 || All rights reserved.</p>
        </div>
    );
};

export default Footer;