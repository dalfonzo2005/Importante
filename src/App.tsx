import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Decorations from './components/Decorations';
// páginas/routers
import Home from './pages/Home';
import Story from './pages/Story';
import Proposal from './pages/Proposal';

function App() {
  return (
    <BrowserRouter>
      

      <div className="app-container">
        <Decorations/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/proposal" element={<Proposal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;