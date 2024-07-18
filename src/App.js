import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Page2 from './components/page2/Page2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     
     <Router>
      <Header/>
     <Routes>
    <Route path="/" element={<Hero/>} />
    <Route path="/page2" element={<Page2/>} />
    
</Routes>
    
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
