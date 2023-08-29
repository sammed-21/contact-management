 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import ContactPage from './components/ContactPage';
import ChartsMapsPage from './components/ChartsMapsPage';
import SideBar from './components/SideBar';
function App() {
 

  return (
    <Router>
       <div className="flex">
          <SideBar />
          <div className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<ContactPage />} />
              <Route path="/charts-maps" element={<ChartsMapsPage />} />
            </Routes>
          </div>
        </div>
    </Router>
  )
}

export default App
