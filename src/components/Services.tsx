"use client";

import { Leaf, Search } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const services = [
  {
    title: "Psikolojik ve Ruhsal Destek",
    image: "/service1.jpg",
  },
  {
    title: "İnanç ve Değerler Üzerine Çalışma",
    image: "/service2.jpg",
  },
  {
    title: "Aile ve Çift Danışmanlığı",
    image: "/service3.jpg",
  },
  {
    title: "Yas ve Kayıp Süreçleri",
    image: "/service8.jpg",
  },
  {
    title: "Bağımlılıklarla Mücadele",
    image: "/service4.jpg",
  },
  {
    title: "Kişisel Gelişim ve Kendini Keşif",
    image: "/service5.jpg",
  },
  {
    title: "Kariyer ve Hayat Yolu Danışmanlığı",
    image: "/service6.jpg",
  },
  {
    title: "Ebeveyn Eğitimi",
    image: "/service7.jpg",
  },
];

export function Services() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(services.map((_, index) => index));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-16 md:py-20 bg-[#f0f9f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Çalışma Alanlarım
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#445D3B] rounded-full" />
          </div>
          <Leaf className="w-8 h-8 mx-auto mt-4 text-[#445D3B]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-500 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56 mb-4 rounded-full overflow-hidden group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#445D3B]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full scale-0 group-hover:scale-100" />
                    <Search className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  </div>
                </div>
                <h3 className="text-center text-lg font-semibold text-gray-900 max-w-[200px]">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
