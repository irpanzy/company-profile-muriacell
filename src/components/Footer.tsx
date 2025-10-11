export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 font-medium">© {year} Muria Cellular Technology</div>
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:underline hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hover:underline hover:text-blue-600 transition-colors">Tentang Kami</a>
          <a href="#services" className="hover:underline hover:text-blue-600 transition-colors">Produk & Layanan</a>
          <a href="#contact" className="hover:underline hover:text-blue-600 transition-colors">Kontak</a>
        </div>
      </div>
    </footer>
  )
}
