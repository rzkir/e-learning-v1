import { Head, Link } from '@inertiajs/react';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';

export default function Facilities() {
    return (
        <>
            <Head title="Fasilitas Unggulan - Modern Academy" />
            <div className="min-h-screen bg-slate-50">
                <Header />

                {/* Hero Header */}
                <header className="relative h-[450px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920"
                            alt="Campus Facilities"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0F2A47]/70 backdrop-blur-[2px]"></div>
                    </div>
                    <div className="container mx-auto px-6 lg:px-12 relative z-10 text-white max-w-7xl text-center">
                        <div className="max-w-3xl mx-auto">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DC143C]/20 text-red-300 border border-[#DC143C]/30 text-sm font-bold tracking-widest uppercase mb-6">
                                Infrastruktur Kelas Dunia
                            </span>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                                Fasilitas & Lingkungan <span className="text-[#DC143C]">Belajar</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-200 leading-relaxed">
                                Kami menyediakan sarana dan prasarana modern untuk mendukung eksplorasi tanpa batas bagi setiap siswa Modern Academy.
                            </p>
                        </div>
                    </div>
                </header>

                {/* Overview Section */}
                <section className="py-24 container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                        <div>
                            <span className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-4 block">
                                Eksplorasi Kampus
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2A47] leading-tight mb-8">
                                Sarana Terbaik untuk Prestasi Maksimal
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Infrastruktur Modern Academy dirancang dengan filosofi bahwa lingkungan fisik sangat mempengaruhi kualitas pembelajaran. Kami mengintegrasikan teknologi terkini dengan ruang terbuka hijau untuk kenyamanan belajar.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-blue-100 rounded text-[#1F5A96]">
                                        📶
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0F2A47]">Smart Campus</h4>
                                        <p className="text-sm text-slate-500">Koneksi internet cepat 24/7 di seluruh area.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-red-100 rounded text-[#DC143C]">
                                        🛡️
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0F2A47]">Keamanan 24 Jam</h4>
                                        <p className="text-sm text-slate-500">Sistem CCTV dan personil keamanan terlatih.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-blue-100 rounded text-[#1F5A96]">
                                        🌿
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0F2A47]">Green Building</h4>
                                        <p className="text-sm text-slate-500">Desain ramah lingkungan dan sirkulasi udara alami.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-red-100 rounded text-[#DC143C]">
                                        ♿
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0F2A47]">Akses Inklusif</h4>
                                        <p className="text-sm text-slate-500">Fasilitas ramah bagi penyandang disabilitas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800"
                                className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
                                alt="Campus"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-[#1F5A96] text-white p-8 rounded-3xl shadow-xl max-w-xs">
                                <span className="text-4xl mb-4 opacity-30 block">📍</span>
                                <h3 className="text-xl font-bold mb-2">Luas Kampus 5 Hektar</h3>
                                <p className="text-blue-100 text-sm opacity-90">Terintegrasi antara ruang akademik, seni, dan pusat olahraga terpadu.</p>
                            </div>
                        </div>
                    </div>

                    {/* Facility Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 - Laboratorium */}
                        <div className="group relative h-[450px] overflow-hidden rounded-3xl shadow-lg hover-scale">
                            <img
                                src="https://images.pexels.com/photos/2280523/pexels-photo-2280523.jpeg?auto=compress&cs=tinysrgb&w=800"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Laboratorium"
                            />
                            <div className="absolute inset-0 facility-gradient flex flex-col justify-end p-8 text-white">
                                <div className="mb-4 p-3 bg-[#DC143C] w-fit rounded-xl">
                                    <span className="text-2xl">🔬</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Laboratorium Riset</h3>
                                <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Fasilitas praktikum biologi, kimia, dan fisika dengan standar laboratorium universitas.
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Peralatan Canggih</li>
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Asisten Lab</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 - Perpustakaan */}
                        <div className="group relative h-[450px] overflow-hidden rounded-3xl shadow-lg hover-scale">
                            <img
                                src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Perpustakaan"
                            />
                            <div className="absolute inset-0 facility-gradient flex flex-col justify-end p-8 text-white">
                                <div className="mb-4 p-3 bg-[#1F5A96] w-fit rounded-xl">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Perpustakaan Digital</h3>
                                <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Koleksi 50.000+ buku fisik dan akses ke jurnal internasional digital.
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Quiet Zone</li>
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Coworking Area</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3 - Auditorium */}
                        <div className="group relative h-[450px] overflow-hidden rounded-3xl shadow-lg hover-scale">
                            <img
                                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Auditorium"
                            />
                            <div className="absolute inset-0 facility-gradient flex flex-col justify-end p-8 text-white">
                                <div className="mb-4 p-3 bg-[#0F2A47] w-fit rounded-xl">
                                    <span className="text-2xl">🎵</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Auditorium Utama</h3>
                                <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Ruang pertunjukan megah berkapasitas 1.200 orang dengan akustik terbaik.
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">State-of-art Sound</li>
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Backstage Room</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 4 - Smart Classrooms */}
                        <div className="group relative h-[450px] overflow-hidden rounded-3xl shadow-lg hover-scale">
                            <img
                                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Smart Classroom"
                            />
                            <div className="absolute inset-0 facility-gradient flex flex-col justify-end p-8 text-white">
                                <div className="mb-4 p-3 bg-[#DC143C] w-fit rounded-xl">
                                    <span className="text-2xl">🖥️</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Smart Classrooms</h3>
                                <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Ruang kelas yang dilengkapi dengan interactive whiteboards dan ergonomic seating.
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Hybrid Learning Ready</li>
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Air Conditioned</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 5 - Sport Complex */}
                        <div className="group relative h-[450px] overflow-hidden rounded-3xl shadow-lg hover-scale">
                            <img
                                src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Sport Complex"
                            />
                            <div className="absolute inset-0 facility-gradient flex flex-col justify-end p-8 text-white">
                                <div className="mb-4 p-3 bg-[#1F5A96] w-fit rounded-xl">
                                    <span className="text-2xl">🏆</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Sport Complex</h3>
                                <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Fasilitas olahraga indoor dan outdoor lengkap mulai dari kolam renang hingga lapangan basket.
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Olympic Pool</li>
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Gym Center</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 6 - Cafeteria */}
                        <div className="group relative h-[450px] overflow-hidden rounded-3xl shadow-lg hover-scale">
                            <img
                                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Cafeteria"
                            />
                            <div className="absolute inset-0 facility-gradient flex flex-col justify-end p-8 text-white">
                                <div className="mb-4 p-3 bg-[#0F2A47] w-fit rounded-xl">
                                    <span className="text-2xl">☕</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Cafeteria & Lounge</h3>
                                <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Area bersantai dengan hidangan sehat dan higienis bersertifikasi nutrisi.
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Healthy Food</li>
                                    <li className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">Social Space</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Facilities */}
                <section className="py-24 bg-[#0F2A47] text-white overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-4 block">
                                    Fasilitas Tambahan
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                                    Dukungan Komprehensif Selama Masa Studi
                                </h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center text-[#DC143C] text-2xl">
                                            🚌
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Transportasi Sekolah</h4>
                                            <p className="text-slate-400">Armada bus modern yang aman dengan pelacakan GPS real-time untuk menjemput dan mengantar siswa.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center text-[#1F5A96] text-2xl">
                                            🏥
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Pusat Kesehatan (UKS)</h4>
                                            <p className="text-slate-400">Fasilitas medis darurat dengan perawat standby dan kerjasama dengan rumah sakit terdekat.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center text-[#DC143C] text-2xl">
                                            🍽️
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Katering Sehat</h4>
                                            <p className="text-slate-400">Pilihan menu harian yang dikurasi ahli gizi untuk memastikan asupan energi siswa terpenuhi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        className="rounded-2xl h-64 w-full object-cover"
                                        alt="Facility 1"
                                    />
                                    <img
                                        src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        className="rounded-2xl h-80 w-full object-cover -mt-12"
                                        alt="Facility 2"
                                    />
                                    <img
                                        src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        className="rounded-2xl h-80 w-full object-cover -mt-12"
                                        alt="Facility 3"
                                    />
                                    <img
                                        src="https://images.pexels.com/photos/2280523/pexels-photo-2280523.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        className="rounded-2xl h-64 w-full object-cover"
                                        alt="Facility 4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Virtual Tour */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center mb-16">
                        <span className="text-[#1F5A96] font-bold uppercase tracking-widest text-sm mb-4 block">
                            Virtual Tour
                        </span>
                        <h2 className="text-4xl font-bold text-[#0F2A47]">Jelajahi Setiap Sudut Kampus Kami</h2>
                    </div>
                    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                        <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                alt="Virtual Tour"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <button className="w-24 h-24 bg-[#DC143C] text-white rounded-full flex items-center justify-center text-4xl shadow-2xl hover:scale-110 transition-transform">
                                    ▶️
                                </button>
                            </div>
                            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-white">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                                        <span className="text-3xl">🔄</span>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold">Tampilan 360°</h4>
                                        <p className="text-sm opacity-80">Klik untuk memulai tur virtual</p>
                                    </div>
                                </div>
                                <div className="flex -space-x-3">
                                    <img src="https://i.pravatar.cc/100?u=1" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                                    <img src="https://i.pravatar.cc/100?u=2" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                                    <img src="https://i.pravatar.cc/100?u=3" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                                    <div className="w-10 h-10 rounded-full bg-[#1F5A96] flex items-center justify-center text-[10px] font-bold border-2 border-white">+12</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* School Tour CTA */}
                <section className="py-24 container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="bg-slate-100 rounded-[40px] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold text-[#0F2A47] mb-6">Ingin Melihat Langsung?</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Kami mengundang calon siswa dan orang tua untuk mengunjungi kampus kami dan melihat langsung fasilitas unggulan kami melalui program School Tour.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#"
                                    className="bg-[#DC143C] text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
                                >
                                    Jadwalkan Kunjungan
                                </Link>
                                <Link
                                    href="#"
                                    className="bg-white text-[#0F2A47] border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-[#1F5A96] hover:text-[#1F5A96] transition-colors"
                                >
                                    Hubungi Admission
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
                                <h5 className="text-3xl font-bold text-[#DC143C] mb-1">15+</h5>
                                <p className="text-sm text-slate-500 font-medium">Laboratorium</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
                                <h5 className="text-3xl font-bold text-[#1F5A96] mb-1">40+</h5>
                                <p className="text-sm text-slate-500 font-medium">Smart Classrooms</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
                                <h5 className="text-3xl font-bold text-[#0F2A47] mb-1">5ha</h5>
                                <p className="text-sm text-slate-500 font-medium">Total Area</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center">
                                <h5 className="text-3xl font-bold text-[#DC143C] mb-1">25k</h5>
                                <p className="text-sm text-slate-500 font-medium">Buku Koleksi</p>
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
