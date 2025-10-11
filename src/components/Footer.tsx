// presentational component

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-700">© {year} Muria Cellular Technology</div>
        <div className="flex gap-4 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">Tentang Kami</a>
          <a href="#services" className="hover:underline">Produk & Layanan</a>
        </div>
      </div>
    </footer>
  )
}
