import './App.css';
import {AuthForm} from "./components/AuthForm";
import Routs from "./routes/Routs";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routs />
      </header>
    </div>
  );
}

export default App;
