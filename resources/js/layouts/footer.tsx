import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-[#DC143C] flex items-center justify-center rounded-lg">
                            <span className="text-white text-lg">🎓</span>
                        </div>
                        <div className="leading-none">
                            <span className="block text-lg font-bold text-[#0F2A47]">MODERN</span>
                            <span className="block text-[10px] font-semibold tracking-widest text-[#DC143C] uppercase">Academy</span>
                        </div>
                    </div>
                    <p className="text-slate-500 leading-relaxed mb-8">
                        Berkomitmen memberikan pendidikan berkualitas tinggi untuk membentuk generasi emas yang cerdas dan berintegritas.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-[#0F2A47] hover:bg-[#1F5A96] hover:text-white transition-all">FB</a>
                        <a href="#" className="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-[#0F2A47] hover:bg-[#1F5A96] hover:text-white transition-all">IG</a>
                        <a href="#" className="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-[#0F2A47] hover:bg-[#1F5A96] hover:text-white transition-all">YT</a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-[#0F2A47] mb-6">Tautan Cepat</h4>
                    <ul className="space-y-4 text-slate-500 font-medium">
                        <li className="hover:text-[#DC143C] transition-colors"><a href="#">Tentang Kami</a></li>
                        <li className="hover:text-[#DC143C] transition-colors"><a href="#">Pendaftaran</a></li>
                        <li className="hover:text-[#DC143C] transition-colors"><a href="#">Kurikulum</a></li>
                        <li className="hover:text-[#DC143C] transition-colors"><a href="#">Kalender Akademik</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-[#0F2A47] mb-6">Informasi</h4>
                    <ul className="space-y-4 text-slate-500 font-medium">
                        <li className="hover:text-[#DC143C] transition-colors"><a href="#">Berita Terkini</a></li>
                        <li className="hover:text-[#DC143C] transition-colors"><a href="#">Galeri Foto</a></li>
                        <li className="hover:text-[#DC143C] transition-colors"><a href="#">Karir</a></li>
                        <li className="hover:text-[#DC143C] transition-colors"><a href="#">PPDB Online</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-[#0F2A47] mb-6">Kontak Kami</h4>
                    <ul className="space-y-4 text-slate-500 font-medium">
                        <li className="flex gap-3">
                            <span className="text-[#DC143C] text-xl">📍</span>
                            <span>Jl. Pendidikan No. 45, Kebayoran Baru, Jakarta Selatan</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#DC143C] text-xl">📞</span>
                            <span>(021) 555-0113</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#DC143C] text-xl">✉️</span>
                            <span>admission@modernacademy.id</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
                <p>© 2024 Modern Academy. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-[#0F2A47]">Kebijakan Privasi</a>
                    <a href="#" className="hover:text-[#0F2A47]">Syarat & Ketentuan</a>
                </div>
            </div>
        </footer>
    );
}
