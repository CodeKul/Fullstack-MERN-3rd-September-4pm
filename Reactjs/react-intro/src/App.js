import logo from './logo.svg';
import './App.css';
import "./component/mystyles.css"
import Home from './component/Home';
import Navbar from './component/Navbar';


// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount 

function App() {
  return (
  

    <div className="App">
        <Navbar/>
      <h1>Codekul</h1>
      <Home/>
    </div>
  );
}

export default App;
