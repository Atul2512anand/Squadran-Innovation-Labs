import React from 'react';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { ProductShowcase, ProductWave } from './components/ProductSection';
import { Footer } from './components/Footer';
import { ShootingStarsBackground } from './components/ShootingStarsBackground';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden selection:bg-neutral-800 flex flex-col">
       <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-16 md:space-y-32 flex-grow">
         {/* Background Effects */}
       <ShootingStarsBackground />
          {/* Hero Section */}
          <section className="pt-8 animate-in fade-in zoom-in duration-700">
            <SplineSceneBasic />
          </section>
          
          {/* Product Showcase */}
          <ProductShowcase />
          
          {/* Floating Wave Footer */}
          <ProductWave />
       </div>
       
       {/* Contact & Footer Section */}
       <Footer />
    </main>
  );
}
