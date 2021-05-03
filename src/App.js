import { useState } from 'react';

import mainContext from "./context/context";

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

  const [alertConfig, setAlertConfig] = useState({
    'type' : '',
    'title' : '',
    'text' : '',
    'show' : 'none'
  });
  const [alertTitle, setAlertTitle] = useState('');
  const [alertType, setAlertType] = useState('');
  const [alertText, setAlertText] = useState('');
  const [showAlert, setShowAlert] = useState('none');
  const [showModal, setShowModal] = useState('none');

  return (
    <mainContext.Provider value={{
      setActualPage,
      actualPage,
      alertTitle,
      setAlertTitle,
      alertType,
      setAlertType,
      alertText,
      setAlertText,
      showAlert,
      setShowAlert,
      showModal,
      setShowModal,
      setAlertConfig,
      alertConfig
    }}>
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
    </mainContext.Provider >
  );
}

export default App;
