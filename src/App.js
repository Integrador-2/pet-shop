import { useState, useEffect } from 'react';

import mainContext from "./context/context";

import GroupButtons from './components/groupButtons';
import RegisterReversal from './pages/registerReversal';
import RegisterReport from './pages/registerReport';
import Login from './pages/login';
import ListClient from './pages/listClient';
import ListEmployee from './pages/listEmployee';
import ListProduct from './pages/listProduct';
import ListService from './pages/listService';
import ListSupplier from './pages/listSupplier';
import RegisterEmployee from './pages/registerEmployee';
import RegisterProduct from './pages/registerProduct';
import RegisterClient from './pages/registerClient';
import RegisterSuplier from './pages/registerSuplier';
import RegisterService from './pages/registerService';
import UserTab from './components/userTab';


import './styles/global.css';
import { Container } from './styles/style';
import StartScreen from './components/startScreen';
import RegisterPage from './pages/registerPage';

import BackgroundLoginImage from "./assets/backgroundLogin.png";
import BackgroundImage from "./assets/Fundo.png";

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

  useEffect(() => {
    document.title = "Sistema Pet-shop";
  }, []);

  useEffect(() => {
    if (actualPage === 'login') {
      document.body.style.backgroundImage = `url(${BackgroundLoginImage})`;
    }
    if (actualPage !== 'login') {
      document.body.style.backgroundImage = `url(${BackgroundImage})`;
    }
    document.body.style.backgroundSize =  'cover'; 
  }, [actualPage])


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
      {actualPage !== 'login' && (
        <GroupButtons />
      )}
      <Container>
      {
        actualPage === 'login' && (
          <Login />
        )       
      }
      {
        actualPage === 'client' && (
          <ListClient />
        )
      }
      {
        actualPage === 'employee' && (
          <ListEmployee />
        )
      }
      {
        actualPage === 'product' && (
          <ListProduct />
        )
      }
      {
        actualPage === 'suplier' && (
          <ListSupplier />
        )
      }
      {
        actualPage === 'service' && (
          <ListService />
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
      {
        actualPage === 'registerEmployee' && (
          <RegisterEmployee />
        )
      }
      {
        actualPage === 'registerProduct' && (
          <RegisterProduct />
        )
      }
      {
        actualPage === 'registerSuplier' && (
          <RegisterSuplier />
        )
      }
      {
        actualPage === 'registerService' && (
          <RegisterService />
        )
      }
      {
        actualPage === 'registerClient' && (
          <RegisterClient />
        )
      }
      {
        actualPage === 'start' && (
          <StartScreen/>
        )
      }
      {actualPage === 'registers' && (
          <RegisterPage/>        
        )
      }
      </Container>
    </mainContext.Provider >
  );
}

export default App;
