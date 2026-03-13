import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type Props = { whatsappHref: string };

export default function Navbar({ whatsappHref }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#services", label: "Produk & Layanan" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="p-2 rounded-lg">
              <img
                src="/muria-cell-logo.png"
                alt="Logo Muria Cellular"
                className="w-10 md:w-12 h-10 md:h-12 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#355872] font-bold text-sm md:text-lg leading-tight">
                Muria Cellular
              </span>
              <span className="text-gray-500 text-[8px] md:text-[10px] leading-tight">
                Technology
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#355872] hover:bg-[#355872]/10 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-[#355872] hover:bg-[#2A4659] active:scale-95 shadow-sm"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer noopener">
                <Phone size={16} /> Hubungi Kami
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              asChild
              size="icon-sm"
              variant="ghost"
              className="md:hidden"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer noopener">
                <Phone size={18} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#355872] hover:bg-[#355872]/10 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-[#355872] hover:bg-[#2A4659]"
                >
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Phone size={16} /> Hubungi Kami via WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
