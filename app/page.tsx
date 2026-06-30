import Link from "next/link";
import Image from "next/image";
import * as motion from 'framer-motion/client';

interface Berita {
  id: number;
  Slug: string;
  Judul: string;
  Konten: string;
  publishedAt: string;
  Foto_Utama?: {
    url: string;
  };
}

async function getBeritas(): Promise<Berita[]> {
  try {
    const res = await fetch('http://localhost:1337/api/beritas?populate=*&pagination[limit]=3&sort=publishedAt:desc', { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (e) {
    return [];
  }
}

export default async function Home() {
  const beritas = await getBeritas();

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-brand-green-grad">
          <Image 
            src="/images/hero_beranda.png" 
            alt="Pendidikan JIC Hero" 
            fill 
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-islamic-pattern opacity-10 mix-blend-color-burn"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-black/40 to-black/60"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="font-heading-primary text-brand-blue-main text-2xl md:text-3xl mb-4 drop-shadow-md">
            Pendidikan
          </motion.h2>
          <motion.h1 variants={fadeInUp} className="font-heading-primary text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] leading-tight tracking-tight">
            Jakarta Islamic Centre
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-heading-arabic text-3xl md:text-5xl text-brand-green-main mb-12 drop-shadow-lg italic">
            "Jujur, Ikhlas, Cerdas"
          </motion.p>
          
          <motion.a 
            variants={fadeInUp}
            href="https://spmb.mjic.sch.id" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-brand-blue-main to-brand-blue-grad text-white font-heading-primary px-10 py-5 rounded-full shadow-[0_0_30px_rgba(72,179,255,0.6)] hover:shadow-[0_0_50px_rgba(72,179,255,0.9)] transition-all duration-300 text-lg md:text-xl border border-white/20"
          >
            Daftar Sekarang
          </motion.a>
        </motion.div>
      </section>

      {/* Profil Section */}
      <section className="py-28 bg-white relative" id="profil-singkat">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-islamic-arabesque opacity-5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="font-heading-primary text-4xl md:text-5xl text-brand-green-grad mb-8 relative inline-block">
                Profil Pendidikan
                <span className="absolute -bottom-3 left-0 w-2/3 h-2 bg-brand-green-main rounded-full"></span>
              </motion.h3>
              <motion.p variants={fadeInUp} className="font-body-extended text-gray-600 leading-relaxed text-lg mb-8">
                Pendidikan Jakarta Islamic Centre merupakan pendidikan di bawah koordinasi Sub Divisi Pembinaan Remaja Dan Anak (Birena). Pendidikan formal dan non formal tersebut diharapkan menjadi salah satu pusat pengembangan potensi anak untuk mencetak generasi muslim yang qur’ani, mandiri, kreatif dan berwawasan luas.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/profil" className="text-brand-blue-main font-bold hover:text-brand-blue-grad transition-colors flex items-center gap-2 group text-lg">
                  Selengkapnya tentang kami
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white/50"
            >
              <Image 
                src="/images/profil_jic.png" 
                alt="Profil JIC" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 border-[8px] border-white/10 rounded-t-full rounded-b-3xl pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-28 bg-gradient-to-br from-brand-blue-grad to-brand-green-grad relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue-main rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-main rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading-primary text-5xl text-white mb-4">Visi & Misi</h2>
            <p className="text-brand-green-main font-body-extended text-2xl">Landasan Kami Mendidik Generasi</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl rounded-[2rem] rounded-tl-[6rem] p-12 border border-white/20 hover:bg-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue-main/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-main to-brand-blue-grad rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="font-heading-primary text-3xl text-white mb-6">Visi</h3>
              <p className="font-body-extended text-white/95 text-xl leading-relaxed">
                Menjadi Sekolah Islam unggulan untuk peradaban Islam.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl rounded-[2rem] rounded-tr-[6rem] p-12 border border-white/20 hover:bg-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green-main/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green-main to-brand-green-grad rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="font-heading-primary text-3xl text-white mb-6">Misi</h3>
              <p className="font-body-extended text-white/95 text-xl leading-relaxed">
                Mewujudkan generasi qur’ani dengan mengintegrasikan nilai-nilai islami dalam proses pembelajaran menuju peradaban Islam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Pendidikan */}
      <section className="py-28 bg-gray-50 relative">
        <div className="absolute inset-0 bg-islamic-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading-primary text-5xl text-gray-900 mb-4">Jenjang Pendidikan</h2>
            <p className="text-gray-600 font-body-extended text-2xl">Program pendidikan unggulan di Jakarta Islamic Centre</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { title: 'PAUDQu', link: '/paudqu', desc: "Pendidikan Anak Usia Dini Al-Qur'an adalah fondasi utama untuk membangun karakter mulia sejak dini.", color: 'bg-brand-red-main', bgShape: 'rounded-t-full rounded-b-3xl' },
              { title: 'TPQ', link: '/tpq', desc: "Taman Pendidikan Al-Qur'an (TPQ) adalah tempat ideal untuk menanamkan kecintaan dan pemahaman mendalam tentang Al-Qur'an.", color: 'bg-brand-green-main', bgShape: 'rounded-3xl' },
              { title: 'MDT', link: '/mdt', desc: "Madrasah Diniyah Takmiliyah adalah pilihan tepat untuk memperkaya pengetahuan agama Islam dengan pendekatan komprehensif.", color: 'bg-brand-blue-main', bgShape: 'rounded-t-full rounded-b-3xl' }
            ].map((program, idx) => (
              <motion.div variants={fadeInUp} key={idx}>
                <Link href={program.link} className="group block h-full">
                  <div className={`bg-white ${program.bgShape} p-10 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-500 border border-gray-100 h-full flex flex-col items-center text-center relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-islamic-pattern opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className={`w-24 h-24 ${program.color} rounded-full flex items-center justify-center mb-8 text-white font-heading-primary text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500 ring-8 ring-${program.color}/10 relative z-10`}>
                      {program.title}
                    </div>
                    <h3 className="font-heading-primary text-3xl text-gray-900 mb-6 relative z-10">{program.title}</h3>
                    <p className="font-body-extended text-gray-600 leading-relaxed mb-8 flex-grow text-lg relative z-10">{program.desc}</p>
                    <span className={`${program.color.replace('bg-', 'text-')} font-bold flex items-center gap-2 relative z-10`}>
                      Lihat Program <svg className="w-6 h-6 transition-transform group-hover:translate-x-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kabar Terbaru */}
      {beritas && beritas.length > 0 && (
        <section className="py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-end mb-16"
            >
              <div>
                <h2 className="font-heading-primary text-5xl text-gray-900 mb-4">Kabar Terbaru</h2>
                <div className="w-32 h-2 bg-brand-blue-main rounded-full"></div>
              </div>
              <Link href="/kabar" className="hidden md:flex items-center gap-2 text-brand-blue-main font-bold hover:text-brand-blue-grad transition-colors text-lg">
                Lihat Semua Kabar <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {beritas.map((item) => {
                 const imageUrl = item.Foto_Utama?.url 
                   ? `http://localhost:1337${item.Foto_Utama.url}`
                   : null;
                 
                 const excerpt = item.Konten 
                   ? item.Konten.replace(/[*#_]/g, '').substring(0, 100) + '...' 
                   : 'Tidak ada deskripsi.';
                 
                 return (
                   <motion.div variants={fadeInUp} key={item.id}>
                     <Link href={`/berita/${item.Slug}`} className="group block h-full">
                       <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col group-hover:-translate-y-2">
                         <div className="h-64 relative overflow-hidden bg-gray-100 rounded-t-[2rem]">
                            {imageUrl ? (
                              <Image src={imageUrl} alt={item.Judul} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                            ) : (
                              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                         </div>
                         <div className="p-8 flex flex-col flex-grow relative">
                            <div className="text-sm font-bold text-brand-green-main mb-4 uppercase tracking-wider bg-brand-green-main/10 px-3 py-1 rounded-full inline-block self-start">
                              {new Date(item.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </div>
                            <h3 className="font-heading-primary text-2xl text-gray-900 mb-4 group-hover:text-brand-blue-main line-clamp-2 leading-snug transition-colors">{item.Judul}</h3>
                            <p className="font-body-extended text-gray-600 line-clamp-3 leading-relaxed mb-6">{excerpt}</p>
                            <div className="mt-auto pt-6 border-t border-gray-100 text-brand-blue-main font-bold group-hover:translate-x-3 transition-transform inline-flex items-center gap-2">
                              Baca Selengkapnya &rarr;
                            </div>
                         </div>
                       </div>
                     </Link>
                   </motion.div>
                 );
              })}
            </motion.div>
            
            <div className="mt-12 text-center md:hidden">
              <Link href="/kabar" className="inline-flex items-center gap-2 text-brand-blue-main font-bold text-lg">
                Lihat Semua Kabar <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
