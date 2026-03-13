import { Smartphone, Plug, BatteryCharging, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "HP Baru",
    desc: "Berbagai merek: Samsung, Xiaomi, Vivo, Oppo, Realme",
    icon: Smartphone,
  },
  {
    title: "Aksesoris",
    desc: "Charger, headset, casing, tempered glass, dll",
    icon: Plug,
  },
  {
    title: "Powerbank & MMC",
    desc: "Powerbank, MMC, dan Flashdisk",
    icon: BatteryCharging,
  },
  {
    title: "Service HP",
    desc: "Servis & konsultasi perangkat",
    icon: Headphones,
  },
];

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#355872]">
          Produk & Layanan
        </h3>
        <p className="text-xs md:text-base text-gray-600 mt-2">
          Solusi lengkap untuk kebutuhan gadget Anda
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={s.title} custom={i} variants={serviceVariants}>
              <Card className="transition-all duration-300 hover:shadow-xl hover:border-[#355872]/30 cursor-pointer h-full">
                <CardContent className="p-4 md:p-6">
                  <Icon className="text-[#355872] mb-3 w-6 md:w-8 h-6 md:h-8" />
                  <h4 className="font-semibold text-sm md:text-base">
                    {s.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-2">
                    {s.desc}
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
