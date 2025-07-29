import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import { 
  FileText, 
  Palette, 
  Server,
  MessageCircle,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Zap,
  AlertTriangle,
  Check,
  Package,
  Users
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const ServicesPage = () => {
  const { contactByWhatsApp } = useAuth();

  const services = [
    {
      id: 1,
      icon: <FileText className="w-12 h-12 text-blue-400" />,
      title: "עמוד נחיתה מקצועי",
      category: "Landing Page",
      badge: "הכי פופולרי",
      badgeColor: "bg-green-500",
      problem: "אתה צריך נוכחות מקצועית באינטרנט בזמן הכי קצר ובתקציב נגיש",
      solution: "עמוד נחיתה יחיד, מרשים ומותאם לעסק שלך - מושלם להתחלה דיגיטלית",
      features: [
        "עיצוב מותאם אישית לעסק שלך",
        "טופס יצירת קשר מתקדם",
        "אופטימיזציה למובייל",
        "מהירות טעינה מקסימלית",
        "SEO בסיסי מובנה",
        "אינטגרציה עם WhatsApp"
      ],
      uniqueness: "פתרון מהיר ואפקטיבי בתקציב נגיש - מושלם לעסקים קטנים ומקצועות חופשיים שרוצים להתחיל נכון",
      targetAudience: "עסקים קטנים, מקצועות חופשיים, סטארט-אפים, אמנים המתחילים באינטרנט",
      timeframe: "2-5 ימי עבודה",
      price: "1,200₪",
      priceType: "פרויקט חד פעמי כולל הכל",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 2,
      icon: <Palette className="w-12 h-12 text-purple-400" />,
      title: "אתר תדמית מלא",
      category: "Full Website",
      badge: "הכי מתקדם",
      badgeColor: "bg-purple-500",
      problem: "אתה צריך נוכחות דיגיטלית מקצועית ומלאה שמייצגת את העסק שלך בצורה הטובה ביותר",
      solution: "אתר תדמית מלא עם מספר עמודים, גלריות, ומערכות מתקדמות להצלחה מקסימלית",
      features: [
        "עד 8 עמודים מקצועיים",
        "גלריית תמונות אינטראקטיבית",
        "מערכת ניהול תוכן (CMS)",
        "אזור לקוחות עם הזמנות",
        "אינטגרציה עם רשתות חברתיות",
        "SEO מתקדם לכל העמודים",
        "אנליטיקס ומדידות",
        "חנות מקוונת בסיסית (אופציונלי)"
      ],
      uniqueness: "פתרון שלם ומקצועי שמקנה לעסק שלך נוכחות דיגיטלית מושלמת עם כל הכלים הדרושים להצלחה",
      targetAudience: "עסקים בינוניים, חברות, משרדי שירותים, אמנים מקצועיים, מותגים מבוססים",
      timeframe: "10-15 ימי עבודה",
      price: "3,000₪",
      priceType: "פרויקט מלא כולל כל התכונות",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      id: 3,
      icon: <Server className="w-12 h-12 text-green-400" />,
      title: "אחסון ותחזוקה מלאה",
      category: "Hosting & Maintenance",
      badge: "חיוני לאתר",
      badgeColor: "bg-orange-500",
      problem: "האתר שלך זקוק לאחסון מהיר ובטוח ותחזוקה שוטפת כדי להישאר מעודכן ומאובטח",
      solution: "שירות אחסון מקצועי עם תחזוקה מלאה - אתה מתמקד בעסק, אנחנו דואגים לאתר",
      features: [
        "אחסון SSD מהיר ובטוח",
        "גיבוי אוטומטי יומי",
        "עדכוני אבטחה שוטפים",
        "מוניטורינג זמינות 24/7",
        "תמיכה טכנית מהירה",
        "עדכוני תוכן חודשיים (עד 3 שעות)",
        "אופטימיזציה מתמשכת למהירות",
        "דוח ביצועים חודשי"
      ],
      uniqueness: "שירות מלא ומקיף שמבטיח שהאתר שלך תמיד יעבוד מהר, יהיה מאובטח ומעודכן - שקט נפשי מלא",
      targetAudience: "כל בעל אתר שרוצה שקט נפשי ואתר שעובד תמיד בצורה מושלמת",
      timeframe: "שירות מתמשך",
      price: "299₪",
      priceType: "לחודש - ללא התחייבות",
      gradient: "from-green-600 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen text-white bg-transparent" dir="rtl">
      {/* Background Video */}
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
      />
      
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
      
      <AccessibilityMenu />
      <Header />
      
      <div className="relative z-10">
        <Breadcrumbs 
          items={[
            { label: "השירותים שלנו", current: true }
          ]} 
        />
        
        {/* Hero Section */}
        <section className="pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Main Content */}
              <div className="text-center mb-20">
                <div className="flex justify-center mb-8">
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <div className="p-4 bg-blue-600/20 rounded-2xl backdrop-blur-sm border border-blue-500/30">
                      <FileText className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="p-4 bg-purple-600/20 rounded-2xl backdrop-blur-sm border border-purple-500/30">
                      <Palette className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="p-4 bg-green-600/20 rounded-2xl backdrop-blur-sm border border-green-500/30">
                      <Server className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                    שלושה פתרונות
                  </span>
                  <br />
                  <span className="text-white">שיגרמו לעסק שלך להמריא</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                  מעמוד נחיתה פשוט ואפקטיבי ועד אתר תדמית מלא עם תחזוקה מקצועית - 
                  <br className="hidden md:block" />
                  <span className="text-cyan-400 font-semibold">הכל במקום אחד, הכל בטיפול המיטבי</span>
                </p>

                {/* Quick Nav */}
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-blue-400 ml-2" />
                      <span className="text-white font-medium">עמוד נחיתה - 1,200₪</span>
                    </div>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700">
                    <div className="flex items-center">
                      <Palette className="w-5 h-5 text-purple-400 ml-2" />
                      <span className="text-white font-medium">אתר תדמית - 3,000₪</span>
                    </div>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700">
                    <div className="flex items-center">
                      <Server className="w-5 h-5 text-green-400 ml-2" />
                      <span className="text-white font-medium">תחזוקה - 299₪/חודש</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Props */}
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                    <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">מהיר ויעיל</h3>
                    <p className="text-slate-300 text-sm">אספקה מהירה ללא פשרות על איכות</p>
                  </div>
                </div>
                <div className="group">
                  <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                    <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">מקצועי ובטוח</h3>
                    <p className="text-slate-300 text-sm">טכנולוגיות מתקדמות ואבטחה מקסימלית</p>
                  </div>
                </div>
                <div className="group">
                  <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 group-hover:border-green-500/50 transition-all duration-300">
                    <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">תמיכה אישית</h3>
                    <p className="text-slate-300 text-sm">ליווי מלא לפני, במהלך ואחרי הפרויקט</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <main id="main-content" className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">רשימת השירותים שלנו</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <article 
                  key={service.id} 
                  className={`bg-slate-800/90 backdrop-blur-sm border border-slate-700 hover:border-slate-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative ${
                    index === 1 ? 'lg:scale-105 lg:shadow-2xl border-blue-500/50' : ''
                  }`}
                  tabIndex={0}
                  aria-labelledby={`service-title-${service.id}`}
                  aria-describedby={`service-description-${service.id}`}
                >
                  {/* Popular badge */}
                  {service.badge && (
                    <div className={`absolute top-4 right-4 ${service.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg`}>
                      <Star className="w-3 h-3 inline mr-1" />
                      {service.badge}
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Icon and Title */}
                    <div className="text-center mb-8">
                      <div 
                        className={`inline-flex p-6 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                        role="img"
                        aria-label={`אייקון עבור ${service.title}`}
                      >
                        {service.icon}
                      </div>
                      <h3 
                        id={`service-title-${service.id}`}
                        className="text-2xl font-bold text-white mb-3"
                      >
                        {service.title}
                      </h3>
                      <Badge 
                        variant="secondary" 
                        className="bg-slate-700 text-slate-200 px-3 py-1 text-xs"
                        role="note"
                        aria-label={`קטגוריה: ${service.category}`}
                      >
                        {service.category}
                      </Badge>
                    </div>

                    <div id={`service-description-${service.id}`} className="space-y-6">
                      {/* Problem */}
                      <div>
                        <h4 className="font-semibold text-red-400 mb-3 flex items-center text-sm">
                          <AlertTriangle className="w-4 h-4 ml-2" />
                          הבעיה
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {service.problem}
                        </p>
                      </div>
                      
                      <Separator className="bg-slate-600" />
                      
                      {/* Solution */}
                      <div>
                        <h4 className="font-semibold text-green-400 mb-3 flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 ml-2" />
                          הפתרון שלנו
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          {service.solution}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-3 flex items-center text-sm">
                          <Package className="w-4 h-4 ml-2" />
                          מה כלול
                        </h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <Check className="w-3 h-3 text-green-400 mt-1 ml-2 flex-shrink-0" />
                              <span className="text-slate-300 text-xs">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 4 && (
                            <div className="text-slate-400 text-xs">
                              + {service.features.length - 4} תכונות נוספות
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <Separator className="bg-slate-600" />
                      
                      {/* Target & Time */}
                      <div className="space-y-3">
                        <div className="flex items-center text-slate-300 text-xs">
                          <Users className="w-3 h-3 ml-2 text-purple-400" />
                          {service.targetAudience.split(',')[0]}...
                        </div>
                        <div className="flex items-center text-slate-300 text-xs">
                          <Clock className="w-3 h-3 ml-2 text-blue-400" />
                          {service.timeframe}
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div 
                        className={`bg-gradient-to-r ${service.gradient} rounded-xl p-6 text-center relative overflow-hidden`}
                        role="region"
                        aria-label="מידע על מחיר השירות"
                      >
                        <div className="relative z-10">
                          <div className="text-3xl font-bold text-white mb-1">
                            {service.price}
                          </div>
                          <div className="text-white/80 text-xs">
                            {service.priceType}
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-xl text-white rounded-xl py-4 text-sm font-semibold transition-all duration-300 transform hover:scale-105`}
                        aria-label={`צור קשר בווצאפ עבור השירות ${service.title}`}
                        onClick={() => contactByWhatsApp()}
                      >
                        <MessageCircle className="w-4 h-4 ml-2" aria-hidden="true" />
                        בואו נתחיל לעבוד
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900/80 to-blue-900/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                למה לבחור בנו?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                אנחנו לא סתם עוד חברת פיתוח - אנחנו השותפים הדיגיטליים שלכם להצלחה
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">מהיר ויעיל</h3>
                <p className="text-slate-300">
                  אנחנו מספקים פרויקטים איכותיים בזמן הכי קצר - ללא פשרות על איכות
                </p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">איכות מקצועית</h3>
                <p className="text-slate-300">
                  כל פרויקט מתוכנן ומבוצע ברמה הגבוהה ביותר עם תשומת לב לכל פרט
                </p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm">
                <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">תמיכה אישית</h3>
                <p className="text-slate-300">
                  אנחנו כאן בשבילכם לפני, במהלך ואחרי הפרויקט - תמיכה מלאה ואישית
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              בואו נדבר על הפרויקט שלכם! אנחנו כאן כדי להפוך את החזון הדיגיטלי שלכם למציאות.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={contactByWhatsApp}
              >
                <MessageCircle className="w-6 h-6 ml-3" />
                בואו נתחיל בווצאפ!
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-12 py-6 text-xl rounded-2xl transition-all duration-300 bg-transparent hover:scale-105"
              >
                <CheckCircle className="w-6 h-6 mr-3" />
                קבלו הצעת מחיר
              </Button>
            </div>
          </div>
        </section>

        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default ServicesPage;