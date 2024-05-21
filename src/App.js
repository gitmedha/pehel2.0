import logo from './logo.svg';
import './App.css';
import RegistrationForm from './main/RegistrationForm';
import ThankyouPage from './main/ThankyouPage';
import AlumniForm from './main/AlumniForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/alumni-form" element={<AlumniForm />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
