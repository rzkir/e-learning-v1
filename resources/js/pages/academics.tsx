import { Head, Link } from '@inertiajs/react';
import { home } from '@/routes';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';

export default function Academics() {
    return (
        <>
            <Head title="Akademik - Modern Academy" />
            <div className="min-h-screen bg-slate-50">
                <Header />

                {/* Header Section */}
                <header className="relative py-24 bg-[#0F2A47] overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img
                            src="https://images.pexels.com/photos/15291733/pexels-photo-15291733.jpeg?auto=compress&cs=tinysrgb&w=1920"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-12 relative z-10 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#DC143C]/20 text-red-300 border border-[#DC143C]/30 text-sm font-bold tracking-widest uppercase mb-6">
                            Unggulan & Prestasi
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Program Akademik
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Kurikulum berstandar internasional yang dirancang untuk membekali siswa dengan kompetensi global, karakter yang kuat, dan kecintaan pada pembelajaran sepanjang hayat.
                        </p>
                    </div>
                </header>

                {/* Programs Section */}
                <section className="py-24 container mx-auto px-12 max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-4 block">Pilihan Jurusan</span>
                        <h2 className="text-4xl font-bold text-[#0F2A47]">Fokus Studi Masa Depan</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Program 1 */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform group">
                            <div className="w-20 h-20 bg-blue-50 text-[#1F5A96] flex items-center justify-center rounded-2xl mb-8 transition-colors group-hover:bg-[#1F5A96] group-hover:text-white">
                                🔬
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F2A47] mb-4">Sains & Teknologi</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Mempersiapkan inovator masa depan dengan dasar matematika dan ilmu pengetahuan alam yang kuat, dilengkapi dengan literasi teknologi mutakhir.
                            </p>
                            <ul className="space-y-3 mb-10">
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <span className="text-[#1F5A96]">✓</span> Robotik & Coding
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <span className="text-[#1F5A96]">✓</span> Advanced Physics & Biology
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <span className="text-[#1F5A96]">✓</span> Laboratory Research
                                </li>
                            </ul>
                            <Link href="#" className="inline-flex items-center gap-2 font-bold text-[#1F5A96] hover:gap-4 transition-all">
                                Detail Kurikulum <span>→</span>
                            </Link>
                        </div>

                        {/* Program 2 */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform group">
                            <div className="w-20 h-20 bg-red-50 text-[#DC143C] flex items-center justify-center rounded-2xl mb-8 transition-colors group-hover:bg-[#DC143C] group-hover:text-white">
                                👥
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F2A47] mb-4">Sosial & Humaniora</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Membangun pemimpin masa depan yang memiliki pemahaman mendalam tentang dinamika sosial, ekonomi global, dan empati kemanusiaan.
                            </p>
                            <ul className="space-y-3 mb-10">
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <span className="text-[#DC143C]">✓</span> World History & Sociology
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <span className="text-[#DC143C]">✓</span> Business Management
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <span className="text-[#DC143C]">✓</span> Public Speaking & Law
                                </li>
                            </ul>
                            <Link href="#" className="inline-flex items-center gap-2 font-bold text-[#DC143C] hover:gap-4 transition-all">
                                Detail Kurikulum <span>→</span>
                            </Link>
                        </div>

                        {/* Program 3 */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 hover:-translate-y-1 transition-transform group">
                            <div className="w-20 h-20 bg-blue-50 text-[#1F5A96] flex items-center justify-center rounded-2xl mb-8 transition-colors group-hover:bg-[#1F5A96] group-hover:text-white">
                                🎨
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F2A47] mb-4">Seni & Desain</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Mengasah kreativitas tanpa batas melalui eksplorasi berbagai medium seni rupa, desain grafis, dan seni pertunjukan modern.
                            </p>
                            <ul className="space-y-3 mb-10">
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <span className="text-[#1F5A96]">✓</span> Digital Illustration
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <span className="text-[#1F5A96]">✓</span> Performance Arts
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <span className="text-[#1F5A96]">✓</span> Portfolio Development
                                </li>
                            </ul>
                            <Link href="#" className="inline-flex items-center gap-2 font-bold text-[#1F5A96] hover:gap-4 transition-all">
                                Detail Kurikulum <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Learning Methods */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-12 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-[#1F5A96] font-bold uppercase tracking-widest text-sm mb-4 block">
                                    Metodologi Pembelajaran
                                </span>
                                <h2 className="text-4xl font-bold text-[#0F2A47] mb-8">
                                    Cara Kami Mengajar Melampaui Batas Kelas
                                </h2>
                                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                                    Modern Academy menerapkan <strong>Metode 4C (Critical Thinking, Creativity, Collaboration, Communication)</strong> yang terintegrasi di setiap mata pelajaran. Kami percaya bahwa setiap siswa adalah subjek aktif dalam pembelajaran mereka sendiri.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl text-[#DC143C]">
                                            🧠
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0F2A47] mb-1">Problem-Based</h4>
                                            <p className="text-sm text-slate-500">Belajar melalui penyelesaian kasus nyata.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl text-[#1F5A96]">
                                            📐
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0F2A47] mb-1">Hybrid Learning</h4>
                                            <p className="text-sm text-slate-500">Kolaborasi digital dan interaksi fisik.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl text-[#DC143C]">
                                            🌍
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0F2A47] mb-1">Bilingual</h4>
                                            <p className="text-sm text-slate-500">Bahasa Indonesia dan Inggris sehari-hari.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl text-[#1F5A96]">
                                            🧪
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#0F2A47] mb-1">Research-Rich</h4>
                                            <p className="text-sm text-slate-500">Fokus pada data dan pembuktian ilmiah.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.pexels.com/photos/15090690/pexels-photo-15090690.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="Teaching Method"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-[#DC143C] p-10 rounded-[30px] shadow-2xl text-white max-w-xs">
                                    <span className="text-4xl mb-4 opacity-30 block">"</span>
                                    <p className="text-lg font-medium italic mb-6">
                                        "Belajar bukan sekadar menghafal, tapi memahami mengapa dan bagaimana sesuatu terjadi."
                                    </p>
                                    <div className="h-1 w-12 bg-white/40 mb-4"></div>
                                    <span className="font-bold block">Dr. Ahmad Subarjo</span>
                                    <span className="text-sm opacity-80">Kepala Sekolah</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-24 bg-[#0F2A47] text-white">
                    <div className="container mx-auto px-12 max-w-7xl">
                        <div className="text-center mb-16">
                            <span className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-4 block">
                                Capaian & Statistik
                            </span>
                            <h2 className="text-4xl font-bold">Standar Keberhasilan Siswa Kami</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center">
                                <h5 className="text-5xl font-bold text-[#DC143C] mb-3">98%</h5>
                                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                                    Lolos PTN & Univ. Luar Negeri
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center">
                                <h5 className="text-5xl font-bold text-[#DC143C] mb-3">8.5</h5>
                                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                                    Rata-Rata Skor IELTS
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center">
                                <h5 className="text-5xl font-bold text-[#DC143C] mb-3">120+</h5>
                                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                                    Medali Olimpiade Per Tahun
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center">
                                <h5 className="text-5xl font-bold text-[#DC143C] mb-3">450+</h5>
                                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                                    Proyek Inovasi Siswa
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-[40px] p-12 border border-white/10">
                            <div className="grid lg:grid-cols-3 gap-12">
                                <div className="lg:col-span-1">
                                    <h3 className="text-3xl font-bold mb-6">Target Pembelajaran</h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Setiap lulusan Modern Academy diproyeksikan memiliki kualifikasi yang diakui secara global melalui sertifikasi internal dan eksternal.
                                    </p>
                                </div>
                                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="flex gap-4">
                                        <span className="text-[#DC143C] text-2xl shrink-0">⭐</span>
                                        <div>
                                            <h4 className="font-bold mb-2">Character Excellence</h4>
                                            <p className="text-sm text-slate-400">Integritas, disiplin, dan etika kerja yang tinggi dalam setiap tindakan.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[#DC143C] text-2xl shrink-0">⭐</span>
                                        <div>
                                            <h4 className="font-bold mb-2">Global Leadership</h4>
                                            <p className="text-sm text-slate-400">Kemampuan memimpin dan beradaptasi dalam lingkungan multikultural.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[#DC143C] text-2xl shrink-0">⭐</span>
                                        <div>
                                            <h4 className="font-bold mb-2">Digital Fluency</h4>
                                            <p className="text-sm text-slate-400">Kecakapan menggunakan alat digital untuk produktivitas dan inovasi.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[#DC143C] text-2xl shrink-0">⭐</span>
                                        <div>
                                            <h4 className="font-bold mb-2">Critical Literacy</h4>
                                            <p className="text-sm text-slate-400">Kemampuan menganalisis informasi secara kritis dan objektif.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* News Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-12 max-w-7xl">
                        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
                            <div className="lg:w-2/3">
                                <span className="text-[#1F5A96] font-bold uppercase tracking-widest text-sm mb-4 block">
                                    Highlights Akademik
                                </span>
                                <h2 className="text-4xl font-bold text-[#0F2A47]">Berita & Prestasi Terbaru</h2>
                            </div>
                            <Link href="#" className="text-[#1F5A96] font-bold border-b-2 border-[#1F5A96] pb-1 hover:text-[#0F2A47] hover:border-[#0F2A47] transition-all">
                                Lihat Semua Berita
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* News 1 */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/1593393/pexels-photo-1593393.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="News 1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-[#DC143C] uppercase tracking-wider">Prestasi</span>
                                    <h4 className="text-xl font-bold text-[#0F2A47] mt-2 mb-4">
                                        Tim Robotik Meraih Emas di World Robot Olympiad 2024
                                    </h4>
                                    <p className="text-slate-500 text-sm mb-6">
                                        Siswa kami berhasil mengalahkan 45 negara dalam kategori Innovative Solution...
                                    </p>
                                    <Link href="#" className="text-[#1F5A96] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                        Baca Selengkapnya <span>→</span>
                                    </Link>
                                </div>
                            </div>

                            {/* News 2 */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="News 2"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-[#1F5A96] uppercase tracking-wider">Kegiatan</span>
                                    <h4 className="text-xl font-bold text-[#0F2A47] mt-2 mb-4">
                                        Seminar Karier Global: Menjelajahi Universitas Top Dunia
                                    </h4>
                                    <p className="text-slate-500 text-sm mb-6">
                                        Menghadirkan pembicara dari Ivy League dan Russell Group untuk membimbing siswa...
                                    </p>
                                    <Link href="#" className="text-[#1F5A96] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                        Baca Selengkapnya <span>→</span>
                                    </Link>
                                </div>
                            </div>

                            {/* News 3 */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="News 3"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-[#DC143C] uppercase tracking-wider">Kurikulum</span>
                                    <h4 className="text-xl font-bold text-[#0F2A47] mt-2 mb-4">
                                        Peluncuran Program Lab AI Terbaru Berbasis NVIDIA
                                    </h4>
                                    <p className="text-slate-500 text-sm mb-6">
                                        Fasilitas baru untuk mendukung pembelajaran Deep Learning dan Data Science...
                                    </p>
                                    <Link href="#" className="text-[#1F5A96] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                        Baca Selengkapnya <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-[#DC143C]">
                    <div className="container mx-auto px-12 max-w-7xl text-center text-white">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                            Mulailah Perjalanan Akademikmu Bersama Kami
                        </h2>
                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                            Jangan lewatkan kesempatan untuk bergabung dengan komunitas pembelajar terbaik di Modern Academy.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="#"
                                className="bg-white text-[#DC143C] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#0F2A47] hover:text-white transition-all shadow-xl"
                            >
                                Daftar Sekarang
                            </Link>
                            <Link
                                href="#"
                                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#DC143C] transition-all"
                            >
                                Unduh Brosur Kurikulum
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
