import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import { useState } from "react";
import { 
  Code, 
  Search, 
  Palette, 
  Target, 
  Settings, 
  Lock, 
  Gauge, 
  BookOpen, 
  GraduationCap,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Phone,
  MessageCircle
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const ServicesPage = () => {
  const { contactByWhatsApp } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>("הכל");

  const services = [
    {
      id: 1,
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "🆘 עזרה ראשונה",
      category: "תיקון אתרים",
      problem: "אתר שנבנה בעזרת AI לא עובד / לא נראה טוב / לא מביא לקוחות",
      solution: "תיקון ושדרוג אתרים שנבנו בעזרת AI - כשניסיתם לבד ונתקעתם",
      uniqueness: "הכרה של כלי ה-AI השונים, שפות תכנות שונות ומבנה הפרויקטים המופקים",
      targetAudience: "בעלי מקצועות חופשיים שניסו לבנות אתר בעצמם",
      price: "1,500-3,500₪",
      priceType: "לבדיקה + דו''ח מפורט + תיקונים"
    },
    {
      id: 2,
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      title: "🔍 סריקה ופתרונות",
      category: "ניתוח אתרים",
      problem: "האתר לא מביא לקוחות ולא יודע למה ומה לתקן",
      solution: "סריקה מקצועית של האתר + דוח פידבק מפורט עם המלצות לתיקון",
      uniqueness: "יכולת לזהות בעיות טכניות, עיצוביות ושיווקיות באתר בצורה מקצועית",
      targetAudience: "בעלי עסקים עם אתר קיים שלא מביא תוצאות",
      price: "399-499₪",
      priceType: "לבדיקה + דו''ח מפורט"
    },
    {
      id: 3,
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "🎨 אתר תדמית לאמנים וספורטאים",
      category: "בניית אתרים",
      problem: "אמנים, ספורטאים ומקצועות חופשיים זקוקים לנוכחות דיגיטלית מקצועית",
      solution: "אתר תדמית מרשים + גלריה מקצועית + מערכת הזמנות + אופטימיזציה למובייל",
      uniqueness: "התמחות בעיצוב ויזואלי מותאם לתחום המקצועי + תבניות ייחודיות + SEO מותאם",
      targetAudience: "אמנים, ספורטאים, צלמים, מעצבים, יועצים, מטפלים",
      price: "2,500-3,300₪",
      priceType: "כולל עיצוב מותאם"
    },
    {
      id: 4,
      icon: <Palette className="w-8 h-8 text-emerald-400" />,
      title: "🏢 אתר לעסקים קטנים-בינוניים",
      category: "בניית אתרים",
      problem: "עסקים קטנים-בינוניים זקוקים לנוכחות דיגיטלית מקצועית",
      solution: "אתר מרשים + גלריה מקצועית + מערכת הזמנות + אופטימיזציה למובייל",
      uniqueness: "התמחות בעיצוב ויזואלי מותאם לתחום העסק + תבניות ייחודיות + SEO מותאם",
      targetAudience: "סלוני יופי, מניקוריסטיות, מסעדות ובתי קפה, קיוסקים, משרדי עו״ד",
      price: "4,500-8,900₪",
      priceType: "כולל עיצוב מותאם"
    },
    {
      id: 5,
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "🎯 SEO מקומי לאמנים וספורטאים",
      category: "קידום אתרים",
      problem: "אמנים עם אתרים יפים שאף אחד לא מוצא בגוגל כשמחפשים בעיר שלהם",
      solution: "אופטימיזציה לחיפושים מקומיים, הגדרת Google My Business, קידום על מילות מפתח",
      uniqueness: "התמחות במילות מפתח של אמנים מקומיים, הבנת התחרות בתחום",
      targetAudience: "אמנים, מאמנים אישיים, מוזיקאים שרוצים לקוחות מקומיים באזור המגורים",
      price: "1,300-3,300₪",
      priceType: "פרויקט + 400₪ תחזוקה חודשית"
    },
    {
      id: 6,
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "🎯 SEO מקומי לעסקים קטנים-בינוניים",
      category: "קידום אתרים",
      problem: "עסקים שאף אחד לא מוצא בגוגל כשמחפשים בעיר שלהם",
      solution: "אופטימיזציה לחיפושים מקומיים, הגדרת Google My Business, קידום על מילות מפתח",
      uniqueness: "התמחות במילות מפתח של העסק, הבנת התחרות בתחום",
      targetAudience: "עסקים וחנויות שרוצים לקוחות מקומיים באזור המגורים",
      price: "1,800-2,500₪",
      priceType: "פרויקט + 500₪ תחזוקה חודשית"
    },
    {
      id: 7,
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: "🔧 חבילת תחזוקה חודשית בסיסית",
      category: "תחזוקה",
      problem: "בעלי אתרים קטנים שזקוקים לתחזוקה שוטפת אבל לא יכולים להרשות שירות יקר",
      solution: "עדכוני מערכת ותוספים, גיבוי חודשי, סריקת קישורים שבורים, בדיקת PageSpeed",
      uniqueness: "חבילה מקיפה במחיר נגיש, דוח מפורט חודשי, זמינות לשאלות",
      targetAudience: "בעלי עסקים קטנים, אמנים, מקצועות חופשיים עם אתרים קיימים",
      price: "149-299₪",
      priceType: "לחודש (מנוי שנתי)"
    },
    {
      id: 8,
      icon: <Settings className="w-8 h-8 text-red-400" />,
      title: "🔧 חבילת תחזוקה חודשית מתקדמת",
      category: "תחזוקה",
      problem: "בעלי אתרים עסקיים שזקוקים לתחזוקה מתקדמת יותר ותמיכה צמודה",
      solution: "עדכוני מערכת ותוספים, גיבוי שבועי, ניטור פרואקטיבי 24/7, שעות תמיכה נוספות, אופטימיזציה בסיסית",
      uniqueness: "ניטור מתקדם, תמיכה מהירה יותר, דוחות ביצועים חודשיים, יכולת שחזור מהיר",
      targetAudience: "בעלי עסקים בינוניים, אתרי מסחר אלקטרוני, עורכי דין, רופאים",
      price: "399-599₪",
      priceType: "לחודש (מנוי שנתי)"
    },
    {
      id: 9,
      icon: <Settings className="w-8 h-8 text-yellow-400" />,
      title: "🔧 חבילת תחזוקה חודשית פרימיום",
      category: "תחזוקה",
      problem: "בעלי אתרים גדולים ועסקים שזקוקים לשירות מלא וניהול תוכן",
      solution: "כל מה שיש במתקדמת + עדכוני תוכן קלים, דוחות ביצועים מפורטים, ייעוץ אסטרטגי חודשי, אופטימיזציה מתקדמת",
      uniqueness: "שירות כמעט מלא, ניהול חלקי של האתר, יחס אישי, ייעוץ מתמשך, דוחות מקצועיים",
      targetAudience: "עסקים גדולים, אתרי מסחר מתקדמים, משרדי עורכי דין גדולים, מרפאות פרטיות",
      price: "699-999₪",
      priceType: "לחודש (מנוי שנתי)"
    },
    {
      id: 10,
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "🔒 שירותי אבטחה ובטיחות אתרים",
      category: "אבטחה",
      problem: "אתרים נפרצים, וירוסים, התקפות DDoS, ואיבוד מידע שהורס עסקים שלמים",
      solution: "מערכת אבטחה מתקדמת, גיבוי יומי אוטומטי, מוניטורינג 24/7, שחזור מהיר",
      uniqueness: "שירות מלא ומקיף, תגובה מהירה לאירועי אבטחה, יכולת שחזור תוך שעות",
      targetAudience: "בעלי עסקים שהאתר קריטי להצלחתם ולא יכולים להרשות לעצמם השבתה",
      price: "299-599₪",
      priceType: "לחודש (לפי רמת האבטחה)"
    },
    {
      id: 11,
      icon: <Gauge className="w-8 h-8 text-yellow-500" />,
      title: "🚀 שירותי מהירות ואופטימיזציה",
      category: "אופטימיזציה",
      problem: "אתרים איטיים שגורמים ללקוחות לעזוב, ירידה בדירוגי גוגל וחוויית משתמש גרועה",
      solution: "אופטימיזציה מלאה למהירות, דחיסת תמונות, אופטימיזציה לקוד, CDN ושיפור PageSpeed",
      uniqueness: "מתמחה באתרים של אמנים עם הרבה תמונות, אופטימיזציה ללא פגיעה באיכות",
      targetAudience: "בעלי אתרים עם תמונות רבות, אמנים, צלמים, אתרי פורטפוליו כבדים",
      price: "800-1,500₪",
      priceType: "פרויקט חד פעמי"
    }
  ];

  const categories = [
    { name: "תיקון אתרים", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300", count: 1 },
    { name: "ניתוח אתרים", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300", count: 1 },
    { name: "בניית אתרים", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300", count: 2 },
    { name: "קידום אתרים", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300", count: 2 },
    { name: "תחזוקה", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300", count: 3 },
    { name: "אבטחה", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300", count: 1 },
    { name: "אופטימיזציה", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300", count: 1 }
  ];

  // סינון השירותים לפי הקטגוריה הנבחרת
  const filteredServices = selectedCategory === "הכל" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

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
      >      </div>
      
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
      
      <Header />
      <div className="relative z-10">
        <Breadcrumbs 
          items={[
            { label: "השירותים שלנו", current: true }
          ]} 
        />
        
        {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              השירותים שלנו
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              פתרונות דיגיטליים מקצועיים ומותאמים לכל סוג של עסק ותקציב - 
              מתיקון אתרים קיימים ועד פתרונות דיגיטליים מתקדמים
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">סנן לפי קטגוריה</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {/* הכל */}
              <button
                onClick={() => setSelectedCategory("הכל")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                  selectedCategory === "הכל"
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
                }`}
                aria-pressed={selectedCategory === "הכל"}
                tabIndex={0}
              >
                הכל ({services.length})
              </button>
              
              {/* Category buttons */}
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                    selectedCategory === category.name
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
                  }`}
                  aria-pressed={selectedCategory === category.name}
                  tabIndex={0}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            
            {/* Active filter indicator */}
            {selectedCategory !== "הכל" && (
              <div className="text-center space-y-4">
                <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-lg px-4 py-2">
                  מציג: {selectedCategory}
                </Badge>
                <div>
                  <button
                    onClick={() => setSelectedCategory("הכל")}
                    className="text-slate-400 hover:text-white underline text-sm transition-colors"
                    aria-label="נקה סינון וחזור לתצוגת כל השירותים"
                  >
                    נקה סינון
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {selectedCategory === "הכל" ? services.length : filteredServices.length}
              </div>
              <div className="text-slate-400 text-sm">
                {selectedCategory === "הכל" ? "שירותים מקצועיים" : `שירותים ב${selectedCategory}`}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-slate-400 text-sm">קטגוריות שירות</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-slate-400 text-sm">לקוחות מרוצים</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-slate-400 text-sm">תמיכה טכנית</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <main id="main-content" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <h2 className="sr-only">רשימת השירותים שלנו</h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="רשימת השירותים הזמינים"
          >
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
              <article 
                key={service.id} 
                role="listitem"
                className="bg-slate-800/80 border-slate-700 hover:bg-slate-700/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl group backdrop-blur-sm rounded-lg border focus-within:ring-4 focus-within:ring-blue-500"
                tabIndex={0}
                aria-labelledby={`service-title-${service.id}`}
                aria-describedby={`service-description-${service.id}`}
              >
                <Card className="bg-transparent border-none shadow-none h-full">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center items-center mb-4">
                      <div 
                        className="p-4 bg-slate-700/50 rounded-2xl group-hover:bg-slate-600/50 transition-all duration-300"
                        role="img"
                        aria-label={`אייקון עבור ${service.title}`}
                      >
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle 
                      id={`service-title-${service.id}`}
                      className="text-xl font-bold text-white text-center mb-3"
                    >
                      {service.title}
                    </CardTitle>
                    <div className="flex justify-center mb-4">
                      <Badge 
                        variant="secondary" 
                        className={
                          categories.find(cat => cat.name === service.category)?.color || 
                          "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                        }
                        role="note"
                        aria-label={`קטגוריה: ${service.category}`}
                      >
                        {service.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent id={`service-description-${service.id}`}>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">הבעיה:</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {service.problem}
                        </p>
                      </div>
                      
                      <Separator className="bg-slate-600" role="separator" />
                      
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">הפתרון:</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {service.solution}
                        </p>
                      </div>
                      
                      <Separator className="bg-slate-600" role="separator" />
                      
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">למה אנחנו:</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {service.uniqueness}
                        </p>
                      </div>
                      
                      <Separator className="bg-slate-600" role="separator" />
                      
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-2">מתאים עבור:</h4>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {service.targetAudience}
                        </p>
                      </div>
                      
                      <div 
                        className="bg-slate-700/50 rounded-lg p-4 text-center"
                        role="region"
                        aria-label="מידע על מחיר השירות"
                      >
                        <div className="text-2xl font-bold text-cyan-400 mb-1">
                          {service.price}
                        </div>
                        <div className="text-xs text-slate-400">
                          {service.priceType}
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        aria-label={`צור קשר בווצאפ עבור השירות ${service.title}`}
                        onClick={() => contactByWhatsApp()}
                      >
                        <MessageCircle className="w-4 h-4 ml-2" aria-hidden="true" />
                        פנו אלינו בווצאפ
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </article>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="bg-slate-800/80 rounded-lg p-8 max-w-md mx-auto">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">אין שירותים בקטגוריה זו</h3>
                  <p className="text-slate-300 mb-6">
                    לא נמצאו שירותים בקטגוריה "{selectedCategory}". 
                    נסו לבחור קטגוריה אחרת או לחזור לתצוגת "הכל".
                  </p>
                  <Button 
                    onClick={() => setSelectedCategory("הכל")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
                  >
                    הצג את כל השירותים
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            לא מצאתם מה שחיפשתם?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            אנחנו מומחים בפתרונות מותאמים אישית. ספרו לנו על הצרכים שלכם ונמצא פתרון מושלם עבורכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={contactByWhatsApp}
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              התייעצו איתנו בווצאפ
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-10 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent">
              <CheckCircle className="w-5 h-5 mr-2" />
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
