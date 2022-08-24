import logo from './logo.svg';
import './App.css';
import version from '../package.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          welcome to Triveni
        </p>
        <p>UI version :- {version.version}</p>
      </header>
    </div>
  );
}

export default App;
