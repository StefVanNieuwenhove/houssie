import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateTaskPage, TaskPage } from './pages/task/index.ts';
import { Navbar } from './components';
import CssBaseline from '@mui/material/CssBaseline';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/tasks' element={<TaskPage />} />
        <Route path='/tasks/create' element={<CreateTaskPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
