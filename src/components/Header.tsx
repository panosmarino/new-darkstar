import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full p-4 relative z-50">
      <nav className="flex gap-8 items-center text-black">
        <h1 className="text-xl font-bold !text-black">DarkStar</h1>
        <div className="flex gap-6">
          <Link href="/" className="!text-black hover:text-gray-600">Home</Link>
          <Link href="/about" className="!text-black hover:text-gray-600">About Us</Link>
          <Link href="/work" className="!text-black hover:text-gray-600">Our Work</Link>
        </div>
      </nav>
    </header>
  );
} 