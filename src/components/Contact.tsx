// presentational component
import { MapPin, Phone, Instagram } from 'lucide-react'

const address = `Perumahan Cemara Regency, Jl. Urip Sumoharjo No.1A, Gumilir, Kec. Cilacap Utara, Kabupaten Cilacap, Jawa Tengah 53231`

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-blue-600">Kontak Kami</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="text-blue-600" />
            <div>
              <h4 className="font-semibold">Alamat</h4>
              <p className="text-sm text-gray-700">{address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-blue-600" />
            <div>
              <h4 className="font-semibold">WhatsApp</h4>
              <p className="text-sm text-gray-700">Klik tombol WhatsApp untuk chat cepat</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Instagram className="text-blue-600" />
            <div>
              <h4 className="font-semibold">Instagram</h4>
              <p className="text-sm text-gray-700">@muriacellular</p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-64 bg-gray-100 rounded-lg">
            <iframe title="Muria Cellular - Map" src="https://www.google.com/maps?q=Perumahan+Cemara+Regency+Jl.+Urip+Sumoharjo+No.1A&output=embed" className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
