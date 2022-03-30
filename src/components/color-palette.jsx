import React, { useContext } from "react";
import { PaletteContext } from '../App';

const ColorPalette = props => {
    const { colors, colorPaletteRef } = useContext(PaletteContext);

    return (
        <div className="overflow-hidden rounded-xl w-full h-96 mb-4 mt-3">
            <div
                style={{ height: '24rem' }}
                ref={colorPaletteRef}
                className="w-full h-full flex-col sm:flex-row flex"
            >
                {colors.map((value, index) => {
                    return (
                        <span
                            key={`color-${index}`}
                            className="color-box"
                            style={{ backgroundColor: value }}
                        ></span>
                    )
                })}
            </div>
        </div>
    );
}
export default ColorPalette;