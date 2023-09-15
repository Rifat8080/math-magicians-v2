import './App.css';
import Calculator from './Calculator';
import Quotes from './Quote';

function App() {
  return (
    <div className="App">
      <div className="row justify-content-center mt-5">
        <Calculator />
        <Quotes />
      </div>
    </div>
  );
}

export default App;
