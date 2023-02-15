import './App.css';
import Education from './components/Education';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/workHistory' element={<WorkHistory />} />
          <Route path = '/education' element={<Education />} />
          <Route path='/about' element={<About />} />
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
