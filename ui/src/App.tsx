import { useEffect, useState } from 'react';
import HotWire from './pages/HotWire';


export enum InterfaceName {
  HotWire = 'hotWire',
}

const App = () => {
  const [ component, setComponent ] = useState<InterfaceName | null>( InterfaceName.HotWire );

  useEffect( () => {
    /* EventManager.addHandler( 'router', 'setComponent', ( componentPage: InterfaceName ) => {
      setComponent( componentPage );
    } )
    EventManager.stopAddingHandlers( 'router' );
    return () => {
      EventManager.removeTargetHandlers( 'router' );
    }; */
  }, [] )

  return (
    <>
      {component === InterfaceName.HotWire && <HotWire />}
    </>
  );
}

export default App;
