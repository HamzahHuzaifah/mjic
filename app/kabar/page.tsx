import Image from "next/image";
import Link from "next/link";
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

async function getSemuaBerita(): Promise<Berita[]> {
  try {
    const res = await fetch('http://localhost:1337/api/beritas?populate=*&sort=publishedAt:desc', { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (e) {
    return [];
  }
}

export default async function KabarPage() {
  const beritas = await getSemuaBerita();

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
      <section className="bg-gradient-to-r from-brand-blue-main to-brand-blue-grad py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-arabesque opacity-10 mix-blend-overlay"></div>
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.h1 variants={fadeInUp} className="font-heading-primary text-5xl md:text-6xl mb-4 drop-shadow-lg">Kabar & Informasi</motion.h1>
          <motion.p variants={fadeInUp} className="font-body-extended text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Berita terbaru seputar kegiatan dan prestasi di Jakarta Islamic Centre
          </motion.p>
        </motion.div>
      </section>

      <section className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-islamic-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {beritas.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32 text-gray-500 font-body-extended text-xl">
              Belum ada kabar terbaru saat ini.
            </motion.div>
          ) : (
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {beritas.map((item) => {
                 const imageUrl = item.Foto_Utama?.url 
                   ? `http://localhost:1337${item.Foto_Utama.url}`
                   : null;
                 
                 const excerpt = item.Konten 
                   ? item.Konten.replace(/[*#_]/g, '').substring(0, 120) + '...' 
                   : 'Tidak ada deskripsi.';
                 
                 return (
                   <motion.div variants={fadeInUp} key={item.id}>
                     <Link href={`/berita/${item.Slug}`} className="group block h-full">
                       <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col group-hover:-translate-y-2 relative">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-islamic-pattern opacity-5 group-hover:scale-150 transition-transform duration-700 pointer-events-none z-0"></div>
                         
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
                         <div className="p-8 flex flex-col flex-grow relative z-10">
                            <div className="text-sm font-bold text-brand-blue-main mb-4 uppercase tracking-wider bg-brand-blue-main/10 px-3 py-1 rounded-full inline-block self-start">
                              {new Date(item.publishedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </div>
                            <h3 className="font-heading-primary text-2xl text-gray-900 mb-4 group-hover:text-brand-blue-main line-clamp-2 leading-snug transition-colors">{item.Judul}</h3>
                            <p className="font-body-extended text-gray-600 line-clamp-3 leading-relaxed text-base mb-6">{excerpt}</p>
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
          )}
        </div>
      </section>
    </div>
  );
}
