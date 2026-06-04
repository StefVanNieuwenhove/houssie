import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Navbar } from './components/navigation';
import { TaskLayout } from './layout';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar.tsx';
import { NotFoundPage } from './pages/';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/sonner.tsx';
import { ThemeProvider } from './components/ui/ThemeProvider.tsx';

const client = new QueryClient();

//const bgImagesStyle = "min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/wallpaper_ipad.jpg')] lg:bg-[url('/assets/wallpaper_desktop.jpg')]";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <SidebarProvider defaultOpen={false}>
            <SidebarInset>
              <Navbar />
              <Routes>
                <Route path='/' element={<App />} />
                <Route path='/tasks' element={<TaskLayout />}></Route>
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </SidebarInset>
            <Toaster position='bottom-right' richColors />
          </SidebarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
