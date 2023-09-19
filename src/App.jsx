import './App.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './pages/main/Main.jsx';
import ChartPage from './pages/chart/ChartPage.jsx';

function App() {
 

  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Chart" element={<ChartPage/>} />     
      </Routes>      
    </Router>  
    </>
  )
}

export default App
