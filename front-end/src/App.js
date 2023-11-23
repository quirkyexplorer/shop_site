import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EditPage from "./pages/EditPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
