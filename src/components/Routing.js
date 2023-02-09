import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Employee from './Employee';
import Post from './Post';

const Routing = () => {
    return (
        <>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/employee/:post_id" element={<Post />} />
            </Routes>
          </BrowserRouter>
        </>
    );
};

export default Routing;