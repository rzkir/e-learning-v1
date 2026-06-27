import { Head, Link } from '@inertiajs/react';
import { home } from '@/routes';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';

export default function About() {
    return (
        <>
            <Head title="Tentang Kami - Modern Academy" />
            <div className="min-h-screen bg-slate-50">
                <Header />

                {/* Hero Section */}
                <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920"
                            alt="Modern Academy Building"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0F2A47]/80 backdrop-blur-[2px]"></div>
                    </div>
                    <div className="relative z-10 text-center px-6 max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#DC143C]/20 text-red-300 border border-[#DC143C]/30 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                            Profil Sekolah
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Tentang Kami</h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            Membangun pondasi keunggulan akademik dan integritas karakter sejak tahun 1998 untuk melahirkan pemimpin masa depan dunia.
                        </p>
                    </div>
                </section>

                {/* History Timeline */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A47]">Perjalanan Kami</h2>
                            <div className="w-20 h-1 bg-[#DC143C] mx-auto mt-4"></div>
                        </div>
                        <div className="relative">
                            <div className="space-y-12">
                                {/* 1998 */}
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="md:w-32 flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-[#0F2A47] text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg border-4 border-white">
                                            1998
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-slate-50 p-8 rounded-2xl shadow-sm border-l-4 border-[#0F2A47]">
                                        <h3 className="text-xl font-bold text-[#0F2A47] mb-2">Peletakan Batu Pertama</h3>
                                        <p className="text-slate-600">
                                            Modern Academy didirikan dengan visi untuk memberikan pendidikan berstandar global yang dapat diakses oleh talenta terbaik Indonesia.
                                        </p>
                                    </div>
                                </div>

                                {/* 2005 */}
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="md:w-32 flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-[#DC143C] text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg border-4 border-white">
                                            2005
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-slate-50 p-8 rounded-2xl shadow-sm border-l-4 border-[#DC143C]">
                                        <h3 className="text-xl font-bold text-[#0F2A47] mb-2">Akreditasi Internasional</h3>
                                        <p className="text-slate-600">
                                            Meraih sertifikasi Cambridge International yang pertama, memperluas cakrawala akademik siswa ke kancah global.
                                        </p>
                                    </div>
                                </div>

                                {/* 2018 */}
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="md:w-32 flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-[#1F5A96] text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg border-4 border-white">
                                            2018
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-slate-50 p-8 rounded-2xl shadow-sm border-l-4 border-[#1F5A96]">
                                        <h3 className="text-xl font-bold text-[#0F2A47] mb-2">Kampus Digital 4.0</h3>
                                        <p className="text-slate-600">
                                            Transformasi total fasilitas menjadi Smart Campus dengan integrasi teknologi dalam setiap proses belajar mengajar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-24 bg-[#0F2A47] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC143C]/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 bg-[#DC143C] rounded-2xl flex items-center justify-center text-3xl">
                                        👁️
                                    </div>
                                    <h2 className="text-3xl font-bold">Visi Kami</h2>
                                </div>
                                <p className="text-xl text-slate-300 leading-relaxed italic">
                                    "Menjadi institusi pendidikan terkemuka di Asia yang melahirkan individu-individu inovatif, kompetitif, dan berakhlak mulia melalui ekosistem pembelajaran modern."
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 bg-[#1F5A96] rounded-2xl flex items-center justify-center text-3xl">
                                        🎯
                                    </div>
                                    <h2 className="text-3xl font-bold">Misi Kami</h2>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="text-[#DC143C] text-2xl shrink-0">✓</span>
                                        <span className="text-slate-200">Menyelenggarakan pendidikan berkualitas dengan standar kurikulum internasional yang adaptif.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-[#DC143C] text-2xl shrink-0">✓</span>
                                        <span className="text-slate-200">Mengembangkan potensi kepemimpinan dan karakter integritas pada setiap siswa.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-[#DC143C] text-2xl shrink-0">✓</span>
                                        <span className="text-slate-200">Membangun kolaborasi strategis dengan institusi global dan industri.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A47]">Nilai-Nilai Dasar</h2>
                            <p className="text-slate-500 mt-4">Pilar utama yang menjadi nafas kehidupan di Modern Academy</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            <div className="p-8 bg-slate-50 rounded-2xl text-center group hover:bg-[#0F2A47] hover:text-white transition-all duration-300">
                                <div className="w-14 h-14 bg-blue-100 text-[#1F5A96] rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-[#DC143C] group-hover:text-white">
                                    🛡️
                                </div>
                                <h4 className="font-bold mb-2">Integritas</h4>
                                <p className="text-sm text-slate-500 group-hover:text-slate-300">Kejujuran dalam bertindak</p>
                            </div>
                            <div className="p-8 bg-slate-50 rounded-2xl text-center group hover:bg-[#0F2A47] hover:text-white transition-all duration-300">
                                <div className="w-14 h-14 bg-red-100 text-[#DC143C] rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-[#DC143C] group-hover:text-white">
                                    💡
                                </div>
                                <h4 className="font-bold mb-2">Inovasi</h4>
                                <p className="text-sm text-slate-500 group-hover:text-slate-300">Selalu mencari cara baru</p>
                            </div>
                            <div className="p-8 bg-slate-50 rounded-2xl text-center group hover:bg-[#0F2A47] hover:text-white transition-all duration-300">
                                <div className="w-14 h-14 bg-blue-100 text-[#1F5A96] rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-[#DC143C] group-hover:text-white">
                                    👥
                                </div>
                                <h4 className="font-bold mb-2">Kolaborasi</h4>
                                <p className="text-sm text-slate-500 group-hover:text-slate-300">Bekerja sama untuk tujuan</p>
                            </div>
                            <div className="p-8 bg-slate-50 rounded-2xl text-center group hover:bg-[#0F2A47] hover:text-white transition-all duration-300">
                                <div className="w-14 h-14 bg-red-100 text-[#DC143C] rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-[#DC143C] group-hover:text-white">
                                    💎
                                </div>
                                <h4 className="font-bold mb-2">Keunggulan</h4>
                                <p className="text-sm text-slate-500 group-hover:text-slate-300">Memberikan yang terbaik</p>
                            </div>
                            <div className="p-8 bg-slate-50 rounded-2xl text-center group hover:bg-[#0F2A47] hover:text-white transition-all duration-300">
                                <div className="w-14 h-14 bg-blue-100 text-[#1F5A96] rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-[#DC143C] group-hover:text-white">
                                    ❤️
                                </div>
                                <h4 className="font-bold mb-2">Empati</h4>
                                <p className="text-sm text-slate-500 group-hover:text-slate-300">Peduli sesama makhluk</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="py-24 bg-slate-100">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A47]">Kepemimpinan Sekolah</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl flex flex-col items-center text-center border border-slate-200">
                                <div className="w-48 h-48 rounded-[2rem] overflow-hidden mb-8 border-4 border-[#DC143C]/20">
                                    <img
                                        src="https://i.pravatar.cc/300?u=principal"
                                        className="w-full h-full object-cover"
                                        alt="Kepala Sekolah"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0F2A47] mb-2">Dr. Ahmad Subarjo</h3>
                                <p className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-6">Kepala Sekolah</p>
                                <p className="text-slate-500 italic mb-8 leading-relaxed">
                                    "Pendidikan adalah alat paling kuat yang bisa kita gunakan untuk mengubah dunia. Di Modern Academy, kita menempa agen perubahan tersebut."
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0F2A47] hover:bg-[#0F2A47] hover:text-white transition-all">
                                        in
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0F2A47] hover:bg-[#0F2A47] hover:text-white transition-all">
                                        ✉️
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl flex flex-col items-center text-center border border-slate-200">
                                <div className="w-48 h-48 rounded-[2rem] overflow-hidden mb-8 border-4 border-[#1F5A96]/20">
                                    <img
                                        src="https://i.pravatar.cc/300?u=vice"
                                        className="w-full h-full object-cover"
                                        alt="Wakil Kepala Sekolah"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0F2A47] mb-2">Sarah Wijaya, M.Sc</h3>
                                <p className="text-[#1F5A96] font-bold uppercase tracking-widest text-sm mb-6">Wakil Kepala Sekolah</p>
                                <p className="text-slate-500 italic mb-8 leading-relaxed">
                                    "Fokus kami bukan hanya pada nilai akademik, tapi pada bagaimana siswa kami tumbuh sebagai pribadi yang berkarakter kuat."
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0F2A47] hover:bg-[#0F2A47] hover:text-white transition-all">
                                        in
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0F2A47] hover:bg-[#0F2A47] hover:text-white transition-all">
                                        ✉️
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accreditation & Certification */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-32 opacity-60 hover:opacity-100 transition-all">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-5xl text-[#0F2A47]">📜</span>
                                <span className="font-bold text-[#0F2A47]">Akreditasi A</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-5xl text-[#0F2A47]">🎓</span>
                                <span className="font-bold text-[#0F2A47]">Cambridge Partner</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-5xl text-[#0F2A47]">🏆</span>
                                <span className="font-bold text-[#0F2A47]">ISO 9001:2015</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-5xl text-[#0F2A47]">💻</span>
                                <span className="font-bold text-[#0F2A47]">Google for Education</span>
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
