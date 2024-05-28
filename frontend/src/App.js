

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomeComponent/HomePage';
import Addpropert from './Components/AddPropertyComponent/Addpropert'
import { LoginSignup } from './Components/LoginSignupComponent/LoginSignup';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignup/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/add" element={<Addpropert/>} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
