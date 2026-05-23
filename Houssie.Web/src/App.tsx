import { Button } from './components/ui/button';

function App() {
  const bgImagesStyle = '';
  //"min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/wallpaper_ipad.jpg')] lg:bg-[url('/assets/wallpaper_desktop.jpg')]";

  return (
    <>
      <div
        className={`${bgImagesStyle} flex min-h-svh flex-col items-center justify-center`}>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
