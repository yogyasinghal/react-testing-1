// import logo from './logo.svg';
// import './App.css';
import Enzyme from './Components/MyEnzyme';
import Header from './Components/Header'
import Login from './Login';
function App() {
  return (
    <div className="App">
      <Header data='data'></Header>
      <Login></Login>
      <Enzyme></Enzyme>
      {/* <h1>hello</h1>
      <p>para</p> */}
    </div>
  );
}

export default App;
