import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateTaskPage, TaskPage, NotFoundPage } from './pages';
import { Navbar } from './components';
import CssBaseline from '@mui/material/CssBaseline';
import { TaskProvider } from './context/TaskProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route
          path='/tasks/*'
          element={
            <TaskProvider>
              <Routes>
                <Route index element={<TaskPage />} />
                <Route path='create' element={<CreateTaskPage />} />
              </Routes>
            </TaskProvider>
          }
        />
        {/* <Route path='/tasks/create' element={<CreateTaskPage />} /> */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
