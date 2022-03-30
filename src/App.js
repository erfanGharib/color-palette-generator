import React, { createContext, useState } from 'react';
import Btns from './components/btns';
import ColorPalette from './components/color-palette'
import CopiedMessage from './components/copied-message';
import './App.css';
import './styles/tailwind.css';

const PaletteContext = createContext();

const App = () => {
  const colorPaletteRef = React.createRef();
  const copiedMessageRef = React.createRef();
  const [colors, setColors] = useState([
    'rgb(148 163 184)',
    'rgb(71 85 105)',
    'rgb(17 24 39)',
    'rgb(220 38 38)',
  ]);

  return (
    <PaletteContext.Provider value={{ setColors, colors, colorPaletteRef, copiedMessageRef }}>
      <CopiedMessage />
      <ColorPalette />
      <Btns />
    </PaletteContext.Provider>
  );
}

export default App;
export { PaletteContext }