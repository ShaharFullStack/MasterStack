import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import Header from "@/components/Header";
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
  ArrowLeft,
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
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import "../index.css"; // Import your global styles

const Index = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Show content after video starts loading
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setShowContent(true); // Show content even if video fails
  };

  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "שחר עושה סדר",
      emoji: "🆘",
      problem: "אתר שנבנה בעזרת AI לא עובד / לא נראה טוב / לא מביא לקוחות",
      solution: "תיקון ושדרוג אתרים שנבנו בעזרת AI - כשניסיתם לבד ונתקעתם",
      price: "1,500-3,500₪",
      category: "תיקון אתרים"
    },
    {
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      title: "סריקה ופתרונות",
      emoji: "🔍",
      problem: "האתר לא מביא לקוחות ולא יודע למה ומה לתקן",
      solution: "סריקה מקצועית של האתר + דוח פידבק מפורט עם המלצות לתיקון",
      price: "399-499₪",
      category: "ניתוח אתרים"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "אתר תדמית לאמנים",
      emoji: "🎨",
      problem: "אמנים, ספורטאים ומקצועות חופשיים זקוקים לנוכחות דיגיטלית מקצועית",
      solution: "אתר תדמית מרשים + גלריה מקצועית + מערכת הזמנות + אופטימיזציה למובייל",
      price: "2,500-3,300₪",
      category: "בניית אתרים"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
      title: "אתר לעסקים קטנים-בינוניים",
      emoji: "🏢",
      problem: "עסקים קטנים-בינוניים זקוקים לנוכחות דיגיטלית מקצועית",
      solution: "אתר מרשים + מערכת ניהול תוכן + מערכת הזמנות + אופטימיזציה למובייל",
      price: "4,500-8,900₪",
      category: "בניית אתרים"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "SEO מקומי",
      emoji: "🎯",
      problem: "אתרים יפים שאף אחד לא מוצא בגוגל כשמחפשים בעיר שלהם",
      solution: "אופטימיזציה לחיפושים מקומיים, הגדרת Google My Business, קידום על מילות מפתח",
      price: "1,200-2,500₪",
      category: "קידום אתרים"
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: "חבילות תחזוקה",
      emoji: "🔧",
      problem: "בעלי אתרים זקוקים לתחזוקה שוטפת אבל לא יכולים להרשות שירות יקר",
      solution: "עדכוני מערכת ותוספים, גיבוי חודשי, סריקת קישורים שבורים, בדיקת PageSpeed",
      price: "149-999₪/חודש",
      category: "תחזוקה"
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: "שירותי אבטחה",
      emoji: "🔒",
      problem: "אתרים נפרצים, וירוסים, התקפות DDoS, ואיבוד מידע שהורס עסקים שלמים",
      solution: "מערכת אבטחה מתקדמת, גיבוי יומי אוטומטי, מוניטורינג 24/7, שחזור מהיר",
      price: "299-599₪/חודש",
      category: "אבטחה"
    },
    {
      icon: <Gauge className="w-8 h-8 text-yellow-400" />,
      title: "שירותי מהירות ואופטימיזציה",
      emoji: "🚀",
      problem: "אתרים איטיים שגורמים ללקוחות לעזוב וירידה בדירוגי גוגל",
      solution: "אופטימיזציה מלאה למהירות, דחיסת תמונות, אופטימיזציה לקוד, CDN",
      price: "800-1,500₪",
      category: "אופטימיזציה"
    },
  ];

  const testimonials = [
    {
      name: "מיכל כהן",
      business: 'מעצבת פנים',
      text: "שחר הציל את האתר שלי! ניסיתי לבנות באמצעות AI ונתקעתי. תוך שבוע הכל עבד מושלם.",
      rating: 5,
      image: "M.K"
    },
    {
      name: "רועי סלמון",
      business: "מאמן כושר אישי",
      text: "הSEO המקומי שלהם הכפיל את מספר הפניות שלי בתוך חודשיים. פשוט מדהים!",
      rating: 5,
      image: "D.L"
    },
    {
      name: "רותי אברהם",
      business: "סלון יופי",
      text: "השירות הכי מקצועי שקיבלתי. האתר החדש מביא לי לקוחות חדשים כל יום.",
      rating: 5,
      image: "R.A"
    },
    {
      name: "אבי רחמים",
      business: "משרד עורכי דין",
      text: "חבילת התחזוקה הפרימיום שלהם חוסכת לי כל כך הרבה זמן וכסף. מומלץ בחום!",
      rating: 5,
      image: "A.M"
    }
  ];

  const stats = [
    { number: "11", label: "שירותים מובילים" },
    { number: "7", label: "קטגוריות, מבניית האתר ועד הדרכה לתחזוקה עצמאית" },
    { number: "24/7", label: "תמיכה טכנית" },
    { number: "5+", label: "שנות ניסיון" }
  ];

  const features = [
    { icon: <Monitor className="w-6 h-6" />, title: "עיצוב רספונסיבי", desc: "מותאם לכל המכשירים" },
    { icon: <Zap className="w-6 h-6" />, title: "ביצועים מהירים", desc: "זמני טעינה מהירים" },
    { icon: <Shield className="w-6 h-6" />, title: "אבטחה מתקדמת", desc: "הגנה מלאה על הנתונים" },
    { icon: <Target className="w-6 h-6" />, title: "SEO מותאם", desc: "מיטוב למנועי חיפוש" },
    { icon: <Users className="w-6 h-6" />, title: "ניהול לקוחות", desc: "מערכת CRM מובנית" },
    { icon: <Globe className="w-6 h-6" />, title: "נגישות גלובלית", desc: "תמיכה בשפות מרובות" }
  ];

  const year = new Date().getFullYear();
  const month = new Date().toLocaleString('he', { month: 'long' });

  return (
    <div className="min-h-screen text-white bg-transparent" dir="rtl">
      
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="absolute -top-10 left-2 bg-slate-800 text-white px-3 py-2 rounded text-sm z-50 focus:top-2 transition-all duration-300"
        tabIndex={1}
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          zIndex: 100,
        }}
        onFocus={(e) => e.target.style.top = '6px'}
        onBlur={(e) => e.target.style.top = '-40px'}
      >
        עבור לתוכן הראשי
      </a>
      
      {/* Accessibility Menu */}
      <AccessibilityMenu />
      
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <main id="main-content" className="relative pt-20 pb-32 px-4 overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        {!videoError && (
          <video 
            className={`fixed inset-0 w-full h-full object-cover -z-40 transition-all duration-[4000ms] ease-out ${
              showContent ? 'brightness-50 scale-105' : 'brightness-100 scale-100'
            }`}
            autoPlay 
            muted 
            loop 
            playsInline
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            aria-hidden="true"
            preload="auto"
          >
            <source src="/assets/videos/background.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Fallback background image - shows ONLY if video fails to load */}
        {videoError && (
          <div 
            className="fixed inset-0 w-full h-full -z-40"
            style={{
              backgroundImage: 'url(/assets/images/image.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden="true"
          ></div>
        )}
        
        {/* Gradual fadeout overlay - starts transparent and gradually darkens */}
        <div 
          className={`fixed inset-0 w-full h-full -z-30 transition-all duration-[4000ms] ease-out ${
            showContent ? 'bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/80' : 'bg-slate-900/10'
          }`}
          aria-hidden="true"
        ></div>
        
        {/* Additional readability overlay */}
        <div className="absolute inset-0 bg-slate-900/20" aria-hidden="true"></div>
        
        <div className={`container mx-auto text-center relative z-10 transition-all duration-[3000ms] ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Video Loading Indicator - very subtle */}
          {!videoLoaded && !videoError && (
            <div className="fixed top-8 right-8 z-50 opacity-60">
              <div className="flex items-center space-x-2 space-x-reverse bg-slate-900/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-700/30">
                <div className="animate-spin rounded-full h-4 w-4 border border-blue-400/40 border-t-blue-400"></div>
                <span className="text-gray-400 text-xs font-medium">
                  טוען סרטון...
                </span>
              </div>
            </div>
          )}
          
          {/* Video Error Notice - very subtle */}
          {videoError && (
            <div className="fixed bottom-4 right-4 z-50 opacity-50">
              <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg px-3 py-1 border border-slate-600/30">
                <span className="text-gray-500 text-xs">נטען ברקע סטטי</span>
              </div>
            </div>
          )}
          
          {/* Massive Enhanced Title */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8rem] font-black leading-none mb-4 relative">
              {/* Subtle Static Glowing Effects */}
              <div className="inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8rem] font-black leading-none text-blue-400/90 -z-10 animate-gentle-pulse">
                MasterStack
              </div>
              <div className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8rem] font-black leading-none text-cyan-400/20 blur-lg -z-20">
                MasterStack
              </div>
              <div className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8rem] font-black leading-none text-purple-400/10 blur-xl -z-30">
                MasterStack
              </div>
            </h1>
            
            {/* Animated Subtitle */}
            <div className="relative">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                  הפתרון המקצועי והמותאם
                </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                לכל הצרכים הדיגיטליים שלכם
                <br />
                <span className="text-blue-400 font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  מתיקון אתרים ועד בנייה מקצועית ושיווק דיגיטלי מתקדם
                </span>
              </p>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">              
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              aria-label="עבור לעמוד השירותים שלנו"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-cyan-600/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <a href="/services" className="flex items-center text-white relative z-10" aria-label="צפה בכל השירותים שאנו מציעים">
                <Zap className="w-6 h-6 ml-3 group-hover:animate-slow-float" aria-hidden="true" />
                השירותים שלנו
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative border-3 border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-500 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-500 bg-transparent backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 hover:-translate-y-2"
              aria-label="פתח ווצאפ ליצירת קשר מיידי"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <MessageCircle className="w-6 h-6 ml-3 group-hover:animate-slow-float" aria-hidden="true" />
              <a 
                href="https://wa.me/972525347274" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-10"
                aria-label="צור קשר איתנו דרך ווצאפ במספר 972525347274"
              >
                בואו נדבר בווצאפ 
              </a>
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
            role="region"
            aria-label="נתונים סטטיסטיים על החברה"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:bg-slate-700/40 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 relative" 
                role="group" 
                aria-label={`${stat.label}: ${stat.number}`}
              >
                <div className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-4 drop-shadow-lg" aria-hidden="true">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base font-semibold group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Enhanced Features Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/40" aria-hidden="true"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
                <h2 className="text-blue-400 font-bold text-2xl md:text-3xl lg:text-6xl mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              למה לבחור ב-MasterStack?
            </h2>
            <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              אנחנו נתאים את הפתרון המושלם לצרכים הדיגיטליים שלך
              <br />
                <span className="text-blue-400 font-bold text-4xl md:text-3xl lg:text-3xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                אנחנו בונים עסקים דיגיטליים מצליחים
              <br />עם טכנולוגיות מתקדמות
            </span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:bg-slate-700/60 hover:border-cyan-400/50 transition-all duration-700 hover:scale-105 hover:-translate-y-4 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-6 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-3xl text-blue-400 group-hover:text-cyan-300 transition-all duration-700 group-hover:scale-110 shadow-lg group-hover:shadow-cyan-500/30">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-700 relative z-10">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-700 text-lg leading-relaxed relative z-10">{feature.desc}</p>
                
                {/* Static border - no animation */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Zap className="w-10 h-10" />, title: "מהירות ביצוע", desc: "פרויקטים מושלמים בזמן קצר", color: "from-yellow-400 to-orange-400", bgColor: "from-yellow-500/20 to-orange-500/20" },
              { icon: <Shield className="w-10 h-10" />, title: "אמינות מוכחת", desc: "מאות לקוחות מרוצים ופרויקטים מוצלחים", color: "from-green-400 to-emerald-400", bgColor: "from-green-500/20 to-emerald-500/20" },
              { icon: <Users className="w-10 h-10" />, title: "שירות אישי", desc: "ליווי צמוד וזמינות גבוהה", color: "from-blue-400 to-cyan-400", bgColor: "from-blue-500/20 to-cyan-500/20" },
              { icon: <TrendingUp className="w-10 h-10" />, title: "תוצאות מדידות", desc: "שיפור ברור בביצועים ובהכנסות", color: "from-purple-400 to-pink-400", bgColor: "from-purple-500/20 to-pink-500/20" }
            ].map((item, index) => (
              <div key={index} className="group text-center relative">
                <div className="flex justify-center mb-6">
                  <div className={`p-6 bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-3xl shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 border border-slate-700/30 group-hover:border-slate-600/50`}>
                    <div className={`text-4xl`} style={{
                      background: `linear-gradient(to right, ${item.color.includes('yellow') ? '#facc15, #f97316' : 
                                                            item.color.includes('green') ? '#22c55e, #10b981' :
                                                            item.color.includes('blue') ? '#3b82f6, #06b6d4' :
                                                            '#a855f7, #ec4899'})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {item.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-700">{item.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-700 text-base leading-relaxed">{item.desc}</p>
                
                {/* Gentle glowing effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-2xl blur-xl -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/50" aria-hidden="true"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                מי אנחנו ב-MasterStack?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                אנחנו צוות של מפתחים ומעצבים מנוסים מומחים בבניית פתרונות דיגיטליים מותאמת אישית. 
                עם למעלה מ-5 שנות ניסיון בתחום, אנו מבינים בדיוק מה העסק שלכם צריך כדי להצליח באינטרנט.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                המומחיות שלנו משתרעת מתיקון אתרים שנבנו בעזרת AI ועד פיתוח מערכות מתקדמות עם אבטחה ברמה הגבוהה ביותר. 
                אנחנו מאמינים שכל עסק, גדול או קטן, ראוי לנוכחות דיגיטלית מקצועית ומרשימה.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  <Award className="w-5 h-5 ml-2" />
                  הפרויקטים שלנו
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  <Users className="w-5 h-5 ml-2" />
                  הכירו את הצוות
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">11</div>
                    <div className="text-gray-400 text-sm">שירותים מובילים להתאמה אישית</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">7</div>
                    <div className="text-gray-400 text-sm">קטגוריות הכוללות בניית אתר, תחזוקה, SEO </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-400 text-sm">תמיכה טכנית</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                    <div className="text-gray-400 text-sm">שנות ניסיון</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/45" aria-hidden="true"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">מה הלקוחות שלנו אומרים</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ביקורות אמיתיות מלקוחות מרוצים שחוו את השירות המקצועי שלנו
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/80 border-slate-700 hover:bg-slate-700/80 transition-all duration-300 hover:scale-105 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.image}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                  <CardDescription className="text-blue-400 font-medium">
                    {testimonial.business}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/45" aria-hidden="true"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">מוכנים להתחיל?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            בואו נבנה יחד את הנוכחות הדיגיטלית המושלמת לעסק שלכם. 
            קבלו ייעוץ חינם ותצטרפו למעגל הלקוחות המרוצים שלנו.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <MessageCircle className="w-5 h-5 ml-2" />
              <a href="https://wa.me/972525347274" target="_blank" rel="noopener noreferrer" className="text-white">ווצאפ</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-10 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent">
              <Mail className="w-5 h-5 ml-2" />
              מייל 
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/50" aria-hidden="true"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">צרו קשר</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              אנחנו כאן כדי לעזור לכם להצליח. בואו נדבר על הפרויקט הבא שלכם
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-slate-700/50 rounded-2xl border border-slate-600/50">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-600/20 rounded-2xl">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ווצאפ</h3>
              <p className="text-gray-400">972-52-5347-274+</p>
              <p className="text-gray-500 text-sm mt-1">א'-ה' מ 08:00 עד 21:00</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-2xl border border-slate-600/50">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-cyan-600/20 rounded-2xl">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">אימייל</h3>
                  <a href="mailto:admin@master-stack.com">admin@master-stack.com</a>
              <p className="text-gray-500 text-sm mt-1">מענה מהיר</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-2xl border border-slate-600/50">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-600/20 rounded-2xl">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">מיקום</h3>
              <p className="text-gray-400">הרצליה, ישראל</p>
              <p className="text-gray-500 text-sm mt-1">שירות בכל הארץ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 text-white py-2 px-4 border-t border-slate-800/40 backdrop:blur-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MasterStack
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                הפתרון המקצועי לכל הצרכים הדיגיטליים שלכם.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-blue-400" />
                </div>
                <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">שירותים</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">בניית אתרים</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">תיקון אתרים</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">SEO וקידום</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">תחזוקה ואבטחה</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">החברה</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">אודות</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">הצוות</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">פרויקטים</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">קריירה</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">צור קשר</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                  <span>972525347274+</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:admin@master-stack.com">admin@master-stack.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green-400 mt-1" />
                  <span>הרצליה, ישראל</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>©MasterStack כל הזכויות שמורות {year}.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">תנאי שימוש</a>
              <a href="#" className="hover:text-blue-400 transition-colors">מדיניות פרטיות</a>
              <a href="#" className="hover:text-blue-400 transition-colors">עזרה</a>
            </div>
            <p className="mt-4 md:mt-0">עודכן לאחרונה ב{month} {year}</p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;