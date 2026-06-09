import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateTaskPage, TaskPage, NotFoundPage } from './pages';
import { Navbar } from './components';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/tasks' element={<TaskPage />} />
          <Route path='/tasks/create' element={<CreateTaskPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
