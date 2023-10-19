import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Task from './pages/Task';
import SignInPage from './pages/SignInPage';
import { useState } from 'react';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div className="container mt-5">
      <Routes>
        <Route path='/login' element={<SignInPage />} />
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
         path='/update/:id'
         element={<Task />}
         isAuthenticated={isAuthenticated}
         />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
