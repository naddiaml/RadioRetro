import React from 'react';
import './InfoCommon.css';

const InfoCommon = ({ pageTitle, children }) => {
    return (
        <div className='container'>
            <div className="info__navigation">
                <a href="/info" title='+ INFO'>
                    <i className="fa-regular fa-circle-question"></i>
                </a>
                <i className="fa-solid fa-chevron-right"></i>
                <span>{pageTitle}</span>
            </div>
            <div className="info__content-container">
                <h3>{pageTitle}</h3>
                {children}
            </div>
        </div>
    );
};

export default InfoCommon;