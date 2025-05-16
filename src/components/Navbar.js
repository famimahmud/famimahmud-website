import React, { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="relative max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">Fami Mahmud</h1>
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li>
            <a href="#about" className="hover:text-gray-500 transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-500 transition-colors duration-200">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-500 transition-colors duration-200">Contact</a>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 z-40 w-48 bg-white rounded-xl shadow-lg p-4 space-y-3 border border-gray-200"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-500 transition">
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-500 transition">
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-500 transition">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
