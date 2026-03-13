import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Props = { whatsappHref: string };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Hero({ whatsappHref }: Props) {
  return (
    <section id="home" className="bg-gradient-to-b from-[#355872]/10 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-20 flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-[#355872]"
          >
            Your Trusted Gadget Partner
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-2 md:mt-4 text-sm md:text-base text-gray-700"
          >
            Muria Cellular Technology menyediakan HP, aksesoris, voucher pulsa,
            powerbank, dan layanan service yang cepat dan terpercaya.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-4 md:mt-6 flex gap-2 md:gap-3 flex-col sm:flex-row"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#355872] text-[#355872] hover:bg-[#355872]/10 active:scale-95 w-full sm:w-auto"
            >
              <a href="#services">Cek Produk</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 active:scale-95 w-full sm:w-auto"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer noopener">
                Chat via WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="w-full h-48 md:h-80 bg-gradient-to-br from-[#355872]/20 to-[#355872]/10 rounded-2xl overflow-hidden shadow-xl relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80"
              alt="Muria Cellular Technology - Produk"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#355872]/70 to-transparent flex items-end p-4 md:p-6">
              <p className="text-white font-semibold text-sm md:text-lg drop-shadow-lg">
                Produk Terpercaya & Bergaransi
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
