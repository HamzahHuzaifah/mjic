import Image from "next/image";
import Link from "next/link";

// Tipe data berdasarkan respons dari Strapi v5
interface Berita {
  id: number;
  documentId?: string;
  Judul: string;
  Slug: string;
  Konten: string;
  publishedAt: string;
  Foto_Utama?: {
    id: number;
    url: string;
    alternativeText?: string;
  };
}

async function getBeritas(): Promise<Berita[]> {
  try {
    // Fetch data dari endpoint Strapi
    const res = await fetch('http://localhost:1337/api/beritas?populate=*', {
      // Gunakan cache 'no-store' agar selalu memuat data terbaru (bisa disesuaikan ke revalidate nantinya)
      cache: 'no-store' 
    });
    
    if (!res.ok) {
      throw new Error('Gagal mengambil data dari API Strapi');
    }
    
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching beritas:", error);
    return [];
  }
}

export default async function BeritaPage() {
  const beritas = await getBeritas();

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      
      <div className="text-center mb-20">
        <h1 className="font-heading-primary text-4xl md:text-5xl text-brand-blue-main mb-6 drop-shadow-sm">
          Berita & Pengumuman
        </h1>
        <p className="font-body-extended text-lg text-gray-600 max-w-3xl mx-auto">
          Dapatkan informasi terbaru seputar kegiatan akademik, prestasi membanggakan, dan acara menarik di lingkungan Madrasah Jakarta Islamic Centre.
        </p>
      </div>

      {beritas.length === 0 ? (
        <div className="text-center text-gray-500 py-10 font-body-extended bg-white rounded-3xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
          <p className="py-8">Belum ada berita yang diterbitkan saat ini.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {beritas.map((item) => {
            // Menyusun URL gambar penuh karena Strapi mengembalikan path relatif
            const imageUrl = item.Foto_Utama?.url 
              ? `http://localhost:1337${item.Foto_Utama.url}`
              : null;
              
            // Membuat cuplikan konten (excerpt)
            const excerpt = item.Konten 
              ? item.Konten.substring(0, 130) + '...'
              : 'Tidak ada deskripsi lanjutan.';
              
            // Memformat tanggal publikasi
            const date = new Date(item.publishedAt || Date.now()).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            });

            return (
              <div 
                key={item.id} 
                className="group bg-white rounded-3xl overflow-hidden flex flex-col h-full border border-gray-100
                           shadow-lg transition-all duration-300 hover:-translate-y-3
                           hover:shadow-[0_20px_40px_-15px_rgba(72,179,255,0.5)]"
              >
                {/* Bagian Gambar */}
                <div className="h-56 w-full relative overflow-hidden bg-gradient-to-br from-brand-blue-main/20 to-brand-blue-grad/20">
                  {imageUrl ? (
                    <>
                      <Image 
                        src={imageUrl}
                        alt={item.Foto_Utama?.alternativeText || item.Judul}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 z-0"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-main to-brand-blue-grad opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  )}
                  
                  {/* Badge Label (Statis untuk saat ini) */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-brand-blue-main text-xs font-bold px-4 py-1.5 rounded-full font-body-extended shadow-sm z-10">
                    Berita
                  </div>
                </div>

                {/* Konten Kartu */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-brand-red-main text-sm font-semibold mb-3 font-body-extended">
                    {date}
                  </div>
                  <h3 className="font-heading-primary text-2xl text-gray-900 mb-4 group-hover:text-brand-blue-main transition-colors duration-300 leading-tight line-clamp-2">
                    {item.Judul}
                  </h3>
                  <p className="font-body-extended text-gray-600 flex-grow leading-relaxed line-clamp-3">
                    {excerpt}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link href={`/berita/${item.Slug}`} className="text-brand-blue-main font-bold font-body-extended inline-flex items-center group-hover:text-brand-blue-grad transition-colors">
                      Baca Selengkapnya
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
