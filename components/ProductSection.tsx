'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LayoutDashboard, Globe, Activity, ExternalLink } from 'lucide-react';
import buildForgeLogo from '@/logo-buildforge.jpg';
import squadranLogo from '@/logo-squadran.jpg';

// Custom Icon Component for BuildForge
const BuildForgeIcon = ({ className }: { className?: string }) => (
  <img
    src={buildForgeLogo}
    alt="BuildForge Logo"
    className={`${className} object-cover`}
  />
);

// Product Type Definition
type Product = {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  color: string;
};

// Product Data
const products: Product[] = [
  {
    id: 1,
    name: "Nexora",
    description: "Where Digital Campuses Become Future-Ready.Delivering a Unified, Agile Digital Ecosystem that replaces fragmented apps with one secure environment.",
    icon: LayoutDashboard,
    link: "https://nexora-rho-blond.vercel.app/",
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: 2,
    name: "Fluxo",
    description: "Making event management very easy",
    icon: Globe,
    link: "https://fluxo-blue.vercel.app/",
    color: "from-purple-400 to-pink-300"
  },
  {
    id: 3,
    name: "BuildForge",
    description: "Where ideas are forged into products.",
    icon: BuildForgeIcon,
    link: "https://build-forge-five.vercel.app/",
    color: "from-sky-400 to-blue-300"
  },
  {
    id: 4,
    name: "Propel",
    description: "Real-time insights at your fingertips. Visualize campus trends, attendance, and engagement metrics with our powerful analytics engine.",
    icon: Activity,
    link: "#pulse",
    color: "from-emerald-400 to-teal-300"
  }
];

export function ProductShowcase() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="flex flex-col items-center mb-16 space-y-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center overflow-hidden mb-2">
            <img
              src={squadranLogo}
              alt="Squadran Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
            Our Ecosystem
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-neutral-400 max-w-2xl text-sm md:text-base px-4">
            A suite of interconnected tools designed to modernize every aspect of campus life, from administration to student life.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <a
            key={product.id}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="h-full">
                <Card className="h-full bg-black/40 border-neutral-800 backdrop-blur-sm hover:bg-neutral-900/60 hover:border-neutral-700 transition-all duration-300 relative overflow-hidden">
                  {/* Hover Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900/50 border border-neutral-800 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center overflow-hidden">
                      <div className={product.name === 'BuildForge' ? 'w-full h-full p-0' : 'p-3'}>
                        <product.icon className={`${product.name === 'BuildForge' ? 'w-full h-full object-cover' : 'w-6 h-6'} text-neutral-200 group-hover:text-white transition-colors`} />
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-neutral-600 group-hover:text-neutral-300 transition-colors" />
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardTitle className="text-xl text-neutral-100 mb-3 group-hover:text-white transition-colors">
                      {product.name}
                    </CardTitle>
                    <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function ProductWave() {
  return (
    <section className="w-full py-24 border-t border-neutral-900/50">
      <div className="flex flex-col items-center justify-center space-y-16">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium">
          Explore the Suite
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 px-4">
          {products.map((product, index) => (
            <a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
                whileHover={{ scale: 1.1, y: 0, transition: { duration: 0.2 } }}
              >
                {/* Glow behind */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full`} />

                <div className="relative bg-neutral-900 w-16 h-16 rounded-2xl border border-neutral-800 shadow-2xl group-hover:border-neutral-600 transition-colors flex items-center justify-center overflow-hidden">
                  <div className={product.name === 'BuildForge' ? 'w-full h-full p-0' : 'p-4'}>
                    <product.icon className={`${product.name === 'BuildForge' ? 'w-full h-full object-cover' : 'w-8 h-8'} text-neutral-400 group-hover:text-white transition-colors`} />
                  </div>
                </div>

                {/* Tooltip-ish text */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-medium text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {product.name}
                </span>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
