import { Phone } from 'lucide-react'

type Props = { whatsappHref: string }

export default function Navbar({ whatsappHref }: Props) {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-blue-600 font-bold text-lg">Muria Cellular Technology</div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">Tentang Kami</a>
          <a href="#services" className="hover:underline">Produk & Layanan</a>
          <a href="#contact" className="hover:underline">Kontak</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">
            <Phone size={16} /> Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  )
}
