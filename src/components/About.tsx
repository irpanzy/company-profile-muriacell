import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const features = [
  {
    title: "Produk Bergaransi",
    desc: "HP baru dari berbagai merek dengan garansi resmi.",
    icon: CheckCircle2,
  },
  {
    title: "Pelayanan Cepat & Ramah",
    desc: "Tim ahli kami siap membantu permasalahan perangkat Anda.",
    icon: Users,
  },
  {
    title: "Harga Bersaing",
    desc: "Penawaran terbaik untuk kebutuhan gadget Anda.",
    icon: TrendingDown,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#355872]">
          Tentang Kami
        </h3>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
          Muria Cellular Technology adalah toko yang melayani penjualan HP,
          aksesoris, voucher pulsa, MMC & flashdisk, powerbank, serta layanan
          service dan konsultasi perangkat. Kami hadir untuk memberikan produk
          bergaransi, pelayanan cepat & ramah, dan harga bersaing.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
      >
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div key={feature.title} custom={i} variants={cardVariants}>
              <Card className="transition-all duration-300 hover:shadow-lg hover:border-[#355872]/50 h-full">
                <CardContent className="p-4 md:p-6">
                  <Icon className="text-[#355872] mb-3 w-6 h-6" />
                  <h4 className="font-semibold text-sm md:text-base">
                    {feature.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-2">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
