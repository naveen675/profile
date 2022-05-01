import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DevInfo from './components/devInfo'
import Home from './components/home';
import Error from './components/error';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='devinfo/:devId' element={<DevInfo ></DevInfo>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
