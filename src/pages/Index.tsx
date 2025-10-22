import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ProgramsSection from '@/components/ProgramsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import OffersSection from '@/components/OffersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PopupOffer from '@/components/PopupOffer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-opensans">
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <ProgramsSection />
        <TestimonialsSection />
        <OffersSection />
        <ContactSection />
      </main>
      <Footer />
      <PopupOffer />
      <Toaster />
    </div>
  );
};

export default Index;
