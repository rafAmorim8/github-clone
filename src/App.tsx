import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

function App() {
  return (
    <BrowserRouter>

      <GlobalStyles />

      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:repo" element={<Repo />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
