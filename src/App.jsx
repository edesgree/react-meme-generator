import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Output from './components/Output';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Form />
          <Output />
        </main>
      </div>
    </div>
  );
}

export default App;
