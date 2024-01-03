import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';
import { GlobalContext, HeaderContext } from './ContextApi/HeaderContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderContext >
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table/>}></Route>
          <Route path="/form" element={<Form/>}></Route>
        </Routes>
        </BrowserRouter>
      </HeaderContext>


    </div>
  );
}

export default App;
