'use client';

import * as motion from 'framer-motion/client';

export default function UnderDevelopment() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: 'easeOut' as any,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950 p-4 md:p-8">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-green-grad/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue-grad/15 blur-[120px]" />
        <div className="absolute inset-0 bg-islamic-pattern opacity-5 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Main Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-2xl rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        {/* Rub el Hizb SVG Star - Rotating */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="relative flex items-center justify-center w-24 h-24">
            {/* Outer Rotating Star */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg className="w-full h-full text-brand-green-main/30" viewBox="0 0 100 100" fill="currentColor">
                <rect x="25" y="25" width="50" height="50" transform="rotate(0 50 50)" className="stroke-brand-green-main stroke-[1.5]" />
                <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" className="stroke-brand-green-main stroke-[1.5]" />
              </svg>
            </motion.div>
            
            {/* Inner Rotating Star (opposite direction) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute w-16 h-16"
            >
              <svg className="w-full h-full text-brand-blue-main/40" viewBox="0 0 100 100" fill="currentColor">
                <rect x="25" y="25" width="50" height="50" transform="rotate(15 50 50)" className="stroke-brand-blue-main stroke-2" />
                <rect x="25" y="25" width="50" height="50" transform="rotate(60 50 50)" className="stroke-brand-blue-main stroke-2" />
              </svg>
            </motion.div>

            {/* Inner Static Glow Circle */}
            <div className="absolute w-8 h-8 rounded-full bg-brand-green-main/20 flex items-center justify-center border border-brand-green-main/40">
              <div className="w-3 h-3 rounded-full bg-brand-green-main animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="space-y-2 mb-4">
          <h1 className="font-heading-primary text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-main via-brand-green-main to-brand-blue-main tracking-wider">
            Madrasah JIC
          </h1>
          <p className="font-body-extended text-xs md:text-sm text-zinc-400 tracking-widest uppercase">
            Jakarta Islamic Centre
          </p>
        </motion.div>

        {/* Arabic Calligraphy Style Motto */}
        <motion.div 
          variants={itemVariants} 
          className="font-heading-arabic text-2xl md:text-3xl text-brand-green-main/90 mb-6 drop-shadow-md"
        >
          جُوجُرْ، إِخْلَاصْ، جَرْدَاسْ
          <span className="block font-sans text-sm text-zinc-500 mt-1 italic tracking-wide">
            "Jujur, Ikhlas, Cerdas"
          </span>
        </motion.div>

        <hr className="border-zinc-800/80 my-6 max-w-md mx-auto" />

        {/* Status Section */}
        <motion.div variants={itemVariants} className="space-y-4 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
            Sedang Dalam Pengembangan
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Situs resmi Lembaga Pendidikan Jakarta Islamic Centre (PAUDQu, TPQ, MDT) sedang dalam proses pembaruan dan peningkatan sistem. Kami sedang mempersiapkan layanan informasi terbaik untuk Anda.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div variants={itemVariants} className="w-full max-w-md mx-auto mb-10 space-y-2">
          <div className="flex justify-between text-xs text-zinc-400 font-medium">
            <span>Progress Pengembangan</span>
            <span>90%</span>
          </div>
          <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden p-[1px]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '90%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full rounded-full bg-gradient-to-r from-brand-blue-main via-brand-green-main to-brand-green-main shadow-[0_0_12px_rgba(1,190,164,0.5)]"
            />
          </div>
          <p className="text-[10px] text-zinc-500 italic">
            Tahap finalisasi database dan optimasi halaman.
          </p>
        </motion.div>

        {/* Contact Info / Footer Links */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
            Butuh Informasi Lebih Lanjut?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-zinc-400">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281211112222" // Replace with real phone or template
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/80 border border-zinc-800 hover:border-brand-green-main/30 text-zinc-300 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <svg className="w-4 h-4 text-brand-green-main" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.945 9.945 0 0 0 4.773 1.226h.005c5.505 0 9.99-4.478 9.99-9.985 0-2.67-1.037-5.18-2.92-7.065A9.925 9.925 0 0 0 12.012 2zm5.718 14.152c-.313.88-1.5 1.63-2.073 1.702-.564.072-1.112.26-3.606-.772-3.192-1.321-5.181-4.578-5.34-4.79-.16-.212-1.28-1.705-1.28-3.253 0-1.547.813-2.31 1.1-2.612.287-.3.627-.375.836-.375.21 0 .42.001.603.01.189.008.444-.073.693.528.254.614.869 2.115.945 2.267.076.152.127.329.025.533-.1.203-.152.33-.3.504-.15.174-.313.388-.447.522-.15.15-.307.315-.133.616.175.301.778 1.284 1.67 2.078.95.847 1.751 1.112 2.001 1.225.25.112.396.096.545-.072.15-.168.643-.747.813-.997.172-.25.341-.21.576-.123.235.088 1.493.704 1.75.832.256.128.427.192.49.3.064.108.064.624-.25 1.502z"/>
              </svg>
              <span>Hubungi Kami</span>
            </a>
            
            {/* Email */}
            <a
              href="mailto:info@mjic.sch.id"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/80 border border-zinc-800 hover:border-brand-blue-main/30 text-zinc-300 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <svg className="w-4 h-4 text-brand-blue-main" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Resmi</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom copyright/stamp */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] text-zinc-600 mt-12"
        >
          &copy; {new Date().getFullYear()} Lembaga Pendidikan JIC. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
}
