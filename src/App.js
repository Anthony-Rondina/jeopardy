
import './App.css';
import MainPage from "./components/MainPage.js"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
