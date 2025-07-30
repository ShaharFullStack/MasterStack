import NewsUpdates from "@/components/NewsUpdates";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import PageBackground from "@/components/PageBackground";
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
    <PageBackground showVideo={false}>
      <SEO 
        title="חדשות וטרנדים דיגיטליים - MasterStack | עדכונים מעולם הטכנולוגיה"
        description="עקבו אחר החדשות והטרנדים האחרונים בעולם הטכנולוגיה והאינטרנט. מדריכים מקצועיים, טיפים לבניית אתרים ועדכונים על SEO ושיווק דיגיטלי מ-MasterStack."
        keywords="חדשות טכנולוגיה, טרנדים דיגיטליים, בניית אתרים, SEO, שיווק דיגיטלי, מדריכים, MasterStack, עדכונים"
        type="website"
        image="/assets/images/news-og-image.jpg"
        structuredData={newsStructuredData}
      />
      <Header />
      <AccessibilityMenu />
      <div className="relative z-10">

        <NewsUpdates />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </PageBackground>
  );
};

export default NewsPage;
