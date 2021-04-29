import { useState, useEffect } from 'react';

import pageContext from "./context/context";

import Modal from './components/modal';
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

  const [showModal, setShowModal] = useState('none');

  return (
    <pageContext.Provider value={{
      setActualPage,
      setShowModal,
      actualPage
    }}>
      <Modal showModal={showModal} />
      <GroupButtons />
      {
        actualPage === 'client' && (
          <RegisterClient />
        )
      }
      {
        actualPage === 'employee' && (
          <RegisterEmployee />
        )
      }
      {
        actualPage === 'product' && (
          <RegisterProduct />
        )
      }
      {
        actualPage === 'suplier' && (
          <RegisterSuplier />
        )
      }
      {
        actualPage === 'service' && (
          <RegisterService />
        )
      }
      {
        actualPage === 'reversal' && (
          <RegisterReversal />
        )
      }
    </pageContext.Provider >
  );
}

export default App;
