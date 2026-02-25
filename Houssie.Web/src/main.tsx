import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Navbar } from './components/navigation';
import { TaskLayout } from './layout';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar.tsx';
import { NotFoundPage } from './pages/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider defaultOpen={false}>
        <SidebarInset>
          <Navbar />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/tasks' element={<TaskLayout />}></Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>,
);
