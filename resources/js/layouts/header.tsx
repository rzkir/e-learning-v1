import { Link } from '@inertiajs/react';
import type { Auth } from '@/types';

interface HeaderProps {
    auth?: Auth;
    currentTeam?: { slug: string } | null;
}

export default function Header({ auth, currentTeam }: HeaderProps) {
    const isLoggedIn = auth?.user != null;

    return (
        <>
            {/* Top Info Bar */}
            <div className="hidden lg:flex bg-slate-50 border-b border-slate-200 py-3 px-12 justify-between items-center text-sm font-medium text-slate-600">
                <div className="flex gap-8">
                    <span className="flex items-center gap-2">
                        <span className="text-[#DC143C]">📍</span>
                        Jl. Pendidikan No. 45, Jakarta Selatan
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-[#DC143C]">✉️</span>
                        info@modernacademy.sch.id
                    </span>
                </div>
                <div className="flex gap-6">
                    <span className="flex items-center gap-2">
                        <span className="text-[#DC143C]">📞</span>
                        (021) 555-0113
                    </span>
                    <div className="flex gap-4 ml-4">
                        <a href="#" className="hover:text-[#1F5A96] transition-colors">FB</a>
                        <a href="#" className="hover:text-[#1F5A96] transition-colors">IG</a>
                        <a href="#" className="hover:text-[#1F5A96] transition-colors">TW</a>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 px-6 lg:px-12 py-5 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#DC143C] flex items-center justify-center rounded-lg">
                        <span className="text-white text-2xl">🎓</span>
                    </div>
                    <div className="leading-none">
                        <span className="block text-xl font-bold text-[#0F2A47]">MODERN</span>
                        <span className="block text-xs font-semibold tracking-widest text-[#DC143C] uppercase">Academy</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-10 font-medium text-slate-700">
                    <a href="#" className="text-[#1F5A96] border-b-2 border-[#1F5A96]">Beranda</a>
                    <a href="#" className="hover:text-[#1F5A96] transition-colors">Tentang</a>
                    <a href="#" className="hover:text-[#1F5A96] transition-colors">Akademik</a>
                    <a href="#" className="hover:text-[#1F5A96] transition-colors">Fasilitas</a>
                    <a href="#" className="hover:text-[#1F5A96] transition-colors">Berita</a>
                </div>

                <div className="flex items-center gap-4">
                    {isLoggedIn ? (
                        <Link
                            href={currentTeam?.slug ? `/${currentTeam.slug}/dashboard` : '/'}
                            className="hidden sm:flex bg-[#DC143C] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-colors"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <Link
                            href="/register"
                            className="hidden sm:flex bg-[#DC143C] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-colors"
                        >
                            Daftar Sekarang
                        </Link>
                    )}
                    <button className="lg:hidden text-2xl text-[#0F2A47]">
                        ☰
                    </button>
                </div>
            </nav>
        </>
    );
}
