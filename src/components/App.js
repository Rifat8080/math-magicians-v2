import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Quotes from './Quote';
import Layout from '../Routes/Layout';
import Home from '../Routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="qoute" element={<Quotes />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
