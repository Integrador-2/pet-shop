import { useState, useEffect } from 'react';

import { BrowserRouter, Switch, Route, useHistory, Redirect } from 'react-router-dom';
// import { useHistory } from 'react-router';

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
  let history = useHistory();
  const [actualPage, setActualPage] = useState();

  const [alertConfig, setAlertConfig] = useState({
    'type': '',
    'title': '',
    'text': '',
    'show': 'none',
    'response': 'false'
  });
  const [showAlert, setShowAlert] = useState('none');
  const [showModal, setShowModal] = useState('none');

  const handleChangePage = (page) => {
    window.location.assign("/"+page);
  }

  useEffect(() => {
    document.title = "Sistema Pet-shop";
  }, []);

  useEffect(() => {
    document.body.style.backgroundSize =  'cover';
    if (window.location.pathname === "/") {
      document.body.style.backgroundImage = `url(${BackgroundLoginImage})`;
    }
    if (window.location.pathname !== "/") {
      document.body.style.backgroundImage = `url(${BackgroundImage})`;
    }
    const pageWithoutBar = window.location.pathname.split("/");
    setActualPage(pageWithoutBar[1]);
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
      setShowAlert,
      handleChangePage,
      history
    }}>
      {window.location.pathname !== "/" &&
        <GroupButtons />
      }
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Login}/>
            <Route path="/client" exact={true} component={ListClient}/>
            <Route path="/employee" exact={true} component={ListEmployee}/>
            <Route path="/product" exact={true} component={ListProduct}/>
            <Route path="/supplier" exact={true} component={ListSupplier}/>
            <Route path="/service" exact={true} component={ListService}/>
            <Route path="/reversal" exact={true} component={RegisterReversal}/>
            <Route path="/report" exact={true} component={RegisterReport}/>
            <Route path="/client/edit/" exact={true} component={RegisterClient}/>
            <Route path="/client/register/" exact={true} component={RegisterClient}/>
            <Route path="/employee/edit/" exact={true} component={RegisterEmployee}/>
            <Route path="/employee/register/" exact={true} component={RegisterEmployee}/>
            <Route path="/product/edit/" exact={true} component={RegisterProduct}/>
            <Route path="/product/register/" exact={true} component={RegisterProduct}/>
            <Route path="/supplier/edit" exact={true} component={RegisterSuplier}/>
            <Route path="/supplier/register" exact={true} component={RegisterSuplier}/>
            <Route path="/service/edit" exact={true} component={RegisterService}/>
            <Route path="/service/register" exact={true} component={RegisterService}/>
            <Route path="/start" exact={true} component={StartScreen}/>
            <Route path="/registers" exact={true} component={RegisterPage}/>
          </Switch>
        </BrowserRouter>
      </Container>
    </mainContext.Provider >
  );
}

export default App;
