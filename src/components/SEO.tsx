import { Helmet } from "react-helmet-async";
import { business } from "@/lib/data";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "Muria Cellular Technology - Service HP & Laptop Profesional di Cilacap",
  description = "Muria Cellular Technology melayani service HP, penjualan gadget, aksesoris, dan konsultasi teknis di Cilacap. Tersedia juga fitur Muria Assistant untuk bantu tanya lokasi, jam operasional, produk, dan layanan.",
  keywords = "service hp cilacap, service laptop cilacap, reparasi hp, reparasi laptop, toko hp cilacap, aksesoris hp, muria cellular, teknologi cilacap, service smartphone, perbaikan hp profesional, chatbot muria assistant, lokasi muria cellular",
  image = "/muria-cell-logo.png",
  url = "https://www.muriacellular.my.id",
  type = "website",
}: SEOProps) {
  const absoluteImage = image.startsWith("http") ? image : `${url}${image}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: business.name,
    image: absoluteImage,
    description,
    url,
    telephone: `+${business.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Perumahan Cemara Regency, Jl. Urip Sumoharjo No.1A, Gumilir",
      addressLocality: "Cilacap",
      addressRegion: "Jawa Tengah",
      postalCode: "53231",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-7.726245",
      longitude: "109.006523",
    },
    hasMap: business.maps,
    sameAs: [business.instagram, `https://wa.me/${business.whatsappNumber}`],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${business.whatsappNumber}`,
      contactType: "customer service",
      availableLanguage: ["id", "en"],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    url,
    name: business.name,
    inLanguage: "id-ID",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Lokasi toko Muria Cellular di mana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Perumahan Cemara Regency, Jl. Urip Sumoharjo No.1A, Gumilir, Kec. Cilacap Utara, Kabupaten Cilacap, Jawa Tengah 53231.",
        },
      },
      {
        "@type": "Question",
        name: "Jam operasional Muria Cellular?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Senin sampai Minggu buka pukul 09:00 sampai 21:00.",
        },
      },
      {
        "@type": "Question",
        name: "Apa fungsi Muria Assistant di website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Muria Assistant membantu pengunjung menanyakan produk, layanan service, jam operasional, dan lokasi toko secara cepat.",
        },
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#355872" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Language & Location */}
      <meta name="language" content="Indonesian" />
      <meta name="geo.region" content="ID-JT" />
      <meta name="geo.placename" content="Cilacap" />
      <meta name="geo.position" content="-7.726245;109.006523" />
      <meta name="ICBM" content="-7.726245, 109.006523" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content="Muria Cellular Technology" />
      <meta property="og:site_name" content="Muria Cellular Technology" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={absoluteImage} />

      {/* Business Information */}
      <meta name="author" content="Muria Cellular Technology" />
      <meta name="contact" content="+62 822-2125-9658" />
      <meta name="coverage" content="Indonesia" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="id-ID" href={url} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
}
