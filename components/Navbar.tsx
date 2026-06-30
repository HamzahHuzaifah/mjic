import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { AnimatePresence } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading-primary text-2xl text-brand-blue-main tracking-wide">
              Madrasah JIC
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-brand-blue-main font-medium transition-colors">
              Beranda
            </Link>
            <Link href="/profil" className="text-gray-700 hover:text-brand-blue-main font-medium transition-colors">
              Profil
            </Link>
            
            {/* Dropdown Pendidikan */}
            <div className="relative group h-20 flex items-center">
              <button className="text-gray-700 hover:text-brand-blue-main font-medium transition-colors flex items-center gap-1 h-full">
                Pendidikan
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-[80px] left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100">
                <div className="w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 overflow-hidden relative">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-islamic-pattern opacity-10 pointer-events-none"></div>
                  
                  <Link href="/paudqu" className="block px-5 py-3 text-gray-700 hover:bg-brand-red-main/5 hover:text-brand-red-main hover:pl-6 transition-all border-l-2 border-transparent hover:border-brand-red-main">
                    PAUDQu JIC
                  </Link>
                  <Link href="/tpq" className="block px-5 py-3 text-gray-700 hover:bg-brand-green-main/5 hover:text-brand-green-main hover:pl-6 transition-all border-l-2 border-transparent hover:border-brand-green-main">
                    TPQ JIC
                  </Link>
                  <Link href="/mdt" className="block px-5 py-3 text-gray-700 hover:bg-brand-blue-main/5 hover:text-brand-blue-main hover:pl-6 transition-all border-l-2 border-transparent hover:border-brand-blue-main">
                    MDT JIC
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/kabar" className="text-gray-700 hover:text-brand-blue-main font-medium transition-colors">
              Kabar
            </Link>
            <Link href="/galeri" className="text-gray-700 hover:text-brand-blue-main font-medium transition-colors">
              Galeri
            </Link>
            <Link href="#kontak" className="text-gray-700 hover:text-brand-blue-main font-medium transition-colors">
              Kontak
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <a 
              href="https://spmb.mjic.sch.id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-blue-main to-brand-blue-grad text-white font-heading-primary px-6 py-3 rounded-lg shadow-md hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Pendaftaran
            </a>
          </div>
          {/* Mobile menu button could go here */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-brand-blue-main focus:outline-none bg-gray-50 p-2 rounded-xl">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
