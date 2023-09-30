import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogPage from './components/LogPage';
import Admin from './components/Admin';
import FarmerLogin from './components/FarmerLogin';
import FarmerRegistration from './components/FarmerRegistration';
import HomePage from './components/HomePage';
import Register from './components/registerpage/Register';
import './App.css';
import ImageMap from './components/ImageMap';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/map'element={<ImageMap/>}/>
          <Route path="/login" element={<LogPage />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/admin" element={<Admin />} />
          <Route path="/farmer-login" element={<FarmerLogin />} />
          <Route path="/farmer-registration" element={<FarmerRegistration />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
