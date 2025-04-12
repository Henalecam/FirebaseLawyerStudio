import Image from 'next/image';

import {ContactSection} from '@/components/contact-section';
import {HeroSection} from '@/components/hero-section';
import {ServicesSection} from '@/components/services-section';
import {TestimonialsSection} from '@/components/testimonials-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
