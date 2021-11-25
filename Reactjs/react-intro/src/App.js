import logo from './logo.svg';
import './App.css';
import "./component/mystyles.css"
import Home from './component/Home';
import Navbar from './component/Navbar';
import FirstComponent from './component/FirstComponent';
import ClassCounter from './component/ClassCounter';
import FunctionComponents from './component/FunctionComponents';
import ParentComponent from './component/ParentComponent';


// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount 

// Props drilling

// To avoid props drilling we have  redux, context api

// How to create form in react

function App() {
  return (


    <div className="App">

      <ClassCounter />

      <FunctionComponents/>

      {/* <Navbar/>
      <h1>Codekul</h1>
      <Home/>
      <FirstComponent/> */}

      <ParentComponent city={"Pune"}/>

      <ParentComponent name={"Mumbai"}/>
      

    </div>
  );
}

export default App;
