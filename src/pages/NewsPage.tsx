import NewsUpdates from "@/components/NewsUpdates";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const NewsPage = () => {
  return (
    <div className="min-h-screen text-white bg-transparent" dir="rtl">
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
      <div className="relative z-10">
        <Breadcrumbs 
          items={[
            { label: "חדשות ועדכונים", current: true }
          ]} 
        />
        <NewsUpdates />
      </div>
      <FloatingWhatsApp />
    </div>
  );
};

export default NewsPage;
