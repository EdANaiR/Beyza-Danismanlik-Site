"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Instagram,
  Linkedin,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      const menu = document.getElementById("mobile-menu");
      if (menu) {
        setMenuHeight(menu.offsetHeight);
      }
    } else {
      setMenuHeight(0);
    }
  }, [menuOpen]);

  return (
    <header className="w-full relative">
      <div className="bg-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-48 py-2 text-sm text-gray-600">
          <div className="hidden sm:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Telefon: +90 (532) 162 48 92</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>E-Posta: info@sedefyildiz.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <MessageCircle className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="flex h-20 items-center justify-between relative">
          <button
            className="sm:hidden text-gray-800 focus:outline-none absolute left-0 z-20"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>

          <nav className="hidden sm:flex items-center space-x-8">
            <Link
              className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
              href="/"
            >
              Anasayfa
            </Link>
            <Link
              className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
              href="/hakkimizda"
            >
              Hakkımızda
            </Link>
            <Link
              className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
              href="/calisma-alanlarim"
            >
              Çalışma Alanlarım
            </Link>
          </nav>

          <Link
            href="/"
            className="flex flex-col items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative h-56 w-56 sm:h-64 sm:w-64">
              <Image
                src="/header.png"
                alt="Psikolog Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden sm:flex items-center space-x-8">
            <Link
              className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
              href="/tests"
            >
              Uyguladığım Testler
            </Link>
            <Link
              className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
              href="blog"
            >
              Blog
            </Link>
            <Link
              className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
              href="#iletisim"
            >
              İletişim
            </Link>
          </nav>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`sm:hidden bg-gray-100 shadow-md w-full overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link
            className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
            href="/"
          >
            Anasayfa
          </Link>
          <Link
            className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
            href="/hakkimizda"
          >
            Hakkımızda
          </Link>
          <Link
            className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
            href="/calisma-alanlarim"
          >
            Çalışma Alanlarım
          </Link>
          <Link
            className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
            href="/tests"
          >
            Uyguladığım Testler
          </Link>
          <Link
            className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-base font-bold text-gray-800 transition-colors hover:text-primary"
            href="#iletisim"
          >
            İletişim
          </Link>
        </nav>
      </div>

      <div
        style={{ height: menuHeight }}
        className="transition-all duration-300 ease-in-out"
      />
    </header>
  );
}
