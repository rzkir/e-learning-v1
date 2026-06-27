import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';

type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
    namaLengkap: string;
    tempatLahir: string;
    tanggalLahir: string;
    jenisKelamin: string;
    agama: string;
    alamat: string;
    namaAyah: string;
    namaIbu: string;
    pekerjaanAyah: string;
    pekerjaanIbu: string;
    noTelp: string;
    program: string;
    dokumen: FileList | null;
}

export default function PPDB() {
    const [currentStep, setCurrentStep] = useState<Step>(1);
    const [formData, setFormData] = useState<FormData>({
        namaLengkap: '',
        tempatLahir: '',
        tanggalLahir: '',
        jenisKelamin: '',
        agama: '',
        alamat: '',
        namaAyah: '',
        namaIbu: '',
        pekerjaanAyah: '',
        pekerjaanIbu: '',
        noTelp: '',
        program: '',
        dokumen: null,
    });

    const updateField = (field: keyof FormData, value: string | FileList | null) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (currentStep < 5) {
            setCurrentStep((prev) => (prev + 1) as Step);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => (prev - 1) as Step);
        }
    };

    const steps = [
        { num: 1, label: 'Data Diri' },
        { num: 2, label: 'Orang Tua' },
        { num: 3, label: 'Program' },
        { num: 4, label: 'Dokumen' },
        { num: 5, label: 'Selesai' },
    ];

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-[#0F2A47] mb-8 flex items-center gap-3">
                            👤 Informasi Pribadi Calon Siswa
                        </h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2 col-span-2">
                                <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                                <input
                                    type="text"
                                    placeholder="Masukkan nama sesuai akta kelahiran"
                                    className="form-input"
                                    value={formData.namaLengkap}
                                    onChange={(e) => updateField('namaLengkap', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Tempat Lahir</label>
                                <input
                                    type="text"
                                    placeholder="Contoh: Jakarta"
                                    className="form-input"
                                    value={formData.tempatLahir}
                                    onChange={(e) => updateField('tempatLahir', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Tanggal Lahir</label>
                                <input
                                    type="date"
                                    className="form-input"
                                    value={formData.tanggalLahir}
                                    onChange={(e) => updateField('tanggalLahir', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Jenis Kelamin</label>
                                <select
                                    className="form-input"
                                    value={formData.jenisKelamin}
                                    onChange={(e) => updateField('jenisKelamin', e.target.value)}
                                >
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Agama</label>
                                <select
                                    className="form-input"
                                    value={formData.agama}
                                    onChange={(e) => updateField('agama', e.target.value)}
                                >
                                    <option value="">Pilih Agama</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Kristen">Kristen</option>
                                    <option value="Katolik">Katolik</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Budha">Budha</option>
                                </select>
                            </div>
                            <div className="space-y-2 col-span-2">
                                <label className="text-sm font-semibold text-slate-700">Alamat Lengkap</label>
                                <textarea
                                    placeholder="Masukkan alamat rumah lengkap"
                                    className="form-input h-32"
                                    value={formData.alamat}
                                    onChange={(e) => updateField('alamat', e.target.value)}
                                />
                            </div>
                            <div className="col-span-2 pt-6 flex justify-end">
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-[#1F5A96] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0F2A47] transition-all flex items-center gap-2"
                                >
                                    Selanjutnya <span>→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                );

            case 2:
                return (
                    <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-[#0F2A47] mb-8 flex items-center gap-3">
                            👨‍👩‍👧 Informasi Orang Tua / Wali
                        </h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Nama Ayah</label>
                                <input
                                    type="text"
                                    placeholder="Nama lengkap ayah"
                                    className="form-input"
                                    value={formData.namaAyah}
                                    onChange={(e) => updateField('namaAyah', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Nama Ibu</label>
                                <input
                                    type="text"
                                    placeholder="Nama lengkap ibu"
                                    className="form-input"
                                    value={formData.namaIbu}
                                    onChange={(e) => updateField('namaIbu', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Pekerjaan Ayah</label>
                                <input
                                    type="text"
                                    placeholder="Contoh: Pegawai Negeri, Wiraswasta"
                                    className="form-input"
                                    value={formData.pekerjaanAyah}
                                    onChange={(e) => updateField('pekerjaanAyah', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Pekerjaan Ibu</label>
                                <input
                                    type="text"
                                    placeholder="Contoh: Guru, Ibu Rumah Tangga"
                                    className="form-input"
                                    value={formData.pekerjaanIbu}
                                    onChange={(e) => updateField('pekerjaanIbu', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2 col-span-2">
                                <label className="text-sm font-semibold text-slate-700">Nomor Telepon Aktif</label>
                                <input
                                    type="tel"
                                    placeholder="Contoh: 0812-3456-7890"
                                    className="form-input"
                                    value={formData.noTelp}
                                    onChange={(e) => updateField('noTelp', e.target.value)}
                                />
                            </div>
                            <div className="col-span-2 pt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-slate-100 text-[#0F2A47] px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
                                >
                                    ← Kembali
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-[#1F5A96] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0F2A47] transition-all flex items-center gap-2"
                                >
                                    Selanjutnya <span>→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                );

            case 3:
                return (
                    <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-[#0F2A47] mb-8 flex items-center gap-3">
                            📚 Pilihan Program Studi
                        </h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Program yang Diminati</label>
                                <select
                                    className="form-input"
                                    value={formData.program}
                                    onChange={(e) => updateField('program', e.target.value)}
                                >
                                    <option value="">Pilih Program Studi</option>
                                    <option value="sains">Sains & Teknologi</option>
                                    <option value="sosial">Sosial & Humaniora</option>
                                    <option value="seni">Seni & Desain Kreatif</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Alasan Memilih Program</label>
                                <textarea
                                    placeholder="Ceritakan motivasi dan minat Anda..."
                                    className="form-input h-32"
                                />
                            </div>
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                <h4 className="font-bold text-[#1F5A96] mb-2">Informasi Program</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>• Sains & Teknologi: Fokus Robotik, Coding, dan Penelitian</li>
                                    <li>• Sosial & Humaniora: Sejarah, Bisnis, dan Public Speaking</li>
                                    <li>• Seni & Desain: Digital Illustration dan Performance Arts</li>
                                </ul>
                            </div>
                            <div className="pt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-slate-100 text-[#0F2A47] px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
                                >
                                    ← Kembali
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-[#1F5A96] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0F2A47] transition-all flex items-center gap-2"
                                >
                                    Selanjutnya <span>→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                );

            case 4:
                return (
                    <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-[#0F2A47] mb-8 flex items-center gap-3">
                            📎 Upload Dokumen
                        </h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Scan Akta Kelahiran (Asli)</label>
                                <input
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="form-input"
                                    onChange={(e) => updateField('dokumen', e.target.files)}
                                />
                                <p className="text-xs text-slate-400">Format: PDF, JPG, PNG (Max 2MB)</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Scan Kartu Keluarga (Terbaru)</label>
                                <input
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="form-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Scan Rapor 3 Semester Terakhir</label>
                                <input
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="form-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Pas Foto 3x4 (Latar Merah)</label>
                                <input
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="form-input"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Sertifikat Prestasi (Opsional)</label>
                                <input
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="form-input"
                                />
                            </div>
                            <div className="pt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-slate-100 text-[#0F2A47] px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
                                >
                                    ← Kembali
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-[#DC143C] text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all flex items-center gap-2"
                                >
                                    Kirim Pendaftaran <span>→</span>
                                </button>
                            </div>
                        </form>
                    </div>
                );

            case 5:
                return (
                    <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 text-center">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-5xl">✅</span>
                        </div>
                        <h2 className="text-3xl font-bold text-[#0F2A47] mb-4">Pendaftaran Berhasil!</h2>
                        <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                            Terima kasih telah mendaftar di Modern Academy. Tim kami akan meninjau dokumen Anda dan menghubungi via WhatsApp dalam 2x24 jam.
                        </p>
                        <div className="bg-slate-50 rounded-2xl p-6 inline-block mb-8">
                            <p className="text-sm text-slate-500 mb-1">Nomor Pendaftaran Anda:</p>
                            <p className="text-2xl font-bold text-[#DC143C]">#MDA-2024-001</p>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button className="bg-[#DC143C] text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all">
                                Cetak Bukti Pendaftaran
                            </button>
                            <Link
                                href="/"
                                className="bg-slate-100 text-[#0F2A47] px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
                            >
                                Kembali ke Beranda
                            </Link>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <Head title="PPDB Online - Modern Academy" />
            <div className="min-h-screen bg-slate-50">
                <Header />

                {/* Hero Header */}
                <header className="relative py-24 bg-[#0F2A47] overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img
                            src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-12 relative z-10 text-center text-white max-w-7xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#DC143C]/20 text-red-300 border border-[#DC143C]/30 text-sm font-bold tracking-widest uppercase mb-6">
                            Admission 2024/2025
                        </span>
                        <h1 className="text-5xl font-bold mb-6">Penerimaan Peserta Didik Baru</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Bergabunglah dengan komunitas pembelajar inovatif kami. Proses pendaftaran mudah, transparan, dan
                            sepenuhnya dilakukan secara daring.
                        </p>
                    </div>
                </header>

                {/* Steps Progress */}
                <section className="py-12 bg-white border-b">
                    <div className="container mx-auto px-12 max-w-5xl">
                        <div className="flex justify-between relative">
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
                            {steps.map((step) => (
                                <div
                                    key={step.num}
                                    className="relative z-10 flex flex-col items-center gap-3"
                                >
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg transition-all ${
                                            currentStep >= step.num
                                                ? 'bg-[#DC143C] text-white shadow-red-500/20'
                                                : 'bg-slate-100 text-slate-400'
                                        }`}
                                    >
                                        {currentStep > step.num ? '✓' : step.num}
                                    </div>
                                    <span
                                        className={`text-sm font-bold ${
                                            currentStep >= step.num ? 'text-[#0F2A47]' : 'text-slate-400'
                                        }`}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20">
                    <div className="container mx-auto px-12 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            {renderStepContent()}
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8">
                            {/* Document Requirements */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-[#0F2A47] mb-6">Persyaratan Dokumen</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <div className="text-sm font-medium text-slate-600">Scan Akta Kelahiran (Asli)</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <div className="text-sm font-medium text-slate-600">Scan Kartu Keluarga (Terbaru)</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <div className="text-sm font-medium text-slate-600">Scan Rapor 3 Semester Terakhir</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <div className="text-sm font-medium text-slate-600">Pas Foto 3x4 (Latar Merah)</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <div className="text-sm font-medium text-slate-600">Sertifikat Prestasi (Opsional)</div>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-red-50 rounded-xl text-xs text-red-600 leading-relaxed font-medium">
                                    Pastikan semua dokumen dalam format PDF atau JPG dengan ukuran maksimal 2MB per file.
                                </div>
                            </div>

                            {/* Schedule */}
                            <div className="bg-[#0F2A47] rounded-3xl p-8 shadow-lg text-white">
                                <h3 className="text-xl font-bold mb-6">Jadwal Penting</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#DC143C] rounded-xl flex flex-col items-center justify-center text-xs font-bold">
                                            <span>01</span>
                                            <span>JUN</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Pembukaan PPDB</h4>
                                            <p className="text-xs text-slate-300">Pendaftaran Online Tahap 1</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex flex-col items-center justify-center text-xs font-bold">
                                            <span>15</span>
                                            <span>JUL</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Ujian Seleksi</h4>
                                            <p className="text-xs text-slate-300">Tes Akademik & Wawancara</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex flex-col items-center justify-center text-xs font-bold">
                                            <span>25</span>
                                            <span>JUL</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Pengumuman</h4>
                                            <p className="text-xs text-slate-300">Hasil Seleksi Tahap 1</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex flex-col items-center justify-center text-xs font-bold">
                                            <span>01</span>
                                            <span>AUG</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Daftar Ulang</h4>
                                            <p className="text-xs text-slate-300">Verifikasi Berkas Asli</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Check */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-[#0F2A47] mb-6 flex items-center gap-3">
                                    🔍 Cek Status Pendaftaran
                                </h3>
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Masukkan Nomor Pendaftaran"
                                        className="form-input flex-1"
                                    />
                                    <button className="bg-[#0F2A47] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1F5A96] transition-all whitespace-nowrap">
                                        Cek Status
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-12 max-w-4xl text-center mb-16">
                        <span className="text-[#DC143C] font-bold uppercase tracking-widest text-sm mb-4 block">
                            Bantuan
                        </span>
                        <h2 className="text-4xl font-bold text-[#0F2A47]">Pertanyaan Populer (FAQ)</h2>
                    </div>
                    <div className="container mx-auto px-12 max-w-4xl space-y-4">
                        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <button className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-100 transition-colors">
                                <span className="font-bold text-[#0F2A47]">Bagaimana cara mendaftar jika tidak memiliki komputer?</span>
                                <span className="text-[#DC143C]">−</span>
                            </button>
                            <div className="px-8 pb-6 text-slate-600 text-sm leading-relaxed">
                                Anda dapat melakukan pendaftaran melalui smartphone atau mengunjungi pusat bantuan di sekolah
                                setiap hari kerja pukul 08.00 - 15.00 WIB untuk dibantu oleh petugas kami.
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <button className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-100 transition-colors">
                                <span className="font-bold text-[#0F2A47]">Apakah ada biaya pendaftaran?</span>
                                <span className="text-[#DC143C]">+</span>
                            </button>
                        </div>
                        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <button className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-100 transition-colors">
                                <span className="font-bold text-[#0F2A47]">Apa saja materi yang diujikan dalam tes seleksi?</span>
                                <span className="text-[#DC143C]">+</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Support Section */}
                <section className="py-20">
                    <div className="container mx-auto px-12 max-w-7xl">
                        <div className="bg-[#1F5A96] rounded-[40px] p-12 lg:p-16 text-center text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Teknis?</h2>
                                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                                    Tim IT Support kami siap membantu Anda menyelesaikan kendala pendaftaran online.
                                </p>
                                <div className="flex justify-center gap-6">
                                    <button className="flex items-center gap-2 bg-white text-[#1F5A96] px-6 py-3 rounded-xl font-bold hover:bg-[#DC143C] hover:text-white transition-all">
                                        <span className="text-xl">📱</span> WhatsApp CS 1
                                    </button>
                                    <button className="flex items-center gap-2 bg-white text-[#1F5A96] px-6 py-3 rounded-xl font-bold hover:bg-[#DC143C] hover:text-white transition-all">
                                        <span className="text-xl">📱</span> WhatsApp CS 2
                                    </button>
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