import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Users, TrendingDown } from 'lucide-react'

const features = [
  { title: 'Produk Bergaransi', desc: 'HP baru dari berbagai merek dengan garansi resmi.', icon: CheckCircle2 },
  { title: 'Pelayanan Cepat & Ramah', desc: 'Tim ahli kami siap membantu permasalahan perangkat Anda.', icon: Users },
  { title: 'Harga Bersaing', desc: 'Penawaran terbaik untuk kebutuhan gadget Anda.', icon: TrendingDown },
]

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-blue-600">Tentang Kami</h3>
      <p className="mt-4 text-gray-700">Muria Cellular Technology adalah toko yang melayani penjualan HP, aksesoris, voucher pulsa, MMC & flashdisk, powerbank, serta layanan service dan konsultasi perangkat. Kami hadir untuk memberikan produk bergaransi, pelayanan cepat & ramah, dan harga bersaing.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title} className="transition-all hover:shadow-md hover:border-blue-200">
              <CardContent className="p-6">
                <Icon className="text-blue-600 mb-2 w-6 h-6" />
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
