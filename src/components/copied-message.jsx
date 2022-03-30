import React, { useContext } from "react";
import { PaletteContext } from '../App';

const CopiedMessage = (props) => {
    const { copiedMessageRef } = useContext(PaletteContext);
    return (
        <div ref={copiedMessageRef} id="copied-message" className="flex items-center transition-transform duration-300 transform -translate-y-20 justify-between rounded-md w-66 px-1.5 py-1 bg-gray-800 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33.506 33.506">
                <g id="Group_6" dataname="Group 6" transform="translate(255.753 -660.919)">
                    <rect id="Rectangle_11" width="33.506" height="33.506" rx="11" transform="translate(-255.753 660.919)" fill="#40e97e" />
                    <path id="Path_6" d="M563.134,61.533l4.627,7.756L581.1,60.717" transform="translate(-808.366 753.007) rotate(-14)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="3" />
                </g>
            </svg>
            <span className="mx-auto"> All colors copied in clipboard </span>
        </div>
    );
}
export default CopiedMessage;