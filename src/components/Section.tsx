import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4B5F44] text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-48">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            Uzman Aile Danışmanı SEDEF YILDIZ © 2024 Tüm Hakları Saklıdır.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hover:opacity-75 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="hover:opacity-75 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
