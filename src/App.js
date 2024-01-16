import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Main from './Components/Pages/Main';
import Login from './Components/Pages/Login/index';
import Cadastro from './Components/Pages/Cadastro/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/home' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastrar' element={<Cadastro/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
