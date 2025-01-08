import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Quote() {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#273621] via-[#769b68] to-[#4c6640]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-48">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight  animate-pulse">
            Manevi danışmanlık, ruhu iyileştiren bir rehberdir; içsel huzura
            giden yolu aydınlatır.
          </h2>

          <p className="text-white/90 text-lg md:text-xl italic">
            Uzm. Aile Danışmanı Sedef YILDIZ
          </p>

          <div className="pt-4">
            <Link href="#contact">
              <Button
                className="bg-white text-[#445D3B] hover:bg-white/90 text-lg px-8 py-6"
                size="lg"
              >
                Bize Ulaşın
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
