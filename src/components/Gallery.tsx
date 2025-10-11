// presentational component

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-blue-600">Galeri</h3>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Foto {i + 1}</div>
        ))}
      </div>
    </section>
  )
}
