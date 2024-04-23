import './App.css';
import BlogDetails from './BlogDetails';
import Create from './Create';
import Navabr from './components/navbar';
import Homepage from './homme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navabr />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
