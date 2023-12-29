import React from 'react';
import './CtaButton.css';
import { Link } from "react-router-dom";

const CtaButton = ({ buttonLink, buttonTitle, iconClassName, buttonText }) => {
    return (
        <div className="cta-button__container">
            <Link to={buttonLink}>
                <button className='cta-button' title={buttonTitle}>
                    {iconClassName && (
                        <span className="cta-button__icon">
                            <i className={iconClassName}></i>
                        </span>
                    )}
                    {buttonText}</button>
            </Link>
        </div>
    )
}

export default CtaButton