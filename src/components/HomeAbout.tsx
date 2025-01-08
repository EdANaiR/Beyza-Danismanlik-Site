"use client";

import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde animasyonu tetikle
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-48">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#445D3B]">
                  Uzman Aile Danışmanı
                </h1>
                <Leaf className="h-6 w-6 text-[#445D3B]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-center lg:text-left">
                Sedef Yıldız
              </h2>
            </div>
            <div className="text-muted-foreground italic text-sm sm:text-base">
              <p>
                Çankaya Üniversitesi Psikoloji Bölümünden mezun oldum. Mezun
                olduktan sonra Ankara Üniversitesi Sağlık Bilimleri Fakültesi
                Disiplinlerarası Aile Danışmanlığı Yüksek Lisans programını
                tamamlayarak, aile danışmanlığı uzmanlığımı aldım.
              </p>
              <p className="mt-4">
                Zorunlu staj dönemimde Borusan Makine ve Güç Sistemleri
                şirketinin Borusan Cat Öğrenim Gelişim ve Eğitim departmanında;
                endüstriyel psikoloji alanında zorunlu stajımı tamamladım.
                Zorunlu stajımın dışında lisans eğitimimin son 2 yılı stajer
                psikolog olarak Özel Eğitimde çalıştım....
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/hakkimizda" passHref>
                <Button className="w-full sm:w-auto bg-[#445D3B] hover:bg-[#445D3B]/90 text-white">
                  Devamını Oku
                </Button>
              </Link>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <p className="font-medium text-center sm:text-left">
                  Bilgi İçin
                </p>
                <Link
                  href="tel:+90 (532) 162 48 92"
                  className="text-lg font-semibold text-[#445D3B] hover:underline block text-center sm:text-left"
                >
                  +90 (532) 162 48 92
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-3xl lg:order-last transition-transform duration-1000 ease-out ${
              isVisible ? "translate-x-0" : "translate-x-[100vw]"
            }`}
          >
            <Image
              alt="Irmak Seyhan profesyonel portre"
              className="object-cover"
              fill
              src="/about1.jpg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
