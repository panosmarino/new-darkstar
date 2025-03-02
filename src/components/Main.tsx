import Image from 'next/image';
import logo from './logo.png';

export default function Main() {
  return (
    <main className="flex items-center justify-center p-4 min-h-[80vh]">
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-black text-8xl font-bold mb-8">DarkStar</h1>
        <h2 className="text-black text-8xl font-bold">Pictures</h2>
      </div>
      <Image 
        src={logo} 
        alt="DarkStar Logo" 
        width={228} 
        height={228} 
        className="hidden md:block md:ml-[150px] object-contain"
      />
    </main>
  );
}
