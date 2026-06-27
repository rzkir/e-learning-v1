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
            <div className="hidden items-center justify-between border-b border-slate-200 bg-slate-50 px-12 py-3 text-sm font-medium text-slate-600 lg:flex">
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
                    <div className="ml-4 flex gap-4">
                        <a
                            href="#"
                            className="transition-colors hover:text-[#1F5A96]"
                        >
                            FB
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:text-[#1F5A96]"
                        >
                            IG
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:text-[#1F5A96]"
                        >
                            TW
                        </a>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-5 shadow-sm lg:px-12">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DC143C]">
                        <span className="text-2xl text-white">🎓</span>
                    </div>
                    <div className="leading-none">
                        <span className="block text-xl font-bold text-[#0F2A47]">
                            MODERN
                        </span>
                        <span className="block text-xs font-semibold tracking-widest text-[#DC143C] uppercase">
                            Academy
                        </span>
                    </div>
                </div>

                <div className="hidden items-center gap-10 font-medium text-slate-700 lg:flex">
                    <a
                        href="/"
                        className="border-b-2 border-[#1F5A96] text-[#1F5A96]"
                    >
                        Beranda
                    </a>
                    <a
                        href="/tentang-kami"
                        className="transition-colors hover:text-[#1F5A96]"
                    >
                        Tentang Kami
                    </a>
                    <a
                        href="/akademik"
                        className="transition-colors hover:text-[#1F5A96]"
                    >
                        Akademik
                    </a>
                    <a
                        href="/fasilitas"
                        className="transition-colors hover:text-[#1F5A96]"
                    >
                        Fasilitas
                    </a>
                    <a
                        href="/berita"
                        className="transition-colors hover:text-[#1F5A96]"
                    >
                        Berita
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    {isLoggedIn ? (
                        <Link
                            href={
                                currentTeam?.slug
                                    ? `/${currentTeam.slug}/dashboard`
                                    : '/'
                            }
                            className="hidden rounded-full bg-[#DC143C] px-6 py-2.5 font-semibold text-white transition-colors hover:bg-red-700 sm:flex"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <Link
                            href="/register"
                            className="hidden rounded-full bg-[#DC143C] px-6 py-2.5 font-semibold text-white transition-colors hover:bg-red-700 sm:flex"
                        >
                            Daftar Sekarang
                        </Link>
                    )}
                    <button className="text-2xl text-[#0F2A47] lg:hidden">
                        ☰
                    </button>
                </div>
            </nav>
        </>
    );
}
