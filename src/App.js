import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Bengs is the Author now.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React 
        </a>
        <div>
          <Welcome name="sara" location="components folder"></Welcome>
        </div>
      </header>
    </div>
  );
}

export default App;
