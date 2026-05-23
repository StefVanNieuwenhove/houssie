import { Spinner } from '../ui/spinner';

const Loader = ({ text }: { text: string }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 m-4'>
      <Spinner />
      <p>{text}</p>
    </div>
  );
};

export default Loader;
