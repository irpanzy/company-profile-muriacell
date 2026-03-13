import { MapPin, Phone, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/data";
import { buildWhatsappHref } from "@/lib/whatsapp";
import { motion } from "framer-motion";

const address = `Perumahan Cemara Regency, Jl. Urip Sumoharjo No.1A, Gumilir, Kec. Cilacap Utara, Kabupaten Cilacap, Jawa Tengah 53231`;

const contactVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Contact() {
  const whatsappHref = buildWhatsappHref(business.whatsappNumber);

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#355872]">
          Kontak Kami
        </h3>
        <p className="text-xs md:text-base text-gray-600 mt-2">
          Hubungi kami untuk informasi lebih lanjut
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6 md:space-y-8"
      >
        {/* Contact Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div custom={0} variants={contactVariants}>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#355872] h-full">
              <CardContent className="p-4 md:p-5 flex items-start gap-3">
                <MapPin className="text-[#355872] mt-1 flex-shrink-0 w-5 h-5" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Alamat</h4>
                  <p className="text-xs md:text-sm text-gray-700 mt-1">
                    {address}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={1} variants={contactVariants}>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-600 h-full">
              <CardContent className="p-4 md:p-5 flex flex-col items-start gap-3">
                <Phone className="text-[#355872] flex-shrink-0 w-5 h-5" />
                <div className="flex-1 w-full">
                  <h4 className="font-semibold text-sm md:text-base">
                    WhatsApp
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700 mt-1 mb-3">
                    Chat langsung dengan kami
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 w-full"
                  >
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Chat Sekarang
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={2} variants={contactVariants}>
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-pink-600 h-full">
              <CardContent className="p-4 md:p-5 flex flex-col items-start gap-3">
                <Instagram className="text-[#355872] flex-shrink-0 w-5 h-5" />
                <div className="flex-1 w-full">
                  <h4 className="font-semibold text-sm md:text-base">
                    Instagram
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700 mt-1 mb-3">
                    @muriacellular
                  </p>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full"
                  >
                    <a
                      href={business.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Kunjungi Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <iframe
                title="Muria Cellular - Map"
                src="https://www.google.com/maps?q=Perumahan+Cemara+Regency+Jl.+Urip+Sumoharjo+No.1A&output=embed"
                className="w-full h-96"
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
