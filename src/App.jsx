import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookIn from "./pages/bookIn/BookIn";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookIn />} />
      </Routes>
    </div>
  );
}

export default App;
