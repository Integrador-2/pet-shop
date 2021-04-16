import { useState } from 'react';

import pageContext from "./context/context";

import GroupButtons from './components/groupButtons';
import RegisterEmployee from './pages/registerEmployee';
import RegisterProduct from './pages/registerProduct';
import RegisterClient from './pages/registerClient';

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
    </pageContext.Provider>
  );
}

export default App;
