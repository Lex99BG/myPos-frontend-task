import React, {useState} from "react";
import './tooltip.css';

export const CustomToolT = ({heading, text, children}) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="toolt-container"
        onMouseEnter={()=> setIsVisible(true)}
        onMouseLeave={()=> setIsVisible(false)}
        >
            {children}
            {isVisible && <div className="toolt shadow-lg">
            <h3>{heading}</h3>
            <p>{text}</p>
            </div>}
        </div>
    )
}