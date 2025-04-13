import Image from 'next/image';

import {AboutUsSection} from '@/components/about-us-section';
import {ContactSection} from '@/components/contact-section';
import {FAQSection} from '@/components/faq-section';
import {HeroSection} from '@/components/hero-section';
import {ServicesSection} from '@/components/services-section';
import {TestimonialsSection} from '@/components/testimonials-section';
import {BlogSection} from '@/components/blog-section';
import {LeadCaptureSection} from '@/components/lead-capture-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LeadCaptureSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}

