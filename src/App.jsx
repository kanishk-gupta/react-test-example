import { Theme, Counter, InputForm, Fetch } from './components';

// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="custom-element">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Theme />
        <Counter />
        <InputForm />
        <Fetch />
      </header>
    </div>
  );
}

export default App;
