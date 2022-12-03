import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/index';
import Feature from './pages/Feature';
import Doc from './pages/Doc';

function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Feature />}
    else if(menu === 3) {return <Doc />}
  }
  return (
    <div className='App'>
    <Header onClick={setMenu} />
      {content()}
    </div>
  );
}

export default App;
