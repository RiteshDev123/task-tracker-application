import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Task from './pages/Task';


function App() {
  return (
        <div className="container mt-5">
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/update/:id' element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
