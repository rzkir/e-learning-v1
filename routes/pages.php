<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/tentang-kami', 'about')->name('about');
Route::inertia('/akademik', 'academics')->name('academics');
Route::inertia('/fasilitas', 'facilities')->name('facilities');
Route::inertia('/berita', 'news')->name('news');
Route::inertia('/ppdb', 'ppdb')->name('ppdb');
