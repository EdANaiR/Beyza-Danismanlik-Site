"use client";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollTop";
import Image from "next/image";
import { Leaf, Calendar, Clock, X } from "lucide-react";
import Section from "@/components/Section";
import TawkMessenger from "@/components/TawkMessenger";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Kaygı ile Başa Çıkma Yöntemleri",
    excerpt: "Günlük hayatta kaygı ile başa çıkmanın etkili yolları...",
    content: `Kaygı, günlük yaşamımızın normal bir parçası olabilir, ancak kontrol edilemediğinde yaşam kalitemizi düşürebilir. İşte kaygı ile başa çıkmanın etkili yöntemleri:

1. Nefes Egzersizleri: Derin nefes alıp verme, vücudunuzu sakinleştirmenin en etkili yollarından biridir. 4-7-8 tekniğini deneyin: 4 saniye nefes alın, 7 saniye tutun, 8 saniye verin.

2. Mindfulness Uygulaması: Şu ana odaklanmak, gelecek kaygılarını azaltmaya yardımcı olur. Günde 10 dakika meditasyon yapmayı deneyin.

3. Düzenli Egzersiz: Fiziksel aktivite, kaygı seviyelerini düşürmede oldukça etkilidir. Günlük yürüyüşler bile fark yaratabilir.

4. Düşünce Günlüğü: Kaygı verici düşüncelerinizi yazıya dökmek, onları daha objektif değerlendirmenize yardımcı olur.`,
    image: "/service9.jpg",
    date: "15 Mart 2024",
    readTime: "5 dakika",
  },
  {
    id: 2,
    title: "Sağlıklı İlişkilerin Temelleri",
    excerpt: "Uzun süreli ve sağlıklı ilişkiler için önemli ipuçları...",
    content: `Sağlıklı bir ilişki, iki tarafın da aktif çaba göstermesiyle mümkündür. İşte sağlıklı ilişkilerin temel taşları:

1. Etkili İletişim: Düşüncelerinizi ve duygularınızı açıkça ifade edin. Karşı tarafı yargılamadan dinleyin.

2. Sınırlar: Kişisel sınırlarınızı belirleyin ve karşı tarafın sınırlarına saygı gösterin.

3. Güven: İlişkinin temeli güvendir. Dürüstlük ve tutarlılık güveni besler.

4. Özerklik: İlişki içinde bireyselliğinizi koruyun. Kendi ilgi alanlarınızı ve arkadaşlıklarınızı sürdürün.

5. Empati: Karşı tarafın bakış açısını anlamaya çalışın. Empati, çatışmaları çözmede anahtar rol oynar.`,
    image: "/service10.png",
    date: "10 Mart 2024",
    readTime: "6 dakika",
  },
  {
    id: 3,
    title: "Manevi İyi Oluş ve Psikolojik Sağlık",
    excerpt: "Manevi iyi oluşun psikolojik sağlığımıza etkileri...",
    content: `Manevi iyi oluş, psikolojik sağlığımızın önemli bir boyutudur. Araştırmalar, manevi bağlantının ruh sağlığımız üzerindeki olumlu etkilerini gösteriyor:

1. Anlam ve Amaç: Manevi inançlar, hayatta anlam ve amaç duygusunu güçlendirir.

2. Topluluk Desteği: Manevi topluluklar, sosyal destek ve aidiyet duygusu sağlar.

3. Başa Çıkma Mekanizmaları: Manevi uygulamalar, stres ve zorluklarla başa çıkmada yardımcı olur.

4. İç Huzur: Meditasyon ve dua gibi manevi uygulamalar, iç huzuru artırır.

5. Umut ve İyimserlik: Manevi inançlar, geleceğe yönelik umut ve iyimserliği besler.`,
    image: "/service11.jpg",
    date: "5 Mart 2024",
    readTime: "7 dakika",
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<
    null | (typeof blogPosts)[0]
  >(null);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <ScrollToTop />

        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/hero1.jpg"
            alt="Blog"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Blog
            </h1>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
            <div className="space-y-4 text-center mb-12">
              <div className="flex items-center justify-center gap-2">
                <Leaf className="h-6 w-6 text-[#445D3B]" />
                <h2 className="text-3xl font-bold text-[#445D3B]">
                  Psikoloji Yazıları
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ruh sağlığı, kişisel gelişim ve psikoloji alanında faydalı
                bilgiler içeren yazılarımızı keşfedin.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-[#445D3B] line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedPost && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="relative h-64">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-[#445D3B]">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="prose max-w-none">
                  {selectedPost.content
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <Section />
      <TawkMessenger />
    </div>
  );
}
