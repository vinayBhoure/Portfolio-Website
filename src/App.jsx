import "./App.css";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import wave from './assets/wave.svg'

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${wave})`, backgroundRepeat:`no-repeat`, overflow:`hidden`}}>
      <Navbar />
      <Main />

    </div>
  );
}

export default App;
