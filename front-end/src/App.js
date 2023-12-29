import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EditPage from "./pages/EditPage";
import Home from "./pages/Home";
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
