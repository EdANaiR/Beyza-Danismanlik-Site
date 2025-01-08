import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollTop";
import Image from "next/image";
import { Leaf, GraduationCap, Award } from "lucide-react";
import Section from "@/components/Section";
import TawkMessenger from "@/components/TawkMessenger";

export default function HakkimizdaPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <ScrollToTop />

        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/hero1.jpg"
            alt="Hakkımızda Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Hakkımızda
            </h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-6 w-6 text-[#445D3B]" />
                    <h2 className="text-3xl font-bold text-[#445D3B]">
                      Uzm. Aile Danışmanı
                    </h2>
                  </div>
                  <h3 className="text-2xl font-semibold">Sedef Yıldız</h3>
                </div>
                <div className="prose max-w-none text-gray-600 space-y-4">
                  <p>
                    Çankaya Üniversitesi Psikoloji Bölümünden mezun oldum. Mezun
                    olduktan sonra Ankara Üniversitesi Sağlık Bilimleri
                    Fakültesi Disiplinlerarası Aile Danışmanlığı Yüksek Lisans
                    programını tamamlayarak, aile danışmanlığı uzmanlığımı
                    aldım.
                  </p>
                  <p>
                    Zorunlu staj dönemimde Borusan Makine ve Güç Sistemleri
                    şirketinin Borusan Cat Öğrenim Gelişim ve Eğitim
                    departmanında; endüstriyel psikoloji alanında zorunlu
                    stajımı tamamladım.
                  </p>
                  <p>
                    Zorunlu stajımın dışında lisans eğitimimin son 2 yılı stajer
                    psikolog olarak Özel Eğitimde çalıştım.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/about1.jpg"
                  alt="Beyza Soyad"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <GraduationCap className="h-10 w-10 text-[#445D3B] mb-6" />
                <h3 className="text-2xl font-bold mb-6">Eğitim</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Ankara Üniversitesi</h4>
                      <p className="text-gray-600">
                        Aile Danışmanlığı Yüksek Lisans
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Çankaya Üniversitesi</h4>
                      <p className="text-gray-600">Psikoloji Lisans</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Award className="h-10 w-10 text-[#445D3B] mb-6" />
                <h3 className="text-2xl font-bold mb-6">Uzmanlık Alanları</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Aile Danışmanlığı</h4>
                      <p className="text-gray-600">
                        Aile içi iletişim ve sorun çözme
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Çift Terapisi</h4>
                      <p className="text-gray-600">
                        İlişki sorunları ve çözümleri
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#445D3B]" />
                    <div>
                      <h4 className="font-semibold">Bireysel Danışmanlık</h4>
                      <p className="text-gray-600">
                        Kişisel gelişim ve psikolojik destek
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Section />
      <TawkMessenger />
    </div>
  );
}
