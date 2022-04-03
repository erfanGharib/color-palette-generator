import React, { useState } from "react";
import Copy from '../icons/copy.jsx';

const Color = props => {
    const cssClasses = ['opacity-100', 'opacity-0'];
    const [classes, setClasses] = useState(cssClasses);
    const { value } = props;
    const copyColor = () => {
        setClasses(cssClasses.reverse());
        navigator.clipboard.writeText(value);
    }

    return (
         <div
            className="color-box"
            style={{ backgroundColor: value }}
            onClick={copyColor}
            onMouseLeave={() => setClasses(cssClasses)}
        >
            <div className="hover-box left-0 w-full h-full z-10 transition-opacity cursor-pointer flex items-center justify-center opacity-0 top-0 bg-black bg-opacity-30 absolute f-jcb-ic">
                <Copy className={classes[0]} size={23} fill={'#ffffff'} />
                <span className={classes[1]}>copied!</span>
            </div>
            <span className="text-white inline-blockuppercase">{value}</span>
        </div>
    );
}
export default Color;