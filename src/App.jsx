// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// 导入组件
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

// 主容器样式
const MainContainer = styled.div`
  padding-top: 60px;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;