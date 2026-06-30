import Image from "next/image";
import Link from "next/link";
import * as motion from 'framer-motion/client';

export default function ProfilPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20 overflow-hidden">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-blue-main to-brand-green-main py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/profil_jic.png" 
            alt="Profil Background" 
            fill 
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.h1 variants={fadeInUp} className="font-heading-primary text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg">Profil Lembaga</motion.h1>
          <motion.p variants={fadeInUp} className="font-body-extended text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Mengenal lebih dekat Lembaga Pendidikan Jakarta Islamic Centre
          </motion.p>
        </motion.div>
      </section>

      {/* Sejarah & Latar Belakang */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-islamic-arabesque opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:w-1/2"
            >
              <motion.h2 variants={fadeInUp} className="font-heading-primary text-4xl md:text-5xl text-brand-green-grad mb-8 relative inline-block">
                Latar Belakang
                <span className="absolute -bottom-3 left-0 w-2/3 h-2 bg-brand-green-main rounded-full"></span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="font-body-extended text-gray-700 leading-relaxed text-lg space-y-6">
                <p>
                  Pendidikan Jakarta Islamic Centre merupakan pendidikan di bawah koordinasi Sub Divisi Pembinaan Remaja Dan Anak (Birena). Pendidikan formal dan non formal tersebut diharapkan menjadi salah satu pusat pengembangan potensi anak.
                </p>
                <p>
                  Kami berupaya mencetak generasi muslim yang qur’ani, mandiri, kreatif dan berwawasan luas. Hal tersebut sejalan dengan Visi Jakarta Islamic Centre <strong>“Menjadi Pusat Peradaban Islam”</strong> dan Misi <strong>“Mewujudkan pusat pengembangan sumber daya muslim”</strong>.
                </p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative h-[450px] w-full rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-gray-100 group">
                <Image 
                  src="/images/profil_jic.png" 
                  alt="Kegiatan Belajar JIC" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 border-[8px] border-white/20 rounded-t-full rounded-b-3xl pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visi Misi Detailed */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading-primary text-5xl text-gray-900 mb-6">Visi, Misi, & Tujuan</h2>
            <div className="w-32 h-2 bg-brand-blue-main mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[2rem] p-12 shadow-xl hover:shadow-2xl transition-shadow border-t-8 border-brand-blue-main relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-islamic-pattern opacity-5 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-20 h-20 bg-brand-blue-main/10 rounded-2xl flex items-center justify-center mb-8 text-brand-blue-main">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="font-heading-primary text-3xl text-gray-900 mb-4">Visi</h3>
              <p className="font-body-extended text-gray-600 text-xl leading-relaxed">
                Menjadi Sekolah Islam unggulan untuk peradaban Islam.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[2rem] p-12 shadow-xl hover:shadow-2xl transition-shadow border-t-8 border-brand-green-main relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-islamic-pattern opacity-5 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-20 h-20 bg-brand-green-main/10 rounded-2xl flex items-center justify-center mb-8 text-brand-green-main">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="font-heading-primary text-3xl text-gray-900 mb-4">Misi</h3>
              <p className="font-body-extended text-gray-600 text-xl leading-relaxed">
                Mewujudkan generasi qur’ani dengan mengintegrasikan nilai-nilai islami dalam proses pembelajaran menuju peradaban Islam.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-brand-blue-main to-brand-green-main rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-islamic-arabesque opacity-10 mix-blend-overlay"></div>
            <h3 className="font-heading-primary text-4xl mb-12 text-center relative z-10">Tujuan Pendidikan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-body-extended text-lg relative z-10">
              {[
                "Menyiapkan generasi unggul yang memiliki kompetensi spiritual, intelektual, dan sosial.",
                "Mengembangkan kurikulum yang integratif antara pendidikan umum dan agama Islam.",
                "Memberikan pelayanan pendidikan berkualitas dengan fasilitas yang memadai dan modern.",
                "Membangun kemitraan dengan orang tua dan masyarakat dalam mendidik anak."
              ].map((tujuan, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  key={idx} 
                  className="flex gap-6 items-start bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-bold text-xl shadow-inner">{idx + 1}</div>
                  <p className="pt-2">{tujuan}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-islamic-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading-primary text-5xl text-gray-900 mb-6">Keunggulan Kami</h2>
            <div className="w-32 h-2 bg-brand-green-main mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: 'Fasilitas Lengkap', desc: 'Gedung dan ruang kelas yang modern, bersih, dan nyaman di lingkungan Jakarta Islamic Centre.' },
              { title: 'Kurikulum Terpadu', desc: 'Perpaduan ilmu pengetahuan umum dan nilai-nilai Al-Qur\'an secara seimbang.' },
              { title: 'Tenaga Pendidik', desc: 'Guru-guru berkompeten, ramah, dan berpengalaman di bidangnya.' },
              { title: 'Lingkungan Islami', desc: 'Berada di pusat peradaban Islam yang mendukung pembentukan karakter dan akhlak.' },
            ].map((item, idx) => (
              <motion.div 
                variants={fadeInUp}
                key={idx} 
                className="bg-gray-50 rounded-[2rem] rounded-tl-none p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-islamic-pattern opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="w-20 h-20 bg-brand-green-main/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-green-main group-hover:scale-110 group-hover:bg-brand-green-main group-hover:text-white transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-heading-primary text-2xl text-gray-900 mb-4">{item.title}</h3>
                <p className="font-body-extended text-gray-600 leading-relaxed text-sm relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
