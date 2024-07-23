import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/Hotel/LogIn';
import SignUp from './components/Hotel/SignUp';
import Card from './components/AddHotel/Card';
import AddHotel from './components/AddHotel/AddHotel';
import AddRoom from './components/AddHotel/AddRoom';
import Dashboard from './components/Hotel/Dashboard';
import Hotel from './components/Hotel/Hotel';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hotel />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addhotel" element={<AddHotel />} />
        <Route path="/addroom" element={<AddRoom />} />
        <Route path="/card" element={<Card />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
   

  
}

export default App;
