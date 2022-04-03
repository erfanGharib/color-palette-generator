import React, { useContext } from "react";
import { PaletteContext } from '../App';
import Color from './color'

const ColorPalette = props => {
    const { colors, colorPaletteRef } = useContext(PaletteContext);

    return (
        <div className="overflow-hidden rounded-xl w-full h-96 mb-4 mt-3">
            <div
                style={{ height: '24rem' }}
                ref={colorPaletteRef}
                className="w-full h-full flex-col sm:flex-row overflow-hidden flex"
            >
                { colors.map(value => <Color key={value} value={value} />)}
            </div>
        </div>
    );
}
export default ColorPalette;