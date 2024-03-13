import { useState } from 'react';
import HotWire from './pages/HotWire';
import { useNuiEvent } from './hooks/useNuiEvent';

function App () {
  const [ component, setComponent ] = useState<string | null>(null);

  useNuiEvent('open', (data) => {
    console.log('open')
    setComponent('hotWire');
  });

  return (
    <>
      {component === 'hotWire' && <HotWire />}
    </>
  );
}

export default App;
