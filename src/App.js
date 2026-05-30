
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import New from './Pages/New';
import Recent from './Pages/Recent';


function App() {
  return (
    <Router>
    <div className="App">

     <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/New" element={<New/>} />
      <Route path = "/Recent" element={<Recent/>} />

     </Routes>
    </div>
    </Router>
  );
}

export default App;
