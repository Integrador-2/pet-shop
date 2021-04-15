import {useState} from 'react';

import GroupButtons from './components/groupButtons';
import registerEmployee from './pages/registerEmployee';
import registerProduct from './pages/registerProduct';
import registerClient from './pages/registerClient';

import './styles/global.css';

function App() {
  const [actualPage, setActualPage] = useState('client');

  return (
    <>
      <GroupButtons />
      {
        actualPage == 'client' && 
          
      }
    </>
  );
}

export default App;
