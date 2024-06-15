import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import FormValidations from './components/FormValidations';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import ImageUpload from './components/ImageUpload';
import UserDetails from './components/UserDetails';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>React Tasks</h1>
      
      
      <BrowserRouter>
      <Nav />
      
        {/* Add routes here */}
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/form" element={<FormValidations />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/mageupload" element={<ImageUpload/>} />
          <Route path="/userdetails" element={<UserDetails/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
