import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { AboutPage } from 'pages';
import './App.scss';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
