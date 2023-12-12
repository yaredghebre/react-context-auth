// React tools
import { createContext, useState, useEffect } from 'react';

// Router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Posts from './pages/Posts';
import AddNewPost from './pages/AddNewPost';
import About from './pages/About';
import SinglePost from './pages/SinglePost';
import Login from './pages/Login';
import Register from './pages/Register';

// Middlewares
import PrivateRoutes from './middlewares/PrivateRoutes';
import GuestRoutes from './middlewares/GuestRoutes';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Contexts
import AuthProvider from './contexts/AuthProvider';

// Global Context
export const GlobalContext = createContext();

function App() {
  return (
    <GlobalContext.Provider>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:slug" element={<SinglePost />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-new-post" element={<AddNewPost />} />
            <Route
              path="/login"
              element={
                <GuestRoutes>
                  <Login />
                </GuestRoutes>
              }
            ></Route>
            <Route
              path="/register"
              element={
                <GuestRoutes>
                  <Register />
                </GuestRoutes>
              }
            ></Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
