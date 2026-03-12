import { MapPin, Phone, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/data";

const address = `Perumahan Cemara Regency, Jl. Urip Sumoharjo No.1A, Gumilir, Kec. Cilacap Utara, Kabupaten Cilacap, Jawa Tengah 53231`;

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold text-blue-600">Kontak Kami</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Card className="hover:shadow-md transition-all">
            <CardContent className="p-4 flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Alamat</h4>
                <p className="text-sm text-gray-700 mt-1">{address}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardContent className="p-4 flex items-start gap-3">
              <Phone className="text-blue-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-sm text-gray-700 mt-1 mb-2">
                  Chat langsung dengan kami
                </p>
                <Button
                  asChild
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <a
                    href={`https://wa.me/${business.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat Sekarang
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardContent className="p-4 flex items-start gap-3">
              <Instagram className="text-blue-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold">Instagram</h4>
                <p className="text-sm text-gray-700 mt-1 mb-2">
                  @muriacellular
                </p>
                <Button asChild size="sm" variant="outline">
                  <a href={business.instagram} target="_blank" rel="noreferrer">
                    Kunjungi Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0 h-full">
            <iframe
              title="Muria Cellular - Map"
              src="https://www.google.com/maps?q=Perumahan+Cemara+Regency+Jl.+Urip+Sumoharjo+No.1A&output=embed"
              className="w-full h-96 md:h-full min-h-[384px]"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
