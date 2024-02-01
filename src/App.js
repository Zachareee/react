// import logo from './logo.svg';
import './App.css';
import EditorPane from './windows/EditorPane'
import Whiteboard from './windows/Whiteboard';
import Objects from './tabs/Objects';

function App() {
  return (
    <div className="App">
      <div id="editor" className="flex grid grid-cols-4 h-dvh">
        <EditorPane>
          <Objects />
        </EditorPane>
        <Whiteboard><p>Whiteboard</p></Whiteboard>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      </header> */}
    </div>
  );
}

export default App;
