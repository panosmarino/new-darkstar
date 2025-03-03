import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const baseClasses = "px-4 py-2 text-lg transition-colors";
    return pathname === path
      ? `${baseClasses} text-black font-bold`
      : `${baseClasses} text-gray-600 hover:text-black`;
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center space-x-6">
          <Link href="/" className={getLinkClass('/')}>
            Home
          </Link>
          <Link href="/work" className={getLinkClass('/work')}>
            Work
          </Link>
          <Link href="/about" className={getLinkClass('/about')}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
} 