import { Route, Routes } from 'react-router';
import './App.css';
import Home from './component/Home';
import AboutUs from './component/About';
import ContactUs from './component/contact';
import AAA from './component/AAA';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aaa" element={<AAA />} />
      </Routes>
    </>
  );
}

export default App;
