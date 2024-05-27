

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomeComponent/HomePage';
import Addpropert from './Components/AddPropertyComponent/Addpropert'
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<Addpropert/>} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
