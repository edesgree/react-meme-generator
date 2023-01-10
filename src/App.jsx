import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default App;
