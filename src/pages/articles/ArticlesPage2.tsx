import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageBackground from "@/components/PageBackground";

const BusinessWebsiteGuide = () => {
  return (
    <PageBackground showVideo={false}>
      <Header />
      <AccessibilityMenu />
      
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            מאמרים
          </h1>
          <p className="text-xl text-gray-300 text-center mt-6">
            בקרוב - מאמרים חדשים ומעניינים
          </p>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </PageBackground>
  );
};

export default BusinessWebsiteGuide;