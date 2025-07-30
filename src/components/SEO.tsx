import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

const SEO = ({
  title = "MasterStack Web Solutions - פתרונות דיגיטליים מקצועיים",
  description = "MasterStack מספקת שירותי בניית אתרים, תיקון אתרים, SEO, ושיווק דיגיטלי מתקדם. פתרונות מותאמים אישית לעסקים בישראל. ניסיון של 5+ שנים עם תמיכה 24/7.",
  keywords = "בניית אתרים, תיקון אתרים, SEO, שיווק דיגיטלי, עיצוב אתרים, פיתוח אתרים, ישראל, הרצליה, MasterStack, אבטחת אתרים, תחזוקת אתרים",
  image = "/assets/images/masterstack-og-image.jpg",
  type = "website",
  author = "Shahar Maoz - MasterStack",
  publishedTime,
  modifiedTime,
  canonical,
  noindex = false,
  nofollow = false,
  structuredData
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://master-stack.com${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;
  
  const fullTitle = title.includes('MasterStack') 
    ? title 
    : `${title} | MasterStack Web Solutions`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MasterStack Web Solutions",
    "url": "https://master-stack.com",
    "logo": "https://master-stack.com/assets/images/logo.png",
    "description": "חברת פיתוח אתרים ופתרונות דיגיטליים מקצועית בישראל",
    "founder": {
      "@type": "Person",
      "name": "Shahar Maoz"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "הרצליה",
      "addressCountry": "IL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+972-52-534-7274",
      "contactType": "customer service",
      "email": "admin@master-stack.com",
      "availableLanguage": ["Hebrew", "English"]
    },
    "sameAs": [
      "https://wa.me/972525347274"
    ],
    "areaServed": "IL",
    "serviceType": ["Web Development", "SEO", "Digital Marketing", "Website Maintenance"]
  };

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang for multilingual */}
      <link rel="alternate" hrefLang="he" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl.replace('/he/', '/en/')} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image.startsWith('http') ? image : `https://master-stack.com${image}`} />
      <meta property="og:image:alt" content={`${title} - MasterStack Web Solutions`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="MasterStack Web Solutions" />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Article specific OG tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Technology" />
          <meta property="article:tag" content="Web Development" />
          <meta property="article:tag" content="SEO" />
          <meta property="article:tag" content="Digital Marketing" />
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@masterstack_il" />
      <meta name="twitter:creator" content="@shaharmh" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `https://master-stack.com${image}`} />
      <meta name="twitter:image:alt" content={`${title} - MasterStack Web Solutions`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="application-name" content="MasterStack" />
      <meta name="apple-mobile-web-app-title" content="MasterStack" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IL" />
      <meta name="geo.placename" content="Herzliya, Israel" />
      <meta name="geo.position" content="32.1624;34.8444" />
      <meta name="ICBM" content="32.1624, 34.8444" />
      
      {/* Language and Content */}
      <meta httpEquiv="content-language" content="he" />
      <meta name="language" content="Hebrew" />
      
      {/* Copyright and Rating */}
      <meta name="copyright" content="© 2025 MasterStack Web Solutions. All rights reserved." />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.whatsapp.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//google-analytics.com" />
      <link rel="dns-prefetch" href="//googletagmanager.com" />
      <link rel="dns-prefetch" href="//facebook.com" />
      
      {/* Alternate versions */}
      <link rel="alternate" type="application/rss+xml" title="MasterStack Blog RSS" href="/rss.xml" />
      <link rel="alternate" type="application/json" title="MasterStack JSON Feed" href="/feed.json" />
    </Helmet>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;