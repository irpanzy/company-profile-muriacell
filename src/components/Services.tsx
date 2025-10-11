// presentational component
import { Smartphone, Plug, BatteryCharging, Headphones } from 'lucide-react'

const services = [
  { title: 'HP Baru', desc: 'Berbagai merek: Samsung, Xiaomi, Vivo, Oppo, Realme', icon: <Smartphone /> },
  { title: 'Aksesoris', desc: 'Charger, headset, casing, tempered glass, dll', icon: <Plug /> },
  { title: 'Powerbank & MMC', desc: 'Powerbank, MMC, dan Flashdisk', icon: <BatteryCharging /> },
  { title: 'Service HP', desc: 'Servis & konsultasi perangkat', icon: <Headphones /> },
]

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-blue-600">Produk & Layanan</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.title} className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="text-blue-600 mb-3">{s.icon}</div>
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
