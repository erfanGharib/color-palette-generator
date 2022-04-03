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
    '#94a3b8',
    '#475569',
    '#111827',
    '#dc2626',
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