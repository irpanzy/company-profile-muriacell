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
  title = "Konter HP Cilacap Terdekat | Muria Cellular Technology",
  description = "Mencari konter terdekat di Cilacap? Muria Cellular Technology melayani service HP & laptop, penjualan gadget, aksesoris, serta konsultasi teknis di Cilacap dengan layanan cepat dan profesional.",
  keywords = "konter terdekat, konter cilacap, konter hp terdekat cilacap, toko hp cilacap, service hp cilacap, service laptop cilacap, reparasi hp cilacap, aksesoris hp cilacap, muria cellular technology, lokasi konter cilacap",
  image = "/muria-cell-logo.png",
  url = "https://www.muriacellular.my.id",
  type = "website",
}: SEOProps) {
  const absoluteImage = image.startsWith("http") ? image : `${url}${image}`;
  const instagramHandle = business.instagram.split("/").filter(Boolean).pop();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
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
    areaServed: {
      "@type": "City",
      name: "Cilacap",
    },
    sameAs: [business.instagram, `https://wa.me/${business.whatsappNumber}`],
    keywords:
      "konter terdekat, konter cilacap, service hp cilacap, service laptop cilacap",
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
    paymentAccepted: ["Cash", "Bank Transfer", "QRIS"],
    currenciesAccepted: "IDR",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: business.name,
    url,
    logo: absoluteImage,
    sameAs: [business.instagram, business.maps],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${business.whatsappNumber}`,
      contactType: "customer support",
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
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
        name: "Apakah Muria Cellular termasuk konter terdekat di Cilacap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Muria Cellular berada di Cilacap Utara dan melayani pelanggan dari seluruh wilayah Cilacap untuk service HP, laptop, serta pembelian aksesoris.",
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
      <meta name="application-name" content="Muria Cellular Technology" />

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
      <meta property="og:see_also" content={business.instagram} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={absoluteImage} />
      {instagramHandle && (
        <meta name="twitter:creator" content={`@${instagramHandle}`} />
      )}

      {/* Business Information */}
      <meta name="author" content="Muria Cellular Technology" />
      <meta name="contact" content="+62 822-2125-9658" />
      <meta name="coverage" content="Indonesia" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="id-ID" href={url} />
      <link rel="me" href={business.instagram} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
}
