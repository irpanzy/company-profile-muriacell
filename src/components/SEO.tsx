import { Helmet } from 'react-helmet-async';

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
  description = "Muria Cellular Technology adalah penyedia layanan service HP dan laptop terpercaya di Cilacap. Menyediakan jasa perbaikan smartphone, laptop, aksesoris, dan teknologi terkini dengan tenaga ahli profesional.",
  keywords = "service hp cilacap, service laptop cilacap, reparasi hp, reparasi laptop, toko hp cilacap, aksesoris hp, muria cellular, teknologi cilacap, service smartphone, perbaikan hp profesional",
  image = "/og-image.jpg",
  url = "https://www.muriacellular.my.id",
  type = "website"
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
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
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Muria Cellular Technology" />
      <meta property="og:locale" content="id_ID" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Business Information */}
      <meta name="author" content="Muria Cellular Technology" />
      <meta name="contact" content="+62 822-2125-9658" />
      <meta name="coverage" content="Indonesia" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Muria Cellular Technology",
          "image": image,
          "description": description,
          "telephone": "+6282221259658",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Perumahan Cemara Regency, Jl. Urip Sumoharjo No.1A, Gumilir",
            "addressLocality": "Cilacap",
            "addressRegion": "Jawa Tengah",
            "postalCode": "53231",
            "addressCountry": "ID"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-7.726245",
            "longitude": "109.006523"
          },
          "url": url,
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "21:00"
            }
          ],
          "sameAs": [
            "https://instagram.com/muriacellular"
          ]
        })}
      </script>
    </Helmet>
  );
}
