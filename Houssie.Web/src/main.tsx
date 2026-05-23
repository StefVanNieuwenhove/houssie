import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Navbar } from './components/navigation';
import { TaskLayout } from './layout';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar.tsx';
import { NotFoundPage } from './pages/';

const bgImagesStyle =
  "min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/wallpaper_ipad.jpg')] lg:bg-[url('/assets/wallpaper_desktop.jpg')]";

createRoot(document.getElementById('root')!).render(
  <div
    className={bgImagesStyle}
    style={{ backgroundImage: `url(/assets/wallpaper_desktop.jpg)` }}>
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
    </StrictMode>
    ,
  </div>,
);
