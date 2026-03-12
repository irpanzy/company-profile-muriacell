import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Props = { whatsappHref: string };

export default function Hero({ whatsappHref }: Props) {
  return (
    <section id="home" className="bg-gradient-to-b from-[#355872]/10 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#355872]">
            Your Trusted Gadget Partner
          </h2>
          <p className="mt-4 text-gray-700">
            Muria Cellular Technology menyediakan HP, aksesoris, voucher pulsa,
            powerbank, dan layanan service yang cepat dan terpercaya.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#355872] text-[#355872] hover:bg-[#355872]/10 active:scale-95"
            >
              <a href="#services">Cek Produk</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 active:scale-95"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Chat via WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="w-full h-64 md:h-80 bg-gradient-to-br from-[#355872]/20 to-[#355872]/10 rounded-2xl overflow-hidden shadow-xl relative group">
            <img
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80"
              alt="Muria Cellular Technology - Produk"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#355872]/70 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg drop-shadow-lg">
                Produk Terpercaya & Bergaransi
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
