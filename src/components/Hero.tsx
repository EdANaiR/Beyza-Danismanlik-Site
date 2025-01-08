"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[650px] overflow-hidden">
      <Image
        src="/hero1.jpg"
        alt="Hero Background"
        className="absolute h-full w-full object-cover brightness-75"
        height={650}
        width={1440}
        priority
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      <div className="container relative mx-auto h-full flex items-center">
        <div className="space-y-6 px-4 md:px-48">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-serif italic text-gray-100">
              Psikolog & Aile Danışmanı
            </h2>
          </div>
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              Sedef Yıldız
            </h1>
          </div>
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-200 mt-4 px-5 py-5 text-base font-medium transform transition-transform duration-200 hover:scale-105"
              >
                Randevu Al
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex items-center space-x-2 md:space-x-4">
        <Link
          href="#"
          className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </Link>
        <Link
          href="#"
          className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Facebook className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </Link>
        <Link
          href="#"
          className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Instagram className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </Link>
        <Link
          href="#"
          className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <Linkedin className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </Link>
      </div>
    </section>
  );
}
