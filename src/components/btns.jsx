import React, { useContext } from "react";
import { PaletteContext } from '../App';
import domtoimage from "dom-to-image";

const Btns = props => {
    const { setColors, colorPaletteRef, copiedMessageRef } = useContext(PaletteContext);

    const downloadColorsImage = () => {
        domtoimage.toPng(colorPaletteRef.current)
            .then(dataUrl => {
                let link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'Color Palatte Generator';
                document.body.appendChild(link);
                link.click();
                link.remove();
            })
            .catch(err => { throw err });
    }
    const generateColorPalette = () => {

    }
    const copyColorHexCode = () => {
        function displayMessage() {
            ['-translate-y-3', '-translate-y-20'].forEach(value => {
                copiedMessageRef.current.classList.toggle(value)
            });
        }
        displayMessage();
        setTimeout(displayMessage, 3000);
    }

    return (
        <div className="w-full justify-between md:flex-row flex-col-reverse flex items-center">
            <span className="justify-between items-center md:w-2.5/6 w-full flex">
                <button className="btn secondary" onClick={downloadColorsImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 33.98 30.98">
                        <g id="download" transform="translate(0 -3)">
                            <path id="Path_1" dataname="Path 1" d="M11.335,25.657a4.247,4.247,0,0,0,6.009,0l4.546-4.546a1.416,1.416,0,0,0-2-2l-4.143,4.144.01-18.842A1.416,1.416,0,0,0,14.339,3h0a1.416,1.416,0,0,0-1.416,1.416l-.013,18.815-4.12-4.117a1.416,1.416,0,1,0-2,2Z" transform="translate(2.65)" fill="#535353" />
                            <path id="Path_2" dataname="Path 2" d="M32.564,16h0a1.416,1.416,0,0,0-1.416,1.416v5.663a1.416,1.416,0,0,1-1.416,1.416H4.247a1.416,1.416,0,0,1-1.416-1.416V17.416A1.416,1.416,0,0,0,1.416,16h0A1.416,1.416,0,0,0,0,17.416v5.663a4.247,4.247,0,0,0,4.247,4.247H29.732a4.247,4.247,0,0,0,4.247-4.247V17.416A1.416,1.416,0,0,0,32.564,16Z" transform="translate(0 6.653)" fill="#535353" />
                        </g>
                    </svg>
                    Image
                </button>

                <button className="btn secondary" onClick={copyColorHexCode}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path id="copy" d="M15,20H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0H15a5.006,5.006,0,0,1,5,5V15a5.006,5.006,0,0,1-5,5ZM5,2A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3ZM24,19V6a1,1,0,0,0-2,0V19a3,3,0,0,1-3,3H6a1,1,0,0,0,0,2H19A5.006,5.006,0,0,0,24,19Z" fill="#535353" />
                    </svg>
                    Copy
                </button>
            </span>

            <button className="btn primary"> Generate </button>
        </div>
    );
}
export default Btns;