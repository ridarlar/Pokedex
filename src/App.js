import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Repo from './components/pages/Repo'
import Credits from './components/pages/Credits';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/repo' element={<Repo/>}/> */}
          <Route path='/credits' element={<Credits/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;