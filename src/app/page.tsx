import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import About from "@/components/HomeAbout";
import Quote from "@/components/QuoteSection";
import Section from "@/components/Section";
import { ScrollToTop } from "@/components/ScrollTop";
import TawkMessenger from "@/components/TawkMessenger";

export default function Home() {
  return (
    <div className=" flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <ScrollToTop />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Quote />
      </main>
      <Footer />
      <Section />
      <TawkMessenger />
    </div>
  );
}
