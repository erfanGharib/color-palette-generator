import React, { useContext } from "react";
import { PaletteContext } from '../App';
import {ReactComponent as Checked} from '../icons/checked.svg';

const CopiedMessage = (props) => {
    const { copiedMessageRef } = useContext(PaletteContext);
    return (
        <div ref={copiedMessageRef} id="copied-message" className="flex items-center transition-transform duration-300 transform -translate-y-20 justify-between rounded-md w-66 px-1.5 py-1 bg-gray-800 text-green-600">
            <Checked />
            <span className="mx-auto"> All colors copied in clipboard </span>
        </div>
    );
}
export default CopiedMessage;