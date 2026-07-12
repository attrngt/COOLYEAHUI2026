import { Link, useLocation } from "react-router-dom";

export default function Navbar({ language, setLanguage }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    // Menggunakan bg-white/70 + backdrop-blur-md untuk efek kaca
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          to="/"
          className="hover:scale-105 transition-transform duration-300 flex items-center"
        >
          <img
            src="/logoc.png"
            alt="COOLYEAH Logo"
            className="h-16 md:h-20 w-auto object-contain drop-shadow-black drop-shadow-xs"
          />
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          <Link
            to="/"
            className={`font-headline text-sm md:text-base uppercase tracking-wider transition-colors ${
              isActive("/")
                ? "text-brand-orange"
                : "text-brand-dark hover:text-brand-orange"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-headline text-sm md:text-base uppercase tracking-wider transition-colors ${
              isActive("/about")
                ? "text-brand-orange"
                : "text-brand-dark hover:text-brand-orange"
            }`}
          >
            About Us
          </Link>

          {/* === TOMBOL GANTI BAHASA === */}
          <div className="flex items-center gap-2 border-r-2 border-brand-dark/10 pr-6">
            <button
              onClick={() => setLanguage("id")}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                language === "id"
                  ? "bg-brand-orange text-white"
                  : "bg-brand-dark/5 text-brand-dark hover:bg-brand-dark/10"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                language === "en"
                  ? "bg-brand-orange text-white"
                  : "bg-brand-dark/5 text-brand-dark hover:bg-brand-dark/10"
              }`}
            >
              EN
            </button>
          </div>

          <Link
            to="/register"
            className="bg-brand-orange text-white px-6 py-2 -skew-x-12 transition-all duration-300 hover:bg-brand-dark hover:scale-105 shadow-[4px_4px_0px_0px_#d1d5db]"
          >
            <span className="block skew-x-12 font-headline uppercase tracking-widest text-sm md:text-base">
              Register
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
