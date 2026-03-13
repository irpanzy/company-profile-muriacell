import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  url: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    alt: "Koleksi Smartphone",
  },
  {
    url: "https://cdn.rakyatku.com/images/1623923272foto2.jpg",
    alt: "Accessories HP",
  },
  {
    url: "https://img.lazcdn.com/g/p/595492c5ce6eb37716d2370ca5450e40.jpg_960x960q80.jpg_.webp",
    alt: "Charger & Kabel",
  },
  {
    url: "https://images.samsung.com/is/image/samsung/assets/id/explore/entertainment/affordable-samsung-nfc-phones/hp-nfc-termurah-samsung-mo_720x405.jpg?$720_N_JPG$",
    alt: "Powerbank",
  },
  {
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    alt: "Headphone & Audio",
  },
  {
    url: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400&q=80",
    alt: "Casing HP",
  },
  {
    url: "https://cdn.linkumkm.id/uploads/library/4/0/1/7/8/40178_840x576.jpg",
    alt: "Smartwatch",
  },
  {
    url: "https://pegastore.id/media/product/produk-1757905700.jpg",
    alt: "Tempat Usaha",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedImage && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [selectedImage]);

  return (
    <>
      <section
        id="gallery"
        className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 bg-gray-50"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#355872]">
            Galeri
          </h3>
          <p className="text-xs md:text-base text-gray-600 mt-2">
            Koleksi produk dan layanan kami
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4"
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                },
              }}
            >
              <Card
                className="h-32 md:h-40 bg-gray-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer group rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                  loading="lazy"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Modal untuk preview gambar */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            ref={dialogRef}
            onClick={() => setSelectedImage(null)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setSelectedImage(null);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
