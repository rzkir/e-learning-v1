import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';

export default function Welcome() {
    const { auth, currentTeam } = usePage().props;
    const dashboardUrl = currentTeam ? dashboard(currentTeam.slug) : '/';

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-slate-50">
                <Header auth={auth} currentTeam={currentTeam} />

                {/* Hero Section */}
                <header className="relative h-[800px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                            alt="University Campus"
                            className="w-full h-full object-cover scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A47]/90 via-[#0F2A47]/60 to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-6 lg:px-12 relative z-10 text-white max-w-7xl">
                        <div className="max-w-2xl">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DC143C]/20 text-red-300 border border-[#DC143C]/30 text-sm font-bold tracking-widest uppercase mb-6">
                                Tahun Ajaran 2024/2025
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                                Membangun Karakter, <span className="text-[#DC143C]">Mengejar</span> Prestasi Utama
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-200 mb-10 leading-relaxed">
                                Kami menghadirkan lingkungan belajar yang inovatif dan suportif untuk membantu siswa mencapai potensi maksimal mereka melalui kurikulum berstandar internasional.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#"
                                    className="bg-[#DC143C] hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg"
                                >
                                    Daftar Sekarang
                                </Link>
                                <Link
                                    href="#"
                                    className="bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#0F2A47] text-white px-8 py-4 rounded-lg font-bold transition-all border border-white/30"
                                >
                                    Lihat Program Kami
                                </Link>
                            </div>
                            <div className="mt-16 flex items-center gap-6">
                                <div className="flex -space-x-4">
                                    <img src="https://i.pravatar.cc/100?u=1" className="w-12 h-12 rounded-full border-2 border-[#0F2A47]" />
                                    <img src="https://i.pravatar.cc/100?u=2" className="w-12 h-12 rounded-full border-2 border-[#0F2A47]" />
                                    <img src="https://i.pravatar.cc/100?u=3" className="w-12 h-12 rounded-full border-2 border-[#0F2A47]" />
                                    <div className="w-12 h-12 rounded-full bg-[#DC143C] border-2 border-[#0F2A47] flex items-center justify-center text-xs font-bold">+500</div>
                                </div>
                                <p className="text-slate-300 font-medium">
                                    <span className="text-white font-bold">2.5k+</span> Alumni sukses tersebar di seluruh dunia
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Quick Stats Cards */}
                <section className="container mx-auto px-6 lg:px-12 -mt-20 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="bg-[#1F5A96] p-8 text-white flex gap-6 items-start hover:bg-blue-700 transition-colors">
                            <div className="p-3 bg-white/20 rounded-xl">
                                <span className="text-4xl">👥</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Pengajar Expert</h3>
                                <p className="text-blue-100 text-sm opacity-90">Didukung oleh staf pengajar berpengalaman dari lulusan universitas ternama.</p>
                            </div>
                        </div>
                        <div className="bg-[#DC143C] p-8 text-white flex gap-6 items-start hover:bg-red-600 transition-colors">
                            <div className="p-3 bg-white/20 rounded-xl">
                                <span className="text-4xl">🏆</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Beasiswa Unggulan</h3>
                                <p className="text-red-100 text-sm opacity-90">Tersedia program bantuan pendidikan bagi siswa berprestasi di bidang akademik.</p>
                            </div>
                        </div>
                        <div className="bg-[#0F2A47] p-8 text-white flex gap-6 items-start hover:bg-slate-800 transition-colors">
                            <div className="p-3 bg-white/20 rounded-xl">
                                <span className="text-4xl">🖥️</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Fasilitas Modern</h3>
                                <p className="text-slate-300 text-sm opacity-90">Lingkungan belajar yang lengkap dengan teknologi terkini dan lab standar tinggi.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-24 container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544717297-fa154daaf76e?q=80&w=2070&auto=format&fit=crop"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-2 bg-red-100 rounded-lg text-[#DC143C]">
                                        <span className="text-2xl">✓</span>
                                    </div>
                                    <span className="text-4xl font-bold text-[#0F2A47]">98%</span>
                                </div>
                                <p className="text-slate-500 font-medium">Tingkat Kelulusan UN</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-4 block">
                                Selamat Datang di Modern Academy
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2A47] leading-tight mb-8">
                                Kami Membentuk Pemimpin Masa Depan dengan Nilai & Etika
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Berdiri sejak tahun 1998, Modern Academy telah menjadi institusi pendidikan pilihan yang mengedepankan keseimbangan antara kecerdasan intelektual, emosional, dan spiritual.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-[#0F2A47] font-semibold text-lg">
                                    <span className="text-[#DC143C]">✓</span> Kurikulum Merdeka Terintegrasi
                                </li>
                                <li className="flex items-center gap-3 text-[#0F2A47] font-semibold text-lg">
                                    <span className="text-[#DC143C]">✓</span> Pengembangan Karakter & Soft Skills
                                </li>
                                <li className="flex items-center gap-3 text-[#0F2A47] font-semibold text-lg">
                                    <span className="text-[#DC143C]">✓</span> Program Ekstrakurikuler Berprestasi
                                </li>
                            </ul>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 bg-[#0F2A47] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#1F5A96] transition-colors"
                            >
                                Pelajari Selengkapnya <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="py-24 bg-slate-100">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center mb-16">
                        <span className="text-[#1F5A96] font-bold uppercase tracking-widest text-sm mb-4 block">
                            Program Akademik
                        </span>
                        <h2 className="text-4xl font-bold text-[#0F2A47]">Pilihan Pendidikan Terbaik</h2>
                    </div>
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Program 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:translate-y-[-5px] transition-transform group">
                            <div className="w-16 h-16 bg-blue-50 text-[#1F5A96] flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#1F5A96] group-hover:text-white transition-colors">
                                <span className="text-3xl">🔬</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F2A47] mb-4">Sains & Teknologi</h3>
                            <p className="text-slate-600 mb-6">
                                Fokus pada pengembangan pemikiran kritis melalui observasi ilmiah dan teknologi informasi terbaru.
                            </p>
                            <Link href="#" className="text-[#1F5A96] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Detail Program <span>→</span>
                            </Link>
                        </div>

                        {/* Program 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:translate-y-[-5px] transition-transform group">
                            <div className="w-16 h-16 bg-red-50 text-[#DC143C] flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#DC143C] group-hover:text-white transition-colors">
                                <span className="text-3xl">📚</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F2A47] mb-4">Sosial & Humaniora</h3>
                            <p className="text-slate-600 mb-6">
                                Membangun pemahaman mendalam tentang masyarakat, sejarah, dan kemampuan komunikasi yang efektif.
                            </p>
                            <Link href="#" className="text-[#1F5A96] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Detail Program <span>→</span>
                            </Link>
                        </div>

                        {/* Program 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:translate-y-[-5px] transition-transform group">
                            <div className="w-16 h-16 bg-blue-50 text-[#1F5A96] flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#1F5A96] group-hover:text-white transition-colors">
                                <span className="text-3xl">🎨</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F2A47] mb-4">Seni & Desain Kreatif</h3>
                            <p className="text-slate-600 mb-6">
                                Mengasah bakat artistik dan kreativitas siswa dalam berbagai disiplin seni visual dan pertunjukan.
                            </p>
                            <Link href="#" className="text-[#1F5A96] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Detail Program <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Facilities */}
                <section className="py-24 container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
                        <div className="lg:w-2/3">
                            <span className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-4 block">
                                Fasilitas Kampus
                            </span>
                            <h2 className="text-4xl font-bold text-[#0F2A47]">
                                Lingkungan Belajar yang Menginspirasi
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 border-2 border-slate-200 rounded-full flex items-center justify-center hover:border-[#1F5A96] text-slate-400 hover:text-[#1F5A96] transition-all">
                                ←
                            </button>
                            <button className="w-12 h-12 bg-[#1F5A96] text-white rounded-full flex items-center justify-center hover:bg-[#0F2A47] transition-all">
                                →
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="group relative h-80 overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/90 to-transparent flex items-end p-6">
                                <h4 className="text-white font-bold text-xl">Perpustakaan Digital</h4>
                            </div>
                        </div>
                        <div className="group relative h-80 overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/90 to-transparent flex items-end p-6">
                                <h4 className="text-white font-bold text-xl">Laboratorium Terpadu</h4>
                            </div>
                        </div>
                        <div className="group relative h-80 overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1541829070764-84a7d30dee63?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/90 to-transparent flex items-end p-6">
                                <h4 className="text-white font-bold text-xl">Auditorium Utama</h4>
                            </div>
                        </div>
                        <div className="group relative h-80 overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/90 to-transparent flex items-end p-6">
                                <h4 className="text-white font-bold text-xl">Fasilitas Olahraga</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Teachers */}
                <section className="py-24 bg-[#0F2A47] text-white">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="text-center mb-16">
                            <span className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-4 block">
                                Tim Pendidik
                            </span>
                            <h2 className="text-4xl font-bold">Bertemu Dengan Guru Kami</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Teacher 1 */}
                            <div className="group bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-center">
                                <div className="w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-[#DC143C]/20 group-hover:border-[#DC143C] transition-all">
                                    <img src="https://i.pravatar.cc/200?u=teach1" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-xl font-bold mb-1">Dr. Ahmad Subarjo</h4>
                                <p className="text-[#DC143C] font-medium text-sm uppercase tracking-wide">Kepala Sekolah</p>
                                <div className="mt-4 flex justify-center gap-3 text-white/40 group-hover:text-white transition-all">
                                    <span className="text-xl cursor-pointer hover:text-[#1F5A96]">in</span>
                                    <span className="text-xl cursor-pointer hover:text-[#1F5A96]">𝕏</span>
                                </div>
                            </div>

                            {/* Teacher 2 */}
                            <div className="group bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-center">
                                <div className="w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-[#1F5A96]/20 group-hover:border-[#1F5A96] transition-all">
                                    <img src="https://i.pravatar.cc/200?u=teach2" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-xl font-bold mb-1">Sarah Wijaya, M.Sc</h4>
                                <p className="text-[#1F5A96] font-medium text-sm uppercase tracking-wide">Waka Kurikulum</p>
                                <div className="mt-4 flex justify-center gap-3 text-white/40 group-hover:text-white transition-all">
                                    <span className="text-xl cursor-pointer hover:text-[#1F5A96]">in</span>
                                    <span className="text-xl cursor-pointer hover:text-[#1F5A96]">𝕏</span>
                                </div>
                            </div>

                            {/* Teacher 3 */}
                            <div className="group bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-center">
                                <div className="w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-[#DC143C]/20 group-hover:border-[#DC143C] transition-all">
                                    <img src="https://i.pravatar.cc/200?u=teach3" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-xl font-bold mb-1">Robert Chen, Ph.D</h4>
                                <p className="text-[#DC143C] font-medium text-sm uppercase tracking-wide">Koordinator Sains</p>
                                <div className="mt-4 flex justify-center gap-3 text-white/40 group-hover:text-white transition-all">
                                    <span className="text-xl cursor-pointer hover:text-[#1F5A96]">in</span>
                                    <span className="text-xl cursor-pointer hover:text-[#1F5A96]">𝕏</span>
                                </div>
                            </div>

                            {/* Teacher 4 */}
                            <div className="group bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-center">
                                <div className="w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-[#1F5A96]/20 group-hover:border-[#1F5A96] transition-all">
                                    <img src="https://i.pravatar.cc/200?u=teach4" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-xl font-bold mb-1">Linda Kusuma, B.A</h4>
                                <p className="text-[#1F5A96] font-medium text-sm uppercase tracking-wide">Guru Seni & Budaya</p>
                                <div className="mt-4 flex justify-center gap-3 text-white/40 group-hover:text-white transition-all">
                                    <span className="text-xl cursor-pointer hover:text-[#1F5A96]">in</span>
                                    <span className="text-xl cursor-pointer hover:text-[#1F5A96]">𝕏</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="bg-slate-50 p-12 rounded-[40px] relative">
                                <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#DC143C] text-white flex items-center justify-center rounded-full text-4xl">
                                    "
                                </div>
                                <p className="text-2xl text-[#0F2A47] italic leading-relaxed mb-8">
                                    "Sekolah ini bukan hanya tempat belajar materi, tapi tempat saya menemukan jati diri dan potensi terbaik saya melalui dukungan para guru yang luar biasa."
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src="https://i.pravatar.cc/100?u=student1" className="w-16 h-16 rounded-full border-2 border-white shadow-md" />
                                    <div>
                                        <h4 className="text-[#0F2A47] font-bold text-lg">Andini Putri</h4>
                                        <p className="text-slate-500 font-medium">Alumni 2022 - Mahasiswa Kedokteran UI</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="text-[#1F5A96] font-bold uppercase tracking-widest text-sm mb-4 block">
                                    Apa Kata Mereka?
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2A47] leading-tight mb-8">
                                    Membangun Komunitas Belajar yang Positif
                                </h2>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    Kami bangga melihat lulusan kami tumbuh menjadi individu yang sukses dan berkontribusi positif di masyarakat.
                                </p>
                                <div className="flex gap-12">
                                    <div className="text-center">
                                        <h5 className="text-4xl font-bold text-[#DC143C]">15k+</h5>
                                        <p className="text-slate-500 font-medium">Alumni</p>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="text-4xl font-bold text-[#1F5A96]">120+</h5>
                                        <p className="text-slate-500 font-medium">Guru Staf</p>
                                    </div>
                                    <div className="text-center">
                                        <h5 className="text-4xl font-bold text-[#0F2A47]">45+</h5>
                                        <p className="text-slate-500 font-medium">Penghargaan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="bg-gradient-to-r from-[#1F5A96] to-[#0F2A47] rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden text-white">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DC143C]/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
                            <div className="relative z-10">
                                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                    Siap Bergabung dengan Kami?
                                </h2>
                                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto opacity-90">
                                    Dapatkan pengalaman belajar terbaik dan wujudkan cita-citamu bersama Modern Academy. Pendaftaran gelombang pertama dibuka sekarang!
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="#"
                                        className="bg-white text-[#0F2A47] hover:bg-[#DC143C] hover:text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl"
                                    >
                                        Daftar Online Sekarang
                                    </Link>
                                    <Link
                                        href="#"
                                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0F2A47] px-10 py-4 rounded-xl font-bold transition-all"
                                    >
                                        Hubungi Kami
                                    </Link>
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
