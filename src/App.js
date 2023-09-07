import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from './components/Success';

function App() {
  return (
    <div className="bg-[#1F3A47] w-auto min-h-screen flex lg:p-20 p-0 justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/success" element={<Success />}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
