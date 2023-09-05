import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Home />
            </div>
          }
        />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
