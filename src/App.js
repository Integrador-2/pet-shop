import { useState } from 'react';

import mainContext from "./context/context";

import GroupButtons from './components/groupButtons';
import RegisterEmployee from './pages/registerEmployee';
import RegisterProduct from './pages/registerProduct';
import RegisterClient from './pages/registerClient';
import RegisterSuplier from './pages/registerSuplier';
import RegisterService from './pages/registerService';
import RegisterReversal from './pages/registerReversal';
import RegisterReport from './pages/registerReport';
import Login from './pages/login';

import './styles/global.css';

function App() {
  const [actualPage, setActualPage] = useState('login');

  const [alertConfig, setAlertConfig] = useState({
    'type': '',
    'title': '',
    'text': '',
    'show': 'none',
    'response': 'false'
  });
  const [showAlert, setShowAlert] = useState('none');
  const [showModal, setShowModal] = useState('none');

  return (
    <mainContext.Provider value={{
      setActualPage,
      actualPage,
      showModal,
      setShowModal,
      setAlertConfig,
      alertConfig,
      showAlert,
      setShowAlert
    }}>
      {
        actualPage === 'login' ? (
          <Login />
        ) : (
          <GroupButtons />
        )
      }
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
      {
        actualPage === 'report' && (
          <RegisterReport />
        )
      }
    </mainContext.Provider >
  );
}

export default App;
