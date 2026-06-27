import { Head, Link } from '@inertiajs/react';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';

export default function News() {
    return (
        <>
            <Head title="Berita & Aktivitas - Modern Academy" />
            <div className="min-h-screen bg-slate-50">
                <Header />

                {/* Hero Header */}
                <header className="relative py-24 bg-[#0F2A47] overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img
                            src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920"
                            alt="School Activity"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#DC143C]/20 text-red-300 border border-[#DC143C]/30 text-sm font-bold tracking-widest uppercase mb-6">
                            Kabar Terkini
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Berita & Aktivitas
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Ikuti perkembangan terbaru, prestasi siswa, dan berbagai kegiatan edukatif yang berlangsung di lingkungan Modern Academy.
                        </p>
                    </div>
                </header>

                {/* Filter Section */}
                <section className="py-12 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex flex-wrap gap-2">
                                <button className="px-6 py-2.5 bg-[#1F5A96] text-white rounded-full font-semibold transition-all">
                                    Semua
                                </button>
                                <button className="px-6 py-2.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full font-semibold transition-all">
                                    Akademik
                                </button>
                                <button className="px-6 py-2.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full font-semibold transition-all">
                                    Prestasi
                                </button>
                                <button className="px-6 py-2.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full font-semibold transition-all">
                                    Ekstrakurikuler
                                </button>
                                <button className="px-6 py-2.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full font-semibold transition-all">
                                    Event
                                </button>
                            </div>
                            <div className="relative w-full md:w-80">
                                <input
                                    type="text"
                                    placeholder="Cari berita..."
                                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1F5A96] transition-all pl-12"
                                />
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">🔍</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* News Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Featured News */}
                            <div className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-100 shadow-xl">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/15090690/pexels-photo-15090690.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="Featured News"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8 lg:p-12">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="px-4 py-1 bg-red-100 text-[#DC143C] rounded-full text-sm font-bold uppercase tracking-wider">
                                            Prestasi
                                        </span>
                                        <span className="text-slate-400 flex items-center gap-2 text-sm">
                                            📅 24 Oktober 2024
                                        </span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A47] mb-6 group-hover:text-[#1F5A96] transition-colors">
                                        Siswa Modern Academy Meraih Medali Emas di Olimpiade Sains Nasional
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        Kabar membanggakan datang dari ajang OSN 2024, dimana perwakilan sekolah kami berhasil menyisihkan ratusan peserta dari seluruh Indonesia dalam bidang Fisika dan Matematika...
                                    </p>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 text-[#1F5A96] font-bold text-lg hover:gap-4 transition-all"
                                    >
                                        Baca Selengkapnya <span>→</span>
                                    </Link>
                                </div>
                            </div>

                            {/* News Grid */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* News Card 1 */}
                                <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-lg hover:shadow-xl transition-all">
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                                            className="w-full h-full object-cover"
                                            alt="News 1"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            <span className="text-[#DC143C]">🏷️</span> Event Sekolah
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0F2A47] mb-3">
                                            Pesta Seni Budaya Tahunan: Eksplorasi Kreativitas Tanpa Batas
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-6">
                                            Perayaan budaya yang menampilkan bakat terbaik siswa dalam musik, tari, dan teater tradisional...
                                        </p>
                                        <Link
                                            href="#"
                                            className="text-[#1F5A96] font-bold flex items-center gap-2 hover:text-[#0F2A47] transition-colors"
                                        >
                                            Lanjutkan Membaca <span>→</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* News Card 2 */}
                                <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-lg hover:shadow-xl transition-all">
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                                            className="w-full h-full object-cover"
                                            alt="News 2"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            <span className="text-[#1F5A96]">🏷️</span> Akademik
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0F2A47] mb-3">
                                            Penerapan Kurikulum Merdeka Berbasis Proyek Digital
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-6">
                                            Mengenal lebih jauh bagaimana metode belajar baru di Modern Academy mempersiapkan siswa era digital...
                                        </p>
                                        <Link
                                            href="#"
                                            className="text-[#1F5A96] font-bold flex items-center gap-2 hover:text-[#0F2A47] transition-colors"
                                        >
                                            Lanjutkan Membaca <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-12">
                            {/* Agenda */}
                            <div>
                                <h4 className="text-xl font-bold text-[#0F2A47] mb-6 flex items-center gap-3">
                                    📅 Agenda Mendatang
                                </h4>
                                <div className="space-y-6">
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 w-16 h-20 bg-[#1F5A96] text-white rounded-2xl flex flex-col items-center justify-center">
                                            <span className="text-2xl font-bold">15</span>
                                            <span className="text-xs font-bold uppercase">Nov</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[#0F2A47] font-bold mb-1 hover:text-[#DC143C] transition-colors cursor-pointer">
                                                Parenting Session & Open House
                                            </h5>
                                            <p className="text-slate-500 text-sm">🕐 08:00 - 12:00 WIB</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 w-16 h-20 bg-slate-100 text-[#0F2A47] rounded-2xl flex flex-col items-center justify-center">
                                            <span className="text-2xl font-bold">22</span>
                                            <span className="text-xs font-bold uppercase">Nov</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[#0F2A47] font-bold mb-1 hover:text-[#DC143C] transition-colors cursor-pointer">
                                                Ujian Akhir Semester Ganjil
                                            </h5>
                                            <p className="text-slate-500 text-sm">🕐 Sesuai Jadwal Kelas</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 w-16 h-20 bg-slate-100 text-[#0F2A47] rounded-2xl flex flex-col items-center justify-center">
                                            <span className="text-2xl font-bold">05</span>
                                            <span className="text-xs font-bold uppercase">Des</span>
                                        </div>
                                        <div>
                                            <h5 className="text-[#0F2A47] font-bold mb-1 hover:text-[#DC143C] transition-colors cursor-pointer">
                                                Modern Sports Festival 2024
                                            </h5>
                                            <p className="text-slate-500 text-sm">🕐 Lapangan Utama</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-8 py-4 border-2 border-slate-200 rounded-2xl text-[#0F2A47] font-bold hover:bg-[#0F2A47] hover:text-white transition-all">
                                    Lihat Semua Kalender
                                </button>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-[#0F2A47] rounded-[32px] p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC143C]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <h4 className="text-xl font-bold mb-4 relative z-10">Newsletter</h4>
                                <p className="text-slate-300 text-sm mb-6 relative z-10">
                                    Dapatkan update berita dan informasi terbaru langsung di email Anda.
                                </p>
                                <form className="space-y-4 relative z-10">
                                    <input
                                        type="email"
                                        placeholder="Alamat email Anda"
                                        className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 transition-all"
                                    />
                                    <button
                                        type="button"
                                        className="w-full py-3 bg-[#DC143C] text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg"
                                    >
                                        Berlangganan
                                    </button>
                                </form>
                            </div>

                            {/* Popular Topics */}
                            <div>
                                <h4 className="text-xl font-bold text-[#0F2A47] mb-6">Topik Populer</h4>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="#" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#1F5A96] hover:text-[#1F5A96] transition-all">
                                        #PenerimaanSiswa
                                    </Link>
                                    <Link href="#" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#1F5A96] hover:text-[#1F5A96] transition-all">
                                        #Beasiswa
                                    </Link>
                                    <Link href="#" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#1F5A96] hover:text-[#1F5A96] transition-all">
                                        #DigitalLearning
                                    </Link>
                                    <Link href="#" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#1F5A96] hover:text-[#1F5A96] transition-all">
                                        #JuaraOSN
                                    </Link>
                                    <Link href="#" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#1F5A96] hover:text-[#1F5A96] transition-all">
                                        #SeniBudaya
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-24 bg-slate-100">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="text-center mb-16">
                            <span className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-4 block">
                                Galeri Prestasi
                            </span>
                            <h2 className="text-4xl font-bold text-[#0F2A47]">Momen Kebanggaan Modern Academy</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.pexels.com/photos/1593393/pexels-photo-1593393.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt="Galeri 1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white text-sm font-bold leading-tight">Juara 1 Lomba Debat Nasional 2024</p>
                                </div>
                            </div>
                            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt="Galeri 2"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white text-sm font-bold leading-tight">Tim Basket Modern Academy Menang Telak</p>
                                </div>
                            </div>
                            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt="Galeri 3"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white text-sm font-bold leading-tight">Kolaborasi Digital Project Antar Siswa</p>
                                </div>
                            </div>
                            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.pexels.com/photos/2280523/pexels-photo-2280523.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt="Galeri 4"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white text-sm font-bold leading-tight">Perayaan Kelulusan Siswa Berprestasi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}