import "./App.css";
import Gallery from "./components/Gallery/Gallery.jsx";
import { Route, Routes } from "react-router-dom";
import SingleImage from "./components/SingleImage/SingleImage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/:id" element={<SingleImage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
