import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './logs/HomePage';
import Index from './logs/Index';
import NewLogs from './logs/NewLogs';
import EditLogs from './logs/EditLogs';
import ShowLogs from './logs/ShowLogs';
import DefaultLayout from './layouts/DefaultLayout';
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logs/Index" element={<Index />} />
        <Route path="/logs/NewLogs" element={<NewLogs />} />
        <Route path="/logs/:id/edit" element={<EditLogs />} />
        <Route path="/logs/:id" element={<ShowLogs />} />
      </Routes>
    </Router>
  );
}

export default App;