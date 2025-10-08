import Hero from '@/components/Hero/Hero';

import { WavyBackgroundDemo } from '@/components/ui/WavyBackgroundDemo';
import TimelineComponent from '@/components/Timeline/Timeline';
import AboutMe from '@/components/about-me/AboutMe';
import SecondQuote from '@/components/SecondQuote/SecondQuote';
import { Footer } from '@/components/footer';

import { unstable_noStore as noStore } from 'next/cache';
import Projects from '@/components/Projects/Projects';

import ContactForm from '@/components/ui/contact-form';
import CallToAction from '@/components/ui/call-to-action-1';

export const dynamic = 'force-dynamic';
export const revalidate = 43200; // revalidate every 12 hours

export default function Home() {
  noStore();

  return (
    <main className="bg-transparent">
      <Hero />
      {/* <TimelineComponent /> */}
      <SecondQuote />
      <AboutMe />
      <CallToAction />
      <Projects />
      <ContactForm />
      
      <Footer />
    </main>
  );
}
