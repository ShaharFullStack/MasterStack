import NewsUpdates from "@/components/NewsUpdates";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import SEO from "@/components/SEO";

const NewsPage = () => {
  const newsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "חדשות וטרנדים דיגיטליים - MasterStack",
    "description": "עדכונים חדשים בעולם הטכנולוגיה, טרנדים בבניית אתרים ומדריכים מקצועיים",
    "publisher": {
      "@type": "Organization",
      "name": "MasterStack Web Solutions"
    },
    "inLanguage": "he"
  };

  return (
    <div className="min-h-screen text-white bg-transparent" dir="rtl">
      <SEO 
        title="חדשות וטרנדים דיגיטליים - MasterStack | עדכונים מעולם הטכנולוגיה"
        description="עקבו אחר החדשות והטרנדים האחרונים בעולם הטכנולוגיה והאינטרנט. מדריכים מקצועיים, טיפים לבניית אתרים ועדכונים על SEO ושיווק דיגיטלי מ-MasterStack."
        keywords="חדשות טכנולוגיה, טרנדים דיגיטליים, בניית אתרים, SEO, שיווק דיגיטלי, מדריכים, MasterStack, עדכונים"
        type="website"
        image="/assets/images/news-og-image.jpg"
        structuredData={newsStructuredData}
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
            { label: "חדשות ועדכונים", current: true }
          ]} 
        />
        <NewsUpdates />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default NewsPage;
