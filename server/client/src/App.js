import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DevInfo from './components/devInfo'
import Home from './components/home';
import Error from './components/error';
import Footer from './components/footer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='devinfo/:devId' element={<DevInfo ></DevInfo>} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
