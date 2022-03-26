import './index.css';
import Homepage from './components/homepage.js'
import LinksPage from './components/linkspage.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
