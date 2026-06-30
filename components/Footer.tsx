import * as motion from 'framer-motion/client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-green-main to-brand-green-grad text-white pt-16 pb-12 mt-auto relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-islamic-arabesque opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading-primary text-xl mb-4">Madrasah JIC</h3>
            <p className="text-white/80 font-body-extended">
              Mendidik generasi muda dengan ilmu dan akhlak untuk masa depan yang lebih cerah.
            </p>
          </div>
          <div>
            <h4 className="font-heading-primary text-lg mb-4">Tautan</h4>
            <ul className="space-y-2 text-white/80 font-body-extended">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/profil" className="hover:text-white transition-colors">Profil</a></li>
              <li><a href="/berita" className="hover:text-white transition-colors">Berita</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading-primary text-lg mb-4">Pendidikan JIC</h4>
            <ul className="space-y-2 text-white/80 font-body-extended">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Gd. Sosial Budaya Lt. 2 (di atas Perpustakaan JIC), Komplek Masjid Raya Jakarta Islamic Centre</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>08.00 - 17.00 WIB</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>0878-8996-9936</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="https://instagram.com/pendidikan.jic" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue-main transition-colors">
                Instagram
              </a>
              <a href="https://wa.me/6287889969936" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue-main transition-colors">
                WhatsApp
              </a>
              <a href="https://www.youtube.com/@JICTVOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue-main transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p className="font-body-extended">&copy; {new Date().getFullYear()} Madrasah JIC. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}
