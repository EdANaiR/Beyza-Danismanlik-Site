import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollTop";
import Image from "next/image";
import { Leaf } from "lucide-react";
import Section from "@/components/Section";
import TawkMessenger from "@/components/TawkMessenger";
import Link from "next/link";

const services = [
  {
    title: "Psikolojik ve Ruhsal Destek",
    image: "/service1.jpg",
    description: `Günlük yaşamın zorlukları, stres, kaygı ve depresyon gibi durumlarla başa çıkmada profesyonel destek sağlıyorum. Modern terapi teknikleri ve bütüncül yaklaşımla, ruhsal sağlığınızı iyileştirmeye ve yaşam kalitenizi artırmaya yardımcı oluyorum.`,
  },
  {
    title: "İnanç ve Değerler Üzerine Çalışma",
    image: "/service2.jpg",
    description: `Kişisel değerleriniz ve inançlarınızla uyumlu bir yaşam sürdürmenize yardımcı oluyorum. Manevi yolculuğunuzda size rehberlik ederek, içsel huzur ve dengeyi bulmanıza destek oluyorum.`,
  },
  {
    title: "Aile ve Çift Danışmanlığı",
    image: "/service3.jpg",
    description: `Aile içi iletişim sorunları, ebeveynlik zorlukları ve çift ilişkilerindeki problemlerin çözümünde uzman desteği sağlıyorum. İlişkilerinizi güçlendirmek ve daha sağlıklı bir aile ortamı oluşturmak için birlikte çalışıyoruz.`,
  },
  {
    title: "Yas ve Kayıp Süreçleri",
    image: "/service8.jpg",
    description: `Sevdiklerimizi kaybetmek hayatın en zor deneyimlerinden biridir. Bu zorlu süreçte size destek oluyor, yas sürecini sağlıklı bir şekilde yönetmenize ve yeni yaşam düzenine uyum sağlamanıza yardımcı oluyorum.`,
  },
  {
    title: "Bağımlılıklarla Mücadele",
    image: "/service4.jpg",
    description: `Çeşitli bağımlılık türleriyle mücadelede profesyonel destek sunuyorum. Bağımlılığın altında yatan nedenleri anlayarak, iyileşme sürecinde size ve ailenize rehberlik ediyorum.`,
  },
  {
    title: "Kişisel Gelişim ve Kendini Keşif",
    image: "/service5.jpg",
    description: `Potansiyelinizi keşfetmenize ve gerçekleştirmenize yardımcı oluyorum. Öz farkındalık, özgüven geliştirme ve kişisel hedeflerinize ulaşma konularında size destek oluyorum.`,
  },
  {
    title: "Kariyer ve Hayat Yolu Danışmanlığı",
    image: "/service6.jpg",
    description: `Kariyer seçimi ve değişimi süreçlerinde profesyonel rehberlik sağlıyorum. Yeteneklerinizi ve ilgi alanlarınızı keşfederek, sizin için en uygun kariyer yolunu belirlemenize yardımcı oluyorum.`,
  },
  {
    title: "Ebeveyn Eğitimi",
    image: "/service7.jpg",
    description: `Çocuk gelişimi ve ebeveynlik becerileri konusunda danışmanlık hizmeti veriyorum. Çocuğunuzla sağlıklı iletişim kurma ve etkili ebeveynlik stratejileri geliştirme konularında size destek oluyorum.`,
  },
];

export default function CalismaAlanlariPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <ScrollToTop />

        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/hero1.jpg"
            alt="Çalışma Alanları"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Çalışma Alanlarım
            </h1>
          </div>
        </section>

        {/* Hizmetler Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="space-y-4 text-center mb-12">
              <div className="flex items-center justify-center gap-2">
                <Leaf className="h-6 w-6 text-[#445D3B]" />
                <h2 className="text-3xl font-bold text-[#445D3B]">
                  Uzmanlık Alanları
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Size en iyi şekilde hizmet verebilmek için sürekli kendimi
                geliştiriyor ve alanımda güncel yaklaşımları takip ediyorum.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-[#445D3B]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#445D3B]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Profesyonel Destek İçin Yanınızdayım
              </h2>
              <p className="text-white/90">
                Her birey özeldir ve kendi hikayesine sahiptir. Size özel
                çözümler için randevu alabilirsiniz.
              </p>

              <button className="bg-white text-[#445D3B] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                <Link href="/#iletisim">Randevu Al</Link>
              </button>
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
