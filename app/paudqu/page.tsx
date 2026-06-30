import Image from "next/image";
import Link from "next/link";
import * as motion from 'framer-motion/client';

export default function PaudquPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20 overflow-hidden">
      {/* Header Banner */}
      <section className="bg-brand-red-main py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-arabesque opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.h1 variants={fadeInUp} className="font-heading-primary text-6xl md:text-7xl lg:text-8xl mb-6 drop-shadow-lg tracking-tight">PAUDQu JIC</motion.h1>
          <motion.p variants={fadeInUp} className="font-body-extended text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto drop-shadow-sm">
            Pendidikan Anak Usia Dini Al-Qur'an
          </motion.p>
        </motion.div>
      </section>

      {/* Deskripsi */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-islamic-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="lg:w-1/2"
            >
              <motion.h2 variants={fadeInUp} className="font-heading-primary text-4xl md:text-5xl text-gray-900 mb-8 relative inline-block">
                Tentang PAUDQu
                <span className="absolute -bottom-3 left-0 w-1/2 h-2 bg-brand-red-main rounded-full"></span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="font-body-extended text-gray-700 leading-relaxed text-xl space-y-6">
                <p>
                  Pendidikan Anak Usia Dini Al-Qur'an (PAUDQu) Jakarta Islamic Centre adalah lembaga pendidikan prasekolah yang mengintegrasikan kurikulum pendidikan nasional dengan pendidikan agama Islam secara menyeluruh.
                </p>
                <p>
                  Kami meyakini bahwa masa usia dini adalah masa keemasan (golden age) untuk menanamkan fondasi akidah, akhlak, dan kecintaan pada Al-Qur'an, sehingga kelak menjadi generasi yang tangguh dan qur'ani.
                </p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
              <div className="bg-brand-red-main/5 p-10 rounded-[2.5rem] rounded-tl-none border border-brand-red-main/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-islamic-pattern opacity-5 group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="font-heading-primary text-3xl text-brand-red-main mb-8 relative z-10">Fokus Pembelajaran</h3>
                <ul className="space-y-6 font-body-extended text-gray-700 text-lg relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-red-main text-white flex items-center justify-center shrink-0 shadow-md"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="pt-1">Pengenalan huruf hijaiyah dan doa sehari-hari</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-red-main text-white flex items-center justify-center shrink-0 shadow-md"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="pt-1">Pembentukan karakter dan kemandirian</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-red-main text-white flex items-center justify-center shrink-0 shadow-md"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="pt-1">Stimulasi motorik kasar dan halus melalui bermain</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-red-main text-white flex items-center justify-center shrink-0 shadow-md"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="pt-1">Pengembangan kreativitas dan seni islami</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Pendaftaran */}
      <section className="py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="font-heading-primary text-4xl md:text-5xl text-gray-900 mb-6">Mari Bergabung Bersama Kami</motion.h2>
            <motion.p variants={fadeInUp} className="font-body-extended text-gray-600 text-xl md:text-2xl mb-12">
              Daftarkan putra-putri Anda sekarang dan bangun fondasi karakter mulia sejak dini di PAUDQu Jakarta Islamic Centre.
            </motion.p>
            <motion.a 
              variants={fadeInUp}
              href="https://spmb.mjic.sch.id" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-brand-red-main text-white font-heading-primary px-12 py-5 rounded-full shadow-[0_0_30px_rgba(255,67,103,0.5)] hover:shadow-[0_0_50px_rgba(255,67,103,0.8)] transition-all duration-300 text-xl"
            >
              Daftar PAUDQu Sekarang
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
