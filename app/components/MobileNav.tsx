"use client";

import { Home, Building2, Image, Users, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  //{ href: "/", icon: Home, label: "Home" },
  { href: "/residential", icon: Home, label: "Residential" },
  { href: "/commercial", icon: Building2, label: "Business" },
  { href: "/gallery", icon: Image, label: "Gallery" },
  { href: "/partners", icon: Users, label: "Partners" },
  { href: "/contact", icon: Phone, label: "Contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-50 md:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-2 px-2 rounded-lg transition-colors ${
                isActive
                  ? "text-blue-400 bg-gray-800"
                  : "text-gray-100 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
