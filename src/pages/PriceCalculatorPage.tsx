import PriceCalculator from "@/components/PriceCalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import SEO from "@/components/SEO";

const PriceCalculatorPage = () => {
  const calculatorStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "מחשבון מחירים - MasterStack",
    "description": "מחשבון מחירים מתקדם לחישוב עלות בניית אתר אינטרנט ופתרונות דיגיטליים",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "ILS",
      "description": "כלי חינמי לחישוב מחיר אתר"
    },
    "provider": {
      "@type": "Organization",
      "name": "MasterStack Web Solutions"
    }
  };

  return (
    <div className="min-h-screen text-white bg-transparent" dir="rtl">
      <SEO 
        title="מחשבון מחירים - MasterStack | חישוב עלות בניית אתר מדויק ומיידי"
        description="מחשבון מחירים מתקדם לחישוב מדויק של עלות בניית אתר אינטרנט. קבלו הצעת מחיר מיידית ומותאמת אישית לצרכים שלכם. חינם ללא התחייבות!"
        keywords="מחשבון מחירים, עלות בניית אתר, מחיר אתר אינטרנט, הצעת מחיר אתר, MasterStack, חישוב מחיר, בניית אתרים"
        type="website"
        image="/assets/images/calculator-og-image.jpg"
        structuredData={calculatorStructuredData}
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
            { label: "מחשבון מחיר", current: true }
          ]} 
        />
        <PriceCalculator />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PriceCalculatorPage;
