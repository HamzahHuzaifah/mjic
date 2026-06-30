import Image from "next/image";
import * as motion from 'framer-motion/client';

interface GaleriItem {
  id: number;
  Judul: string;
  Kategori: string;
  Foto?: {
    url: string;
  };
}

async function getGaleri(): Promise<GaleriItem[]> {
  try {
    const res = await fetch('http://localhost:1337/api/galeris?populate=*&sort=createdAt:desc', { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (e) {
    return [];
  }
}

export default async function GaleriPage() {
  const galeriData = await getGaleri();
  
  // Jika database masih kosong atau error, gunakan mock data
  const galeri = galeriData.length > 0 ? galeriData : [
    { id: 1, Judul: 'Kegiatan PAUDQu', Kategori: 'PAUDQu', Foto: { url: '/images/profil_jic.png' } },
    { id: 2, Judul: 'Fasilitas JIC', Kategori: 'Fasilitas', Foto: { url: '/images/hero_beranda.png' } },
    { id: 3, Judul: 'Belajar Bersama', Kategori: 'Kegiatan', Foto: { url: '/images/profil_jic.png' } },
    { id: 4, Judul: 'Lingkungan Sekolah', Kategori: 'Fasilitas', Foto: { url: '/images/hero_beranda.png' } },
    { id: 5, Judul: 'Taman Pendidikan Al-Qur\'an', Kategori: 'TPQ', Foto: { url: '/images/profil_jic.png' } },
    { id: 6, Judul: 'Madrasah Diniyah Takmiliyah', Kategori: 'MDT', Foto: { url: '/images/hero_beranda.png' } },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20 overflow-hidden">
      <section className="bg-gradient-to-r from-brand-green-main to-brand-green-grad py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-arabesque opacity-10 mix-blend-overlay"></div>
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.h1 variants={fadeInUp} className="font-heading-primary text-5xl md:text-6xl mb-4 drop-shadow-lg">Galeri JIC</motion.h1>
          <motion.p variants={fadeInUp} className="font-body-extended text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Dokumentasi kegiatan dan fasilitas di lingkungan Jakarta Islamic Centre
          </motion.p>
        </motion.div>
      </section>

      <section className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-islamic-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center mb-16 gap-4 flex-wrap"
          >
            <button className="px-8 py-3 bg-brand-green-main text-white rounded-full font-body-extended font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">Semua</button>
            <button className="px-8 py-3 bg-white text-gray-600 border border-gray-200 rounded-full font-body-extended hover:bg-brand-green-main/5 hover:text-brand-green-main hover:border-brand-green-main/30 transition-all">PAUDQu</button>
            <button className="px-8 py-3 bg-white text-gray-600 border border-gray-200 rounded-full font-body-extended hover:bg-brand-green-main/5 hover:text-brand-green-main hover:border-brand-green-main/30 transition-all">TPQ</button>
            <button className="px-8 py-3 bg-white text-gray-600 border border-gray-200 rounded-full font-body-extended hover:bg-brand-green-main/5 hover:text-brand-green-main hover:border-brand-green-main/30 transition-all">MDT</button>
            <button className="px-8 py-3 bg-white text-gray-600 border border-gray-200 rounded-full font-body-extended hover:bg-brand-green-main/5 hover:text-brand-green-main hover:border-brand-green-main/30 transition-all">Fasilitas</button>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {galeri.map((item) => {
              // Handle URL gambar baik dari Strapi maupun statis lokal
              const imageUrl = item.Foto?.url?.startsWith('/') && !item.Foto?.url?.startsWith('/images') 
                ? `http://localhost:1337${item.Foto.url}` 
                : (item.Foto?.url || '/images/profil_jic.png');

              return (
                <motion.div variants={fadeInUp} key={item.id}>
                  <div className="group relative rounded-[2rem] rounded-tr-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-80 cursor-pointer">
                    <Image 
                      src={imageUrl} 
                      alt={item.Judul} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-0 right-0 w-32 h-32 bg-islamic-pattern opacity-10 mix-blend-overlay pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-xs font-bold text-brand-green-main bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3 inline-block uppercase tracking-wider shadow-sm">{item.Kategori}</span>
                      <h3 className="font-heading-primary text-2xl text-white drop-shadow-md">{item.Judul}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
