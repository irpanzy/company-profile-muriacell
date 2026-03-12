import { Card } from "@/components/ui/card";

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
      <h3 className="text-2xl font-bold text-blue-600">Galeri</h3>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card
            key={i}
            className="h-32 bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            <span className="text-sm">Foto {i + 1}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
