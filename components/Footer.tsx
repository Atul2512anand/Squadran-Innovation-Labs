'use client'

import React from 'react';
import { Mail, MapPin, MessageSquare, Github, Twitter, Linkedin } from 'lucide-react';
import squadranLogo from '@/logo-squadran.jpg';

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-1 w-16 h-16 flex items-center justify-center overflow-hidden mb-6">
                <img
                  src={squadranLogo}
                  alt="Squadran Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                Contact Us
              </h3>
              <p className="text-neutral-400 max-w-md leading-relaxed">
                Ready to transform your campus? Reach out to our team to schedule a demo or discuss your specific needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:hello@squadran.com" className="hover:text-white transition-colors">
                  operations@squadrancampus.in
                </a>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Innovation Hub, Tech City</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Embed Placeholder */}
          <div className="w-full">
            <div className="w-full h-full min-h-[300px] rounded-2xl border-2 border-dashed border-neutral-800 bg-neutral-900/20 flex flex-col items-center justify-center p-8 text-center hover:border-neutral-700 transition-colors group">

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-neutral-500" />
              </div>

              <h4 className="text-lg font-medium text-neutral-200 mb-2">
                Form Placeholder
              </h4>

              <p className="text-sm text-neutral-500 max-w-xs mx-auto mb-6">
                This area is ready for your Google Form, Typeform, or custom contact widget.
              </p>

              {/* Code Snippet Visual Hint */}
              <div className="w-full max-w-[280px] bg-neutral-950 rounded-lg p-3 border border-neutral-900 text-left">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <code className="text-[10px] text-neutral-600 font-mono block">
                  &lt;iframe src="..." /&gt;
                </code>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Squadran Innovation Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
