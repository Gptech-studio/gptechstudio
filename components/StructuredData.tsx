export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GPTech Studio",
    "description": "Agenzia di sviluppo web e digital marketing specializzata in siti web moderni, e-commerce e campagne pubblicitarie.",
    "url": "https://gptechstudio.vercel.app",
    "logo": "https://gptechstudio.vercel.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-123-456-7890",
      "contactType": "customer service",
      "areaServed": "IT",
      "availableLanguage": "Italian"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IT"
    },
    "sameAs": [
      "https://linkedin.com/company/gptechstudio",
      "https://twitter.com/gptechstudio",
      "https://instagram.com/gptechstudio"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "category": "Web Development & Digital Marketing Services",
      "priceCurrency": "EUR",
      "lowPrice": "500",
      "highPrice": "50000",
      "offerCount": "6"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Sviluppo Web",
        "description": "Creazione di siti web moderni e responsive",
        "provider": {
          "@type": "Organization",
          "name": "GPTech Studio"
        }
      },
      {
        "@type": "Service", 
        "name": "Digital Marketing",
        "description": "Campagne pubblicitarie su Google, Facebook e social media",
        "provider": {
          "@type": "Organization",
          "name": "GPTech Studio"
        }
      },
      {
        "@type": "Service",
        "name": "SEO & SEM",
        "description": "Ottimizzazione per motori di ricerca e marketing sui motori di ricerca",
        "provider": {
          "@type": "Organization",
          "name": "GPTech Studio"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
