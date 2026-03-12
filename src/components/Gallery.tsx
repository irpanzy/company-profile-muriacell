import { Card } from "@/components/ui/card";
import { useState } from "react";

const galleryImages = [
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-blue-600">Galeri</h3>
          <p className="text-gray-600 mt-2">Koleksi produk dan layanan kami</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((image, i) => (
            <Card
              key={i}
              className="h-40 bg-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all cursor-pointer group"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                loading="lazy"
              />
            </Card>
          ))}
        </div>
      </section>

      {/* Modal untuk preview gambar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
