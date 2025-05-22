import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#808000] text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Resume Analyzer</Link>
        </div>
        <nav className="flex items-center space-x-6">
          <Link href="/about" className="hover:text-gray-200 transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-200 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
