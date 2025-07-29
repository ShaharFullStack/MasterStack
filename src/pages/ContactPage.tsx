import AdvancedContact from "@/components/AdvancedContact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import SEO from "@/components/SEO";

const ContactPage = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "צור קשר - MasterStack Web Solutions",
    "description": "צור קשר עם MasterStack לקבלת ייעוץ חינם ופתרונות דיגיטליים מקצועיים",
    "mainEntity": {
      "@type": "Organization",
      "name": "MasterStack Web Solutions",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+972-52-534-7274",
        "contactType": "customer service",
        "email": "admin@master-stack.com",
        "availableLanguage": ["Hebrew", "English"],
        "hoursAvailable": "Mo-Th 08:00-21:00"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "הרצליה",
        "addressCountry": "IL"
      }
    }
  };

  return (
    <div className="min-h-screen text-white bg-transparent" dir="rtl">
      <SEO 
        title="צור קשר - MasterStack Web Solutions | ייעוץ חינם ופתרונות דיגיטליים"
        description="צור קשר עם MasterStack לקבלת ייעוץ חינם ופתרונות דיגיטליים מקצועיים. WhatsApp: 052-534-7274, מייל: admin@master-stack.com. תמיכה 24/7 ומענה מהיר לכל פניותיכם."
        keywords="צור קשר, ייעוץ חינם, MasterStack, בניית אתרים, פתרונות דיגיטליים, הרצליה, ישראל, טלפון, WhatsApp, מייל"
        type="website"
        image="/assets/images/contact-og-image.jpg"
        structuredData={contactStructuredData}
      />
      {/* Background Video with same style as Index.tsx */}
      <video 
        className="fixed inset-0 w-full h-full object-cover -z-40 brightness-[0.3]"
        autoPlay 
        muted 
        loop 
        playsInline
        aria-hidden="true"
      >
        <source src="/assets/videos/background.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback background image */}
      <div 
        className="fixed inset-0 w-full h-full -z-50"
        style={{
          backgroundImage: 'url(/assets/images/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      ></div>
      
      <Header />
      <AccessibilityMenu />
      <div className="relative z-10">
        <Breadcrumbs 
          items={[
            { label: "צור קשר", current: true }
          ]} 
        />
        <AdvancedContact />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ContactPage;
