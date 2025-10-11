// presentational component

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-blue-600">Tentang Kami</h3>
      <p className="mt-4 text-gray-700">Muria Cellular Technology adalah toko yang melayani penjualan HP, aksesoris, voucher pulsa, MMC & flashdisk, powerbank, serta layanan service dan konsultasi perangkat. Kami hadir untuk memberikan produk bergaransi, pelayanan cepat & ramah, dan harga bersaing.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <h4 className="font-semibold">Produk Bergaransi</h4>
          <p className="text-sm text-gray-600 mt-2">HP baru dari berbagai merek dengan garansi resmi.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h4 className="font-semibold">Pelayanan Cepat & Ramah</h4>
          <p className="text-sm text-gray-600 mt-2">Tim ahli kami siap membantu permasalahan perangkat Anda.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h4 className="font-semibold">Harga Bersaing</h4>
          <p className="text-sm text-gray-600 mt-2">Penawaran terbaik untuk kebutuhan gadget Anda.</p>
        </div>
      </div>
    </section>
  )
}
