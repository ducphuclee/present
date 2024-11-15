import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import HomePage from './pages/HomePage';
import Library from './pages/Library';
import ComponentDemo from './pages/ComponentDemo';
import PropsDemo from './pages/PropsDemo';
import StateDemo from './pages/StateDemo';
import StyleDemo from './pages/StyleDemo';
import LifecycleDemo from './pages/LifecycleDemo';
import ApiDemo from './pages/ApiDemo';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/components" element={<ComponentDemo />} />
          <Route path="/props" element={<PropsDemo />} />
          <Route path="/state" element={<StateDemo />} />
          <Route path="/styles" element={<StyleDemo />} />
          <Route path="/lifecycle" element={<LifecycleDemo />} />
          <Route path="/api" element={<ApiDemo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
} export default App;