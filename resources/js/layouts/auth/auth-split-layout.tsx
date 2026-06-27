import { Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

interface AuthSplitLayoutProps extends AuthLayoutProps {
    imageSide?: 'left' | 'right';
    imageSrc?: string;
}

export default function AuthSplitLayout({
    children,
    title,
    description,
    imageSide = 'left',
    imageSrc = 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920',
}: AuthSplitLayoutProps) {
    const { name } = usePage().props;

    const imageSection = (
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
            <div className="absolute inset-0">
                <img
                    src={imageSrc}
                    alt="Campus"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A47]/90 via-[#0F2A47]/60 to-transparent" />
            </div>
            <Link
                href={home()}
                className="relative z-20 flex items-center text-lg font-medium"
            >
                <AppLogoIcon className="mr-2 size-8 fill-current text-white" />
                {name}
            </Link>
            <div className="relative z-20 mt-auto max-w-md">
                <blockquote className="space-y-2">
                    <p className="text-2xl font-bold text-white leading-tight">
                        Membangun Karakter, Mengejar Prestasi Utama
                    </p>
                    <footer className="text-sm text-white/80 font-medium">
                        Modern Academy — Tahun Ajaran 2024/2025
                    </footer>
                </blockquote>
            </div>
        </div>
    );

    const formSection = (
        <div className="w-full lg:p-8 bg-white">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
                <Link
                    href={home()}
                    className="flex items-center justify-center lg:hidden"
                >
                    <AppLogoIcon className="h-10 fill-current text-black sm:h-12" />
                </Link>
                <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center">
                    <h1 className="text-2xl font-bold text-[#0F2A47]">{title}</h1>
                    <p className="text-sm text-balance text-muted-foreground">
                        {description}
                    </p>
                </div>
                {children}
            </div>
        </div>
    );

    const isReversed = imageSide === 'right';

    return (
        <div className="relative grid min-h-screen items-center justify-center bg-white px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            {isReversed ? (
                <>
                    {formSection}
                    {imageSection}
                </>
            ) : (
                <>
                    {imageSection}
                    {formSection}
                </>
            )}
        </div>
    );
}
