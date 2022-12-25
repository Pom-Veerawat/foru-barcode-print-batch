import logo from './logo.svg';
import './App.css';
import PrintingContent from './components/PrintingContent';

function App(props) {
  //console.log(props.branchID);
  return (
    <div className="App">
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
      <PrintingContent branchId={props.branchID}></PrintingContent>
    </div>
  );
}

export default App;
