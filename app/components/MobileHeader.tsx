"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Logo from "./Logo";

export default function MobileHeader() {
  return (
    <header className="md:hidden bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Contact Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-blue-400 hover:bg-blue-300 transition-colors"
            >
              <Phone size={16} className="mr-2" />
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
