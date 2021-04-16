import { useState } from 'react';

import pageContext from "./context/context";

import GroupButtons from './components/groupButtons';
import RegisterEmployee from './pages/registerEmployee';
import RegisterProduct from './pages/registerProduct';
import RegisterClient from './pages/registerClient';
import RegisterSuplier from './pages/registerSuplier';
import RegisterService from './pages/registerService';
import RegisterReversal from './pages/registerReversal';

import './styles/global.css';

function App() {
  const [actualPage, setActualPage] = useState('client');

  return (
    <pageContext.Provider value={{
      setActualPage
    }}>
      <GroupButtons />
      {actualPage === 'client' && (
        <RegisterClient />
      )}
      {actualPage === 'employee' && (
        <RegisterEmployee />
      )}
      {actualPage === 'product' && (
        <RegisterProduct />
      )}
      {actualPage === 'suplier' && (
        <RegisterSuplier/>
      )}
      {actualPage === 'service' && (
        <RegisterService/>
      )}
      {actualPage === 'reversal' && (
        <RegisterReversal/>
      )}
    </pageContext.Provider>
  );
}

export default App;
