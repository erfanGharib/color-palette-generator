import React, { useContext } from "react";
import { PaletteContext } from '../App';
import domtoimage from "dom-to-image";
import {ReactComponent as Download} from '../icons/download.svg';
import Copy from '../icons/copy.jsx';


const Btns = props => {
    const { colors, setColors, colorPaletteRef, copiedMessageRef } = useContext(PaletteContext);
    const generateColorPaletteRef = React.createRef();

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
    const copyColorHexCode = (e) => {
        if(e.code === 'KeyC' || e.type === 'click') {
            navigator.clipboard.writeText(colors.join().replaceAll(',', ' '));
            function displayMessage() {
                ['-translate-y-3', '-translate-y-20'].forEach(value => {
                    copiedMessageRef.current.classList.toggle(value)
                });
            }
            displayMessage();
            setTimeout(displayMessage, 3000);
        }
    }
    const generateColorPalette = (e) => {
        if(e.code === 'Space' || e.type === 'click') {
            generateColorPaletteRef.current.classList.add('btn-primary-active');
            setTimeout(() => 
                generateColorPaletteRef.current.classList.toggle('btn-primary-active')
            , 100);
        }
    }

    document.body.addEventListener('keypress', (e) => {
        copyColorHexCode(e);
        generateColorPalette(e);
    });

    return (
        <div className="w-full justify-between md:flex-row flex-col-reverse flex items-center">
            <span className="justify-between items-center md:w-2.5/6 w-full flex">
                <button className="btn secondary" onClick={downloadColorsImage}>
                    <Download />
                    Image
                </button>

                <button className="btn secondary" onClick={copyColorHexCode}>
                    <Copy size={18} fill={'#535353'} />
                    Copy
                </button>
            </span>

            <button 
                className="btn primary" 
                onClick={(e) => generateColorPalette(e)} 
                ref={generateColorPaletteRef}
            > Generate </button>
        </div>
    );
}
export default Btns;