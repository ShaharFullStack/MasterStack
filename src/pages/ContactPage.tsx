import AdvancedContact from "@/components/AdvancedContact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import PageBackground from "@/components/PageBackground";
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
    <PageBackground showVideo={false}>
      <SEO 
        title="צור קשר - MasterStack Web Solutions | ייעוץ חינם ופתרונות דיגיטליים"
        description="צור קשר עם MasterStack לקבלת ייעוץ חינם ופתרונות דיגיטליים מקצועיים. WhatsApp: 052-534-7274, מייל: admin@master-stack.com. תמיכה 24/7 ומענה מהיר לכל פניותיכם."
        keywords="צור קשר, ייעוץ חינם, MasterStack, בניית אתרים, פתרונות דיגיטליים, הרצליה, ישראל, טלפון, WhatsApp, מייל"
        type="website"
        image="/assets/images/contact-og-image.jpg"
        structuredData={contactStructuredData}
      />
      
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
    </PageBackground>
  );
};

export default ContactPage;
