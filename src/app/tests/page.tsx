import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollTop";
import Image from "next/image";
import { Leaf, FileText, CheckCircle } from "lucide-react";
import Section from "@/components/Section";
import TawkMessenger from "@/components/TawkMessenger";

const tests = [
  {
    category: "Kişilik Değerlendirme Testleri",
    items: [
      {
        title: "MMPI (Minnesota Çok Yönlü Kişilik Envanteri)",
        description:
          "Kişilik özelliklerini ve olası psikolojik sorunları değerlendirmeye yardımcı olan kapsamlı bir kişilik değerlendirme aracı.",
        duration: "60-90 dakika",
      },
      {
        title: "16PF (On Altı Kişilik Faktörü Anketi)",
        description:
          "Davranış ve kişisel gelişimi etkileyen temel kişilik faktörlerini ölçer.",
        duration: "45-60 dakika",
      },
    ],
  },
  {
    category: "Manevi ve Dini Değerlendirme",
    items: [
      {
        title: "Manevi İyi Oluş Ölçeği (SWBS)",
        description:
          "Dini ve varoluşsal iyi oluşu değerlendirir, manevi ihtiyaçları ve kaynakları anlamaya yardımcı olur.",
        duration: "15-20 dakika",
      },
      {
        title: "Dini Başa Çıkma Ölçeği (RCOPE)",
        description:
          "Bireylerin önemli yaşam stres faktörleri ve zorluklarla başa çıkmada dini nasıl kullandıklarını değerlendirir.",
        duration: "20-30 dakika",
      },
    ],
  },
  {
    category: "Aile ve İlişki Değerlendirmesi",
    items: [
      {
        title: "Aile Değerlendirme Ölçeği (FAD)",
        description:
          "İletişim ve problem çözme dahil olmak üzere çeşitli boyutlarda aile işlevselliğini değerlendirir.",
        duration: "30-40 dakika",
      },
      {
        title: "Çift Uyum Ölçeği (DAS)",
        description: "Çiftlerde ilişki memnuniyetini ve uyumunu ölçer.",
        duration: "15-20 dakika",
      },
    ],
  },
  {
    category: "Kaygı ve Depresyon Ölçekleri",
    items: [
      {
        title: "Beck Depresyon Envanteri (BDI)",
        description:
          "Ergen ve yetişkinlerde depresyon belirtilerinin şiddetini ölçer.",
        duration: "10-15 dakika",
      },
      {
        title: "Hamilton Anksiyete Değerlendirme Ölçeği (HAM-A)",
        description: "Kaygı belirtilerinin şiddetini değerlendirir.",
        duration: "10-15 dakika",
      },
    ],
  },
];

export default function TestsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <ScrollToTop />

        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/hero1.jpg"
            alt="Psikolojik Testler"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Uygulanan Testler
            </h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="space-y-4 text-center mb-12">
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-6 w-6 text-[#445D3B]" />
                <h2 className="text-3xl font-bold text-[#445D3B]">
                  Profesyonel Değerlendirme Araçları
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Danışanlarımıza doğru ve kapsamlı değerlendirmeler sunmak için
                bilimsel olarak geçerliliği kanıtlanmış değerlendirme araçları
                kullanıyoruz.
              </p>
            </div>

            <div className="space-y-12">
              {tests.map((category, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[#445D3B] border-b border-[#445D3B]/20 pb-2">
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((test, testIndex) => (
                      <div
                        key={testIndex}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-[#445D3B] mt-1 flex-shrink-0" />
                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold">
                              {test.title}
                            </h4>
                            <p className="text-gray-600">{test.description}</p>
                            <p className="text-sm text-[#445D3B]">
                              Süre: {test.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#445D3B]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Leaf className="h-8 w-8 text-[#445D3B] mx-auto" />
              <h2 className="text-2xl font-semibold text-[#445D3B]">
                Bu Testleri Neden Kullanıyoruz?
              </h2>
              <p className="text-gray-600">
                Değerlendirme araçlarımız, psikolojik, manevi ve duygusal
                durumunuz hakkında kapsamlı bilgiler sağlamak için özenle
                seçilmiştir. Bu testler, kişiselleştirilmiş tedavi planları
                geliştirmemize ve birlikte çalışmamız boyunca ilerlemenizi takip
                etmemize yardımcı olur.
              </p>
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
