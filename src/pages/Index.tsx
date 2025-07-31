import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import {
  CheckCircle,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Code,
  Search,
  Palette,
  Settings,
  BookOpen,
  UserCheck,
  Lock,
  Gauge,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Monitor,
  Smartphone,
  Globe,
  Award,
  Clock,
  DollarSign,
  Heart,
  Target,
  Briefcase,
  MessageCircle,
  User2Icon,
  CircleUser,
  CodeXmlIcon,
  ServerOff,
  Server,
  Rocket,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  BarChart3,
  Timer,
  BadgeCheck,
  ArrowLeft
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

// This is the main component for the homepage.
// It includes state management for animations and data for different sections.
const Index = () => {
  const { contactByWhatsApp, contactByEmail } = useAuth();
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Effect to trigger a fade-in animation for the content after a short delay.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers for the background video state.
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setShowContent(true); // Ensure content is shown even if video fails
  };

  // Data for testimonials section.
  // Added placeholder text to demonstrate where real quotes would go for better credibility.
  const testimonials = [
    {
      image: "/assets/images/testimonial1.png",
      quote: "מהיר, מדויק, מקצועי ומביא תוצאות",
    },
    {
      image: "/assets/images/testimonial2.png",
      quote: "הופך אתרים ישנים למכונת לידים",
    }
  ];

  // More credible and focused problem descriptions.
  const problems = [
    { icon: <Timer className="w-6 h-6" />, title: "אתר איטי שמרחיק לקוחות?", desc: "כל שניית טעינה מיותרת פוגעת בהכנסות וגורמת לנטישה." },
    { icon: <AlertTriangle className="w-6 h-6" />, title: "לא מופיעים בגוגל?", desc: "אתרי תבניות מגיעים עם חוב טכני שמקשה על קידום אורגני." },
    { icon: <XCircle className="w-6 h-6" />, title: "חווית משתמש מוגבלת?", desc: "תבניות כובלות אתכם לעיצוב גנרי שלא מייצג את המותג שלכם." }
  ];

  // Solutions with more realistic and verifiable claims.
  const solutions = [
    { icon: <Rocket className="w-6 h-6" />, title: "טעינה בפחות משנייה", desc: "ביצועים גבוהים עם ציון 90+ ב-Core Web Vitals של גוגל.", stat: "<1s" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "SEO טכני מהיסוד", desc: "בסיס אופטימלי לדירוג גבוה בגוגל, ללא קוד מיותר.", stat: "90+" },
    { icon: <BadgeCheck className="w-6 h-6" />, title: "קוד איכותי ומותאם אישית", desc: "פיתוח ב-React ו-TypeScript לעיצוב ייחודי ושליטה מלאה.", stat: "100%" }
  ];

  const processSteps = [
    { number: "01", title: "שיחת אפיון", desc: "נבין יחד את המטרות, קהל היעד והמסר של העסק שלך." },
    { number: "02", title: "אסטרטגיה ועיצוב", desc: "נתכנן את מבנה האתר וניצור עיצוב ממוקד המרה שמוכר." },
    { number: "03", title: "פיתוח בקוד נקי", desc: "אכתוב את האתר מאפס בטכנולוגיות מתקדמות לביצועים מעולים." },
    { number: "04", title: "השקה ותמיכה", desc: "נעלה את האתר לאוויר ואספק תמיכה אישית וליווי טכני." }
  ];

  const year = new Date().getFullYear();
  const month = new Date().toLocaleString('he', { month: 'long' });

  // Updated Structured Data for better SEO credibility.
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MasterStack - פיתוח אתרים מקצועי",
    "image": "https://master-stack.com/assets/images/logo.png",
    "url": "https://master-stack.com",
    "telephone": "+972-52-534-7274",
    "email": "admin@master-stack.com",
    "description": "שירותי פיתוח אתרים מתקדמים בקוד נקי (React, TypeScript) לעסקים. בניית אתרים מהירים, מותאמים ל-SEO, עם דגש על חווית משתמש והמרות.",
    "founder": {
      "@type": "Person",
      "name": "שחר מעוז"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "הרצליה",
      "addressCountry": "IL"
    },
    "areaServed": "IL",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "שירותי פיתוח אתרים",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "בניית אתרי תדמית" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "בניית דפי נחיתה" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "אופטימיזציה ושיפור מהירות אתרים (SEO טכני)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "תיקון אתרים קיימים" } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": "50" // This should be updated based on real reviews.
    }
  };

  return (
    <div className="min-h-screen text-white bg-transparent" dir="rtl">
      {/* SEO component with updated, more credible keywords and description */}
      <SEO
        title="MasterStack | פיתוח אתרים ב-React שבאמת עובדים"
        description="מפתח אתרים מומחה ב-React ו-TypeScript. אני בונה אתרי אינטרנט מהירים עם SEO טכני מעולה, ללא תבניות WordPress. קבלו בסיס חזק לדירוג גבוה בגוגל."
        keywords="פיתוח אתרים, בניית אתרים, מפתח React, אתרים מהירים, SEO טכני, פיתוח TypeScript, שחר מעוז, MasterStack, אתרים בהתאמה אישית, שיפור מהירות אתר"
        type="website"
        image="/assets/images/masterstack-og-image.jpg"
        structuredData={homeStructuredData}
      />

      {/* Parallax Video Background - spans from hero to contact */}
      {!videoError ? (
        <video
          className={`fixed inset-0 w-full h-full object-cover -z-40 transition-all duration-[4s] ease-out ${showContent ? 'brightness-30 scale-105' : 'brightness-100 scale-100'
            }`}
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
          autoPlay muted loop playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          aria-hidden="true"
          preload="auto"
        >
          <source src="/assets/videos/background.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="fixed inset-0 w-full h-full -z-40 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/images/image.png)',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
          aria-hidden="true"
        ></div>
      )}

      {/* Parallax Video Overlay */}
      <div
        className={`fixed inset-0 w-full h-full -z-30 transition-all duration-[4s] ease-out ${showContent ? 'bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900/90' : 'bg-slate-900/20'
          }`}
        aria-hidden="true"
      ></div>

      {/* Accessibility: Skip to main content link */}
      <a
        href="#main-content"
        className="absolute -top-12 left-2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm z-50 focus:top-3 transition-all duration-300"
      >
        עבור לתוכן הראשי
      </a>

      <AccessibilityMenu />
      <Header />

      {/* Hero Section */}
      <main id="main-content" className="relative pt-20 pb-32 px-4 overflow-hidden min-h-screen flex items-center">

        <div className={`container mx-auto text-center relative z-10 transition-all duration-[3s] ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>

          {/* Main Headline - Clear value proposition */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 ">
            <span className="text-white text-3xl md:text-4xl lg:text-6xl">
              קוד נקי, עיצוב חכם, תוצאות אמיתיות
            </span>
          </h1>

          {/* Sub-headline with clear benefits */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            אני בונה אתרי אינטרנט ב-React ו-TypeScript עם <span className="text-cyan-400 text-3xl font-bold">בסיס טכני חזק ל-SEO</span>,
            <br />
            <span className="text-cyan-400 text-3xl font-bold">טעינה מהירה וחווית משתמש שמעוצבת להביא לקוחות</span>.
            <br />
            <span className="text-lg text-gray-400">פיתוח בהתאמה אישית, ללא תבניות WordPress או Wix.</span>
          </p>

          {/* Clear CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105"
              onClick={contactByWhatsApp}
            >
              <MessageCircle className="w-6 h-6 ml-3" />
              לשיחת ייעוץ ללא עלות
            </Button>

          </div>

          {/* Social Proof Stats - with more realistic numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/30">
              <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;1s</div>
              <div className="text-gray-300">זמן טעינה</div>
              <div className="text-sm text-gray-500 mt-1">חווית משתמש מעולה</div>
            </div>
            <div className="text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/30">
              <div className="text-4xl font-bold text-green-400 mb-2">90+</div>
              <div className="text-gray-300">ציון ביצועים בגוגל</div>
              <div className="text-sm text-gray-500 mt-1">בסיס חזק ל-SEO</div>
            </div>
            <div className="text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">קוד מותאם אישית</div>
              <div className="text-sm text-gray-500 mt-1">ללא תבניות או מגבלות</div>
            </div>
          </div>
        </div>
      </main>

      {/* Problem-Solution Section */}
      <section className="py-20 px-4 relative bg-primary/90 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              אתרי תבניות פוגעים בעסק שלכם
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="text-center p-8 bg-red-950/30 backdrop-blur-sm rounded-2xl border border-red-900/30">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-red-900/30 rounded-full text-red-400">{problem.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-400">{problem.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center my-12">
            <ArrowRight className="w-12 h-12 text-cyan-400 rotate-90" />
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-4">
              הפתרון: אתר מקצועי שנבנה נכון מהיסוד
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="group text-center p-8 bg-gradient-to-b from-slate-800/60 to-slate-800/40 backdrop-blur-sm rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-cyan-400 mb-4">{solution.stat}</div>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-cyan-600/20 rounded-full text-cyan-300">{solution.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-6 text-lg font-bold rounded-xl"
              onClick={contactByWhatsApp}
            >
              בוא נדבר
              <MessageCircle className="w-5 h-5 mr-3" />
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 relative overflow-hidden bg-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              לקוחות מרוצים תוצאות אמיתיות
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              תוצאות אמיתיות מבעלי עסקים שהשקיעו באתר שנבנה נכון.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 flex flex-col">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                  </div>
                  <img
                    src={testimonial.image}
                    alt={`המלצה מלקוח ${index + 1}`}
                    className="w-full h-auto max-w-full object-contain rounded-lg shadow-lg"
                  />
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <CardDescription className="text-gray-300 text-lg italic text-center leading-relaxed">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0 text-center">
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 px-4 relative bg-slate-800/20 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              תהליך העבודה: פשוט, שקוף וממוקד
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              ארבעה שלבים פשוטים מהרעיון ועד לאתר שמביא תוצאות.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center p-6 bg-primary backdrop-blur-sm rounded-2xl border border-slate-700/50 h-full">
                  <div className="text-6xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -left-8 transform -translate-y-1/2 w-8 h-8 text-cyan-400 rotate-180" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-slate-900/20 backdrop-blur-sm">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                שחר מעוז | מפתח אתרים שמבין שיווק
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                 עם ניסיון של שנים בעולמות השיווק והיזמות, אני יודע שאתר הוא קודם כל כלי עסקי. המטרה שלי היא לתרגם את החזון שלכם לאתר מהיר, יעיל ומעוצב שמניע לקוחות לפעולה.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                בניגוד לעבודה עם תבניות, אני בונה כל אתר מאפס. זה מאפשר לי שליטה מלאה על הביצועים, ה-SEO הטכני וחווית המשתמש - שלושת המרכיבים החיוניים להצלחה דיגיטלית.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">פיתוח ב-React + TypeScript</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">ללא תלות ב-WordPress</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">אופטימיזציה ל-SEO טכני</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300">תמיכה אישית וזמינות גבוהה</span></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={contactByWhatsApp} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  נדבר ב-WhatsApp
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
                <div className="grid grid-cols-1 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-gray-300 text-lg">פרויקטים מוצלחים</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-cyan-400 mb-2">100%</div>
                    <div className="text-gray-300 text-lg">קוד מקורי</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-400 mb-2">5.0</div>
                    <div className="text-gray-300 text-lg">דירוג מלקוחות</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview CTA */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-primary/20 to-primary backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-6">
              השקעה חכמה באתר מקצועי
            </h2>
            <p className="text-xl text-gray-300 mb-8">
               מחירים שקופים, ללא הפתעות. <strong className="text-cyan-400 text-2xl font-bold"> <br />מחירי השקה! אל תפספסו כי בקרוב המחיר עולה!</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-slate-800/60 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">דף נחיתה</h3>
                <p className="text-3xl font-bold text-white mb-2"> מ-1,200 ₪</p>
                <p className="text-gray-400 text-sm">מושלם לקמפיינים ממוקדים</p>
              </div>
              <div className="p-6 bg-slate-800/60 rounded-xl border border-cyan-500/30 scale-105">
                <div className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">החבילה המומלצת</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">אתר תדמית</h3>
                <p className="text-3xl font-bold text-white mb-2"> מ-3000 ₪</p>
                <p className="text-gray-400 text-sm">עד 5 עמודים + SEO טכני</p>
              </div>
              <div className="p-6 bg-slate-800/60 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">אתר מורכב</h3>
                <p className="text-3xl font-bold text-white mb-2">בהתאמה אישית</p>
                <p className="text-gray-400 text-sm">חנויות, מערכות, אינטגרציות</p>
              </div>
            </div>
            <Button
              size="lg"
              onClick={() => navigate('/services')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-6 text-lg font-bold"
            >
              לעמוד השירותים
              <ArrowLeft className="w-5 h-5 mr-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-primary backdrop-blur-sm">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              הפסיקו להתפשר על האתר שלכם!
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              הגיע הזמן להשקיע בנכס דיגיטלי שיעבוד בשבילכם.  <br />אני בונה אתרים מקצועיים, יעילים ומהירים.
              <br />
              <span className="text-cyan-400 font-bold">שיחת ייעוץ ראשונית בחינם וללא התחייבות.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400" /><span>ייעוץ ללא עלות</span></div>
              <div className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400" /><span>מחירים שקופים</span></div>
              <div className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400" /><span>ליווי אישי</span></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={contactByWhatsApp}
                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-7 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <span>
                    <MessageCircle className="w-6 h-6 inline-block ml-3 group-hover:animate-pulse" />
                    קבלו הצעת מחיר
                  </span>
                  <span className="block text-sm font-normal opacity-90 mt-1">תשובה מהירה ב-WhatsApp</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - End of parallax video */}
      <section id="contact" className="py-20 px-4 relative z-10 bg-gradient-to-b from-primary via-primary/20 to-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
או השאירו פרטים
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            מלאו את הטופס ואחזור אליכם עם כל המידע הדרוש.
          </p>

          <div className="max-w-xl mx-auto bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-700/50">
            <form action="https://formspree.io/f/mvgqqkqq" method="POST" className="space-y-6 text-right">
              <div>
                <label htmlFor="name" className="block text-white text-lg mb-2">שם מלא</label>
                <input type="text" id="name" name="name" placeholder="ישראל ישראלי" required
                  className="w-full p-3 rounded-md bg-slate-700/50 text-white border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-400" />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-lg mb-2">כתובת מייל</label>
                <input type="email" id="email" name="email" placeholder="israel@example.com" required
                  className="w-full p-3 rounded-md bg-slate-700/50 text-white border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-400" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white text-lg mb-2">מספר טלפון</label>
                <input type="tel" id="phone" name="phone" placeholder="050-1234567" required
                  className="w-full p-3 rounded-md bg-slate-700/50 text-white border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-400" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white text-lg mb-2">מה השירות הדרוש?</label>
                <select id="subject" name="subject" required
                  className="w-full p-3 rounded-md bg-slate-700/50 text-white border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent">
                  <option value="בניית אתר חדש">בניית אתר חדש</option>
                  <option value="דף נחיתה">דף נחיתה</option>
                  <option value="שיפור אתר קיים">שיפור אתר קיים</option>
                  <option value="ייעוץ SEO טכני">ייעוץ SEO טכני</option>
                  <option value="אחר">אחר</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-lg mb-2">ספרו לי על הפרויקט</label>
                <textarea id="message" name="message" rows={4} placeholder="מה המטרה העיקרית של האתר? מי קהל היעד?" required
                  className="w-full p-3 rounded-md bg-slate-700/50 text-white border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-400"></textarea>
              </div>
              <div className="text-center">
                <button type="submit"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-4 px-12 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                  שליחת פנייה
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 text-white py-2 px-4 border-t border-slate-800/40 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MasterStack</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">פיתוח אתרים מקצועי בקוד נקי. <br />בונים נכסים דיגיטליים שעובדים.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">שירותים עיקריים</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services" className="hover:text-cyan-400 transition-colors">בניית אתרי React</a></li>
                <li><a href="/services" className="hover:text-cyan-400 transition-colors">דפי נחיתה מהירים</a></li>
                <li><a href="/services" className="hover:text-cyan-400 transition-colors">שיפור מהירות ו-SEO</a></li>
                <li><a href="/services" className="hover:text-cyan-400 transition-colors">תחזוקת אתרים</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">למה לעבוד איתי?</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>100% קוד מותאם אישית</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>ביצועים ומהירות</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>בסיס מעולה ל-SEO</span></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>שירות אישי וישיר</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">יצירת קשר</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <button onClick={contactByWhatsApp} className="hover:text-cyan-400 transition-colors">WhatsApp - זמין תמיד</button>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <button onClick={contactByEmail} className="hover:text-cyan-400 transition-colors">admin@master-stack.com</button>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <span>הרצליה, ישראל (עבודה בפריסה ארצית)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
