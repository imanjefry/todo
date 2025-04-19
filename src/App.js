import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todos from './components/home/Todos';
import TodoCategory from './components/todocategory/TodoCategory';
import TodoReminds from './components/todoreminder/TodoReminds';
import FooterMenu from './components/FooterMenu';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ textAlign: 'center', direction: 'rtl', paddingTop: '20px', paddingBottom: '56px' }}>
        {/* Removed the navigation links from the top */}
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/category" element={<TodoCategory />} />
          <Route path="/reminds" element={<TodoReminds />} />
        </Routes>
        <FooterMenu />
      </div>
    </Router>
  );
}

export default App;
