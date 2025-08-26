"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-gradient-to-r from-[#F0F7FF] to-[#FFFFFF] py-18">
        <CyclopsHero 
          title="Welcome to MyBrand" 
          subtitle="Transforming ideas into reality." 
          primaryButtonText="Get Started" 
          secondaryButtonText="Learn More" 
          onPrimaryButtonClick={() => console.log('Primary Button Clicked')} 
          onSecondaryButtonClick={() => console.log('Secondary Button Clicked')} 
        />
      </section>
      <section id="about" className="bg-white py-18">
        <MinimalAbout description="MyBrand is dedicated to providing exceptional services that ensure customer satisfaction." />
      </section>
      <section id="services" className="bg-[#FBFCFE] py-18">
        <SimpleKPIBento 
          items={[{ value: 'Feature 1', description: 'High quality and reliability.' }, { value: 'Feature 2', description: 'Affordable pricing.' }, { value: 'Feature 3', description: 'Excellent customer support.' }]}
          className="max-w-7xl"
          gridClassName="grid grid-cols-1 md:grid-cols-3 gap-6"
          itemClassName="p-6 border-r-2 border-gray-200"
          valueClassName="text-lg font-semibold"
          descriptionClassName="text-gray-500"
        />
      </section>
      <section id="contact" className="bg-white py-18">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="border rounded p-2" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="border rounded p-2" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required className="border rounded p-2" />
          <button type="submit" className="bg-[#0A5BD8] text-white p-2 rounded">Send Message</button>
        </form>
      </section>
      <footer className="bg-gray-800 text-white py-4">
        <GradientFooter items={[{ label: 'Contact Us', onClick: () => console.log('Contact Clicked') }, { label: 'Support', onClick: () => console.log('Support Clicked') }]} />
      </footer>
    </SiteThemeProvider>
  );
}