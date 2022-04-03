import React from 'react';
const Copy = props => {
    const { size, fill, className } = props;
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path 
                id="copy" 
                d="M15,20H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0H15a5.006,5.006,0,0,1,5,5V15a5.006,5.006,0,0,1-5,5ZM5,2A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3ZM24,19V6a1,1,0,0,0-2,0V19a3,3,0,0,1-3,3H6a1,1,0,0,0,0,2H19A5.006,5.006,0,0,0,24,19Z" 
                fill={fill} 
            />
        </svg>
    )
}
export default Copy;