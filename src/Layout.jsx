import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", key: "Home" },
    { name: "About", path: "/about", key: "About" },
    { name: "Gallery", path: "/gallery", key: "Gallery" },
    { name: "Contact", path: "/contact", key: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --font-heading: 'Cormorant Garamond', serif;
          --font-body: 'Montserrat', sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-heading);
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        body {
          font-family: var(--font-body);
        }
      `}</style>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698921ff1383d42bf491dbc7/dba3148d5_FatFullCateringLogo.png"
                alt="Catering"
                className="h-14 w-auto group-hover:scale-105 transition-transform"
              />
              <span className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>
    Cater
  </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    currentPageName === item.key
                      ? "text-amber-700"
                      : "text-neutral-600 hover:text-amber-700"
                  }`}
                >
                  {item.name}
                  {currentPageName === item.key && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-700 rounded-full" />
                  )}
                </Link>
              ))}

              <Link to="/contact">
                <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all">
                  Get Quote
                </button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                    currentPageName === item.key
                      ? "text-amber-700 bg-amber-50"
                      : "text-neutral-600 hover:bg-neutral-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698921ff1383d42bf491dbc7/dba3148d5_FatFullCateringLogo.png"
                alt="Fat Full Catering"
                className="h-16 mb-4"
              />
              <p className="text-neutral-400 max-w-md">
                Premium catering services crafted with passion and attention to detail.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase">
                Quick Links
              </h3>
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className="block text-neutral-400 hover:text-amber-600 text-sm mb-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
              <div className="space-y-2.5 text-neutral-400 text-sm">
                <p>info@cater.com</p>
                <p>(555) 254-7986</p>
                <p>123 Culinary Street<br />Food City, FC 12345</p>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-neutral-500 text-sm">&copy; 2026 Fat Full Catering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}