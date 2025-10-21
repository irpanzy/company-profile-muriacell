import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

type Props = { whatsappHref: string }

export default function Hero({ whatsappHref }: Props) {
  return (
    <section id="home" className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">Your Trusted Gadget Partner</h2>
          <p className="mt-4 text-gray-700">Muria Cellular Technology menyediakan HP, aksesoris, voucher pulsa, powerbank, dan layanan service yang cepat dan terpercaya.</p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95">
              <a href="#services">Cek Produk</a>
            </Button>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 active:scale-95">
              <a href={whatsappHref} target="_blank" rel="noreferrer">Chat via WhatsApp</a>
            </Button>
          </div>
        </motion.div>
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1">
          <div className="w-full h-64 md:h-80 bg-gray-100 rounded-lg flex items-center justify-center border border-dashed">
            <span className="text-gray-400">[Placeholder gambar produk / toko]</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
