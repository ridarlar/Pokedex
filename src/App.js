import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Search from './components/pages/Search'
import Credits from './components/pages/Credits';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/credits' element={<Credits/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;