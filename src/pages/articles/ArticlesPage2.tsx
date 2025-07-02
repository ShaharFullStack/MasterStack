import { ArrowRight, Calendar, Clock, Home, ChevronLeft, Building, ExternalLink, User, BookOpen, Share2, Target, Code, Lightbulb, Copy, CheckCircle, Globe, Users, TrendingUp, AlertCircle, Star, Eye, Award, Search, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";

const BusinessWebsiteGuide = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const article = {
    id: 2,
    title: "מדריך מקיף: איך לבנות אתר עסקי שמביא לקוחות",
    description: "כל מה שאתם צריכים לדעת על בניית אתר עסקי מנצח - מהדף הבית המושלם ועד לעמודי הבידול שיפרידו אתכם מהמתחרים. כולל טיפים מעשיים ודוגמאות עבודה.",
    date: "2 ביולי 2025",
    category: "עסקים דיגיטליים",
    icon: <Building className="w-5 h-5" />,
    readTime: "12 דקות קריאה",
    author: "MasterStack Digital",
    tags: ["אתרי עסק", "דף בית", "מרקטינג דיגיטלי", "המרה", "UX/UI"]
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ children, language = "html", index }) => (
    <div className="relative bg-slate-800 rounded-xl border border-slate-600/50 overflow-hidden mb-6">
      <div className="flex items-center justify-between bg-slate-700/50 px-4 py-2 border-b border-slate-600/50">
        <span className="text-sm text-gray-400">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(children, index)}
          className="text-gray-400 hover:text-white h-8 w-8 p-0"
        >
          {copiedCode === index ? (
            <CheckCircle className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">
          {children}
        </pre>
      </div>
    </div>
  );

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
      <AccessibilityMenu />
      
      <div className="relative z-10">
        <Breadcrumbs 
          items={[
            { label: "מאמרים", href: "/news" },
            { label: "מדריך לבניית אתר עסקי מנצח", current: true }
          ]} 
        />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900/80 via-green-900/40 to-slate-900/80 py-20">
          <div className="container mx-auto px-6 relative z-10">
          {/* Article Header */}
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-green-600/20 p-3 rounded-2xl border border-green-600/30">
                <div className="text-green-400">
                  <Building className="w-6 h-6" />
                </div>
              </div>
              <Badge className="bg-green-600/20 text-green-400 border-green-600/30 px-4 py-2">
                {article.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {article.description}
            </p>

            {/* Article Meta */}
            <div className="flex items-center justify-center gap-8 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-center gap-4">
                    <Button size="lg" variant="outline" className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                שתף
              </Button>
                    <Button size="lg" variant="outline" className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors">
                <BookOpen className="w-4 h-4 mr-2" />
                שמור לקריאה
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50">
            <CardContent className="p-10 md:p-16">
              {/* Table of Contents */}
              <div className="bg-slate-700/30 rounded-xl p-8 mb-16 border border-slate-600/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-400" />
                  תוכן העניינים
                </h3>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li><a href="#intro" className="hover:text-green-400 transition-colors">למה אתר עסקי הוא הכרח, לא בחירה?</a></li>
                  <li><a href="#homepage" className="hover:text-green-400 transition-colors">דף הבית המושלם: 7 רכיבים חובה</a></li>
                  <li><a href="#essential-pages" className="hover:text-green-400 transition-colors">עמודים חיוניים לכל אתר עסקי</a></li>
                  <li><a href="#differentiation" className="hover:text-green-400 transition-colors">עמוד הבידול: איך להבדיל מהמתחרים</a></li>
                  <li><a href="#trust-building" className="hover:text-green-400 transition-colors">בניית אמון ואמינות באתר</a></li>
                  <li><a href="#conversion" className="hover:text-green-400 transition-colors">אופטימיזציה להמרה - הופכים מבקרים ללקוחות</a></li>
                  <li><a href="#mobile-first" className="hover:text-green-400 transition-colors">עיצוב Mobile-First: למה זה קריטי</a></li>
                  <li><a href="#seo-basics" className="hover:text-green-400 transition-colors">SEO בסיסי לאתרי עסק</a></li>
                  <li><a href="#mistakes" className="hover:text-green-400 transition-colors">טעויות נפוצות שהורגות המרות</a></li>
                  <li><a href="#examples" className="hover:text-green-400 transition-colors">דוגמאות מעוררות השראה</a></li>
                </ul>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert prose-green max-w-none">
                
                <section id="intro" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-green-400 pr-4">
                    למה אתר עסקי הוא הכרח, לא בחירה?
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    בעולם של 2025, לא להיות ברשת זה כמו לא להיות קיים. <strong className="text-green-400">93% מהלקוחות</strong> מחפשים עסקים ברשת לפני שהם מתקשרים או מגיעים למקום. האתר שלכם הוא לרוב הרושם הראשון - והוא יכול לקבוע האם הלקוח יבחר בכם או בהמתחרים.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    אתר עסקי טוב לא רק מציג מידע - הוא <strong>מכריח לקוחות לפעול</strong>. הוא בונה אמון, מתקשר עם קהל היעד, ומוביל לקוחות פוטנציאליים דרך מסע הקנייה עד לפנייה או רכישה.
                  </p>

                  <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-8 mb-8">
                    <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      נתונים שכדאי לדעת
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <strong>75%</strong> מהמשתמשים שופטים אמינות עסק לפי עיצוב האתר</li>
                      <li>• <strong>53%</strong> עוזבים אתר שנטען יותר מ-3 שניות</li>
                      <li>• <strong>88%</strong> פחות נוטים לחזור לאתר אחרי חוויה גרועה</li>
                      <li>• <strong>200%</strong> עלייה בהמרות באתרים מותאמי מובייל</li>
                    </ul>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="seo-basics" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-green-400 pr-4">
                    SEO בסיסי לאתרי עסק
                  </h2>

                  <p className="text-gray-300 text-lg mb-8">
                    מה שווה אתר מושלם אם אף אחד לא מוצא אותו? <strong>SEO (Search Engine Optimization)</strong> זה מה שעושה את ההבדל בין אתר שמביא לקוחות לאתר שפשוט קיים.
                  </p>

                  <div className="space-y-8">
                    
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">חיפושים מקומיים - המטבע הכי חם</h3>
                        <p className="text-gray-300 mb-6">
                          עסקים מקומיים חייבים להתמקד ב<strong>Local SEO</strong> - אנשים מחפשים "עורך דין ליד" או "מוסך בפתח תקווה":
                        </p>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">אופטימיזציה למילות מפתח מקומיות:</h4>
                            <CodeBlock language="html" index="local-seo">
{`<!-- כותרות עם מיקום -->
<h1>עורך דין נזיקין בתל אביב - משרד פלוני ושות'</h1>
<h2>ייצוג נפגעי תאונות דרכים במרכז</h2>

<!-- תוכן מקומי -->
<p>משרד עורכי הדין שלנו בתל אביב מתמחה בייצוג נפגעי תאונות דרכים 
   באזור המרכז. אנו משרתים לקוחות בתל אביב, רמת גן, גבעתיים ובת ים.</p>

<!-- Schema Markup למקום עסק -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LegalService", 
  "name": "משרד עורכי דין פלוני ושות'",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "רחוב הרצל 123",
    "addressLocality": "תל אביב",
    "postalCode": "64364",
    "addressCountry": "IL"
  },
  "telephone": "+972-3-1234567",
  "url": "https://www.lawfirm.co.il",
  "priceRange": "$",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.0853",
    "longitude": "34.7818"
  },
  "openingHours": "Mo-Fr 08:00-18:00",
  "areaServed": ["תל אביב", "רמת גן", "גבעתיים", "בת ים"]
}
</script>

<!-- תמונות עם alt tags מקומיות -->
<img src="office-tel-aviv.jpg" 
     alt="משרד עורכי דין בתל אביב - רחוב הרצל 123">

<!-- קישורים פנימיים עם anchor text מקומי -->
<a href="/services/car-accidents-tel-aviv">
  טיפול בתאונות דרכים בתל אביב
</a>`}
                            </CodeBlock>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">Google My Business - החובה הכי חשובה:</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">מה חובה למלא:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• שם העסק מדויק</li>
                                  <li>• כתובת מלאה ומדויקת</li>
                                  <li>• מספר טלפון מקומי</li>
                                  <li>• שעות פעילות נכונות</li>
                                  <li>• קטגוריות רלוונטיות</li>
                                  <li>• תמונות איכותיות</li>
                                  <li>• תיאור מפורט</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">טיפים לחשיפה מקסימלית:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• פרסום עדכונים שבועי</li>
                                  <li>• מענה על כל הביקורות</li>
                                  <li>• הוספת תמונות חדשות</li>
                                  <li>• שימוש בתכונת שאלות ותשובות</li>
                                  <li>• פרסום אירועים מיוחדים</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">תוכן שמדרג גבוה בגוגל</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">מילות מפתח אסטרטגיות:</h4>
                            <p className="text-gray-300 mb-4">
                              חשבו איך הלקוחות שלכם מחפשים אתכם:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">מילות מפתח ראשוניות:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• "עורך דין נזיקין"</li>
                                  <li>• "פיצוי תאונת דרכים"</li>
                                  <li>• "תביעת נזיקין"</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">מילות מפתח ארוכות:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• "כמה פיצוי מגיע לי אחרי תאונה"</li>
                                  <li>• "איך תובעים את חברת הביטוח"</li>
                                  <li>• "עורך דין לתאונות עבודה בחיפה"</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">מילות מפתח דחופות:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• "עורך דין דחוף תאונה"</li>
                                  <li>• "ייעוץ משפטי מיידי"</li>
                                  <li>• "עזרה בתאונת דרכים עכשיו"</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">תוכן שעונה על שאלות:</h4>
                            <p className="text-gray-300 mb-4">
                              יצרו דפים שעונים על השאלות הנפוצות של הלקוחות:
                            </p>
                            <CodeBlock language="html" index="faq-seo">
{`<!-- דף שאלות נפוצות מותאם SEO -->
<article>
  <h1>שאלות נפוצות על תביעות נזיקין בישראל</h1>
  
  <section>
    <h2>כמה זמן יש לי לתבוע אחרי תאונת דרכים?</h2>
    <p>לפי חוק התקיומות, יש לכם <strong>3 שנים</strong> מיום התאונה להגיש תביעה.
       אבל חשוב לפעול מוקדם ככל האפשר כי:</p>
    <ul>
      <li>עדויות נעלמות עם הזמן</li>
      <li>זיכרונות מתעמעמים</li>
      <li>מסמכים רפואיים יכולים להילך לאיבוד</li>
    </ul>
  </section>
  
  <section>
    <h2>כמה עולה עורך דין לתביעת נזיקין?</h2>
    <p>ברוב המקרים אנחנו עובדים על בסיס <strong>"רק בהצלחה"</strong> - 
       זה אומר שאתם משלמים רק אם מנצחים בתיק...</p>
  </section>
</article>

<!-- Schema markup לשאלות נפוצות -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "כמה זמן יש לי לתבוע אחרי תאונת דרכים?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "לפי חוק התקיומות, יש 3 שנים מיום התאונה להגיש תביעה..."
    }
  }]
}
</script>`}
                            </CodeBlock>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">טכניקות SEO מתקדמות</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">בניית קישורים מקומיים:</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">מקורות איכותיים:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• לשכת עורכי הדין</li>
                                  <li>• עיתונים מקומיים</li>
                                  <li>• אתרי מידע משפטי</li>
                                  <li>• פורומים מקצועיים</li>
                                  <li>• אתרי רשויות מקומיות</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">אסטרטגיות לקבלת קישורים:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• כתיבת מאמרים מקצועיים</li>
                                  <li>• ראיונות בתקשורת</li>
                                  <li>• הרצאות ובכנסים</li>
                                  <li>• שיתופי פעולה עם עסקים</li>
                                  <li>• חסויות ותרומות</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">Technical SEO בסיסי:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>מהירות טעינה</strong> - מתחת ל-3 שניות</li>
                              <li>• <strong>HTTPS</strong> - אבטחה חיונית</li>
                              <li>• <strong>מותאם מובייל</strong> - Google Mobile-First</li>
                              <li>• <strong>XML Sitemap</strong> - מפת האתר לגוגל</li>
                              <li>• <strong>Meta descriptions</strong> - תיאור משכנע לכל דף</li>
                              <li>• <strong>Alt texts</strong> - תיאור תמונות</li>
                            </ul>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="mistakes" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-red-400 pr-4">
                    טעויות נפוצות שהורגות המרות
                  </h2>

                  <p className="text-gray-300 text-lg mb-8">
                    אלו הטעויות הכי נפוצות שאנחנו רואים באתרי עסק - ואיך לתקן אותן <strong>מיד</strong>:
                  </p>

                  <div className="space-y-8">
                    
                    <Card className="bg-red-900/20 border-red-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                          <AlertCircle className="w-6 h-6" />
                          טעויות תוכן שהורגות אמון
                        </h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <div className="grid md:grid-cols-2 gap-8">
                              <div>
                                <h4 className="text-red-400 font-bold mb-3">❌ מה לא לעשות:</h4>
                                <ul className="space-y-2 text-gray-300">
                                  <li>• <strong>"אנחנו הטובים ביותר"</strong> - בלי הוכחה</li>
                                  <li>• <strong>"שירות איכותי"</strong> - ביטוי ריק</li>
                                  <li>• <strong>"מחירים תחרותיים"</strong> - לא אומר כלום</li>
                                  <li>• <strong>"צוות מקצועי"</strong> - כל אחד אומר את זה</li>
                                  <li>• <strong>"שנים של ניסיון"</strong> - כמה בדיוק?</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-red-400 font-bold mb-3">❌ דוגמאות גרועות:</h4>
                                <ul className="space-y-2 text-gray-300">
                                  <li>• <strong>"אנחנו מומחים"</strong> - בלי פירוט</li>
                                  <li>• <strong>"שירות לקוחות מעולה"</strong> - מה זה אומר?</li>
                                  <li>• <strong>"מחירים נוחים"</strong> - מה זה נוח?</li>
                                  <li>• <strong>"צוות מנוסה"</strong> - כמה ניסיון?</li>
                                  <li>• <strong>"משרד עם מוניטין"</strong> - מוניטין של מה?</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-green-400 font-bold mb-3">✅ איך לכתוב נכון:</h4>
                                <ul className="space-y-2 text-gray-300">
                                  <li>• <strong>"גבינו 50M ש"ח ב-2024"</strong> - נתון מדויק</li>
                                  <li>• <strong>"תשובה תוך 2 שעות"</strong> - התחייבות ברורה</li>
                                  <li>• <strong>"15% שכ"ט רק בהצלחה"</strong> - מחיר שקוף</li>
                                  <li>• <strong>"3 עו"ד מומחים מוסמכים"</strong> - פרט קונקרטי</li>
                                  <li>• <strong>"23 שנה, 1,500+ תיקים"</strong> - ספציפי</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-6">
                            <h4 className="text-yellow-400 font-bold mb-3">💡 הכלל הזהב:</h4>
                            <p className="text-gray-300">
                              כל טענה באתר צריכה להיות <strong>מדידה, מוכחת או ספציפית</strong>. אל תשתמשו בביטויים ריקים מתוכן - הם רק מרחיקים לקוחות.
                            </p>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="homepage" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-green-400 pr-4">
                    דף הבית המושלם: 7 רכיבים חובה
                  </h2>
                  
                  <p className="text-gray-300 text-lg mb-8">
                    דף הבית הוא כמו ראוות החנות - הוא צריך לענות על השאלות הבסיסיות של המבקר תוך <strong>5 שניות</strong>: מה אתם עושים, למי, ולמה לבחור בכם?
                  </p>

                  <div className="space-y-10">
                    
                    {/* Hero Section */}
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <Star className="w-6 h-6" />
                          1. Hero Section מרשים
                        </h3>
                        <p className="text-gray-300 mb-6">
                          הקטע הראשון שהמבקרים רואים. צריך לכלול:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-bold mb-3">חובות:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>כותרת ראשית</strong> - מה אתם עושים במילה אחת</li>
                              <li>• <strong>תת-כותרת</strong> - איך אתם פותרים בעיה</li>
                              <li>• <strong>CTA בולט</strong> - כפתור פעולה ברור</li>
                              <li>• <strong>תמונה/וידאו</strong> - מראה את המוצר/שירות</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-bold mb-3">דוגמה:</h4>
                            <div className="bg-slate-800 rounded-lg p-4 border border-slate-600">
                              <h5 className="text-green-400 font-bold">עורכי דין פלוני</h5>
                              <p className="text-gray-300 text-sm mt-1">מגנים על הזכויות שלכם בכל תחומי המשפט</p>
                              <Button className="bg-green-600 hover:bg-green-700 text-white mt-3 text-xs">
                                קבעו ייעוץ חינם
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Value Proposition */}
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <Target className="w-6 h-6" />
                          2. הצעת הערך הייחודית (Value Proposition)
                        </h3>
                        <p className="text-gray-300 mb-4">
                          בקטע זה תסבירו <strong>למה לבחור בכם</strong> ולא במתחרים:
                        </p>
                        <CodeBlock language="html" index="value-prop">
{`<section class="value-proposition">
  <h2>למה 1,500+ לקוחות בחרו בנו?</h2>
  
  <div class="benefits-grid">
    <div class="benefit">
      <icon>⚡</icon>
      <h3>מהירות תגובה</h3>
      <p>תמיד עונים תוך 24 שעות</p>
    </div>
    
    <div class="benefit">
      <icon>🏆</icon>
      <h3>מומחיות מוכחת</h3>
      <p>15 שנות ניסיון בתחום</p>
    </div>
    
    <div class="benefit">
      <icon>💰</icon>
      <h3>מחירים הוגנים</h3>
      <p>ללא עלויות נסתרות</p>
    </div>
  </div>
</section>`}
                        </CodeBlock>
                      </CardContent>
                    </Card>

                    {/* Services Overview */}
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <Building className="w-6 h-6" />
                          3. תמצית השירותים/מוצרים
                        </h3>
                        <p className="text-gray-300 mb-4">
                          הציגו את 3-4 השירותים העיקריים שלכם <strong>בקצרה</strong>:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-2">דיני נזיקין</h4>
                            <p className="text-gray-300 text-sm">טיפול בתאונות דרכים ונזקי גוף</p>
                            <Button variant="outline" className="mt-3 text-xs border-gray-600 text-blue-800">
                              קרא עוד
                            </Button>
                          </div>
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-2">דיני עבודה</h4>
                            <p className="text-gray-300 text-sm">ייצוג עובדים ומעסיקים</p>
                            <Button variant="outline" className="mt-3 text-xs border-gray-600 text-blue-800">
                              קרא עוד
                            </Button>
                          </div>
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-2">דיני משפחה</h4>
                            <p className="text-gray-300 text-sm">גירושין וענייני משפחה</p>
                            <Button variant="outline" className="mt-3 text-xs border-gray-600 text-blue-800">
                              קרא עוד
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Social Proof */}
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <Users className="w-6 h-6" />
                          4. הוכחה חברתית (Social Proof)
                        </h3>
                        <p className="text-gray-300 mb-6">
                          לקוחות סומכים על לקוחות אחרים יותר מאשר עליכם:
                        </p>
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-white font-bold mb-3">סוגי הוכחה חברתית:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>מספרים מרשימים</strong> - "5,000+ לקוחות מרוצים"</li>
                              <li>• <strong>המלצות קצרות</strong> - ציטוטים של 1-2 משפטים</li>
                              <li>• <strong>לוגו לקוחות</strong> - חברות מוכרות שעבדתם איתן</li>
                              <li>• <strong>ציונים וכוכבים</strong> - 4.9/5 בGoogle Reviews</li>
                            </ul>
                          </div>
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                                A.R
                              </div>
                              <div>
                                <h5 className="text-white font-bold">אברהם רוזן</h5>
                                <p className="text-gray-400 text-sm">מנכ"ל חברת הייטק</p>
                              </div>
                            </div>
                            <p className="text-gray-300 text-sm">"טיפלו בתיק המורכב שלנו בצורה מהירה ומקצועית. ממליץ בחום!"</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* About Section */}
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <Eye className="w-6 h-6" />
                          5. קטע "אודותינו" קצר
                        </h3>
                        <p className="text-gray-300 mb-4">
                          <strong>לא</strong> סיפור החיים שלכם - רק הדברים שחשובים ללקוח:
                        </p>
                        <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                          <h4 className="text-white font-bold mb-3">דוגמה טובה:</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            "משרד עורכי הדין פלוני & שות' פועל כבר 15 שנה והתמחה בייצוג קרבנות תאונות דרכים. 
                            טיפלנו ביותר מ-3,000 תיקים וגבינו פיצויים בסך של מעל 50 מיליון שקל עבור לקוחותינו. 
                            המומחיות שלנו מבטיחה שתקבלו את הפיצוי המקסימלי המגיע לכם."
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Contact CTA */}
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <Phone className="w-6 h-6" />
                          6. קריאה לפעולה ברורה
                        </h3>
                        <p className="text-gray-300 mb-6">
                          בסוף דף הבית חייב להיות CTA חזק שמוביל לפעולה:
                        </p>
                        <div className="space-y-4">
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">דוגמאות CTA מנצחים:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Button className="bg-green-600 hover:bg-green-700 text-white">
                                📞 התקשרו עכשיו - ייעוץ חינם
                              </Button>
                              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                📝 השאירו פרטים לקבלת הצעת מחיר
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Trust Signals */}
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                          <Award className="w-6 h-6" />
                          7. סימני אמון ואמינות
                        </h3>
                        <p className="text-gray-300 mb-6">
                          רכיבים שבונים אמון עוד לפני שהלקוח מתקשר:
                        </p>
                        <div className="grid md:grid-cols-4 gap-6">
                          <div className="text-center">
                            <div className="bg-green-600/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                              <Award className="w-8 h-8 text-green-400" />
                            </div>
                            <h4 className="text-white font-bold text-sm">תעודות הסמכה</h4>
                          </div>
                          <div className="text-center">
                            <div className="bg-blue-600/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                              <Users className="w-8 h-8 text-blue-400" />
                            </div>
                            <h4 className="text-white font-bold text-sm">חברות במקצועיות</h4>
                          </div>
                          <div className="text-center">
                            <div className="bg-purple-600/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                              <Phone className="w-8 h-8 text-purple-400" />
                            </div>
                            <h4 className="text-white font-bold text-sm">מספר טלפון ברור</h4>
                          </div>
                          <div className="text-center">
                            <div className="bg-yellow-600/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                              <Globe className="w-8 h-8 text-yellow-400" />
                            </div>
                            <h4 className="text-white font-bold text-sm">כתובת פיזית</h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="essential-pages" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-green-400 pr-4">
                    עמודים חיוניים לכל אתר עסקי
                  </h2>

                  <p className="text-gray-300 text-lg mb-8">
                    מעבר לדף הבית, יש עמודים שכל אתר עסקי <strong>חייב</strong> לכלול כדי לבנות אמון ולענות על שאלות הלקוחות:
                  </p>

                  <div className="space-y-8">
                    
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">עמוד שירותים/מוצרים מפורט</h3>
                        <p className="text-gray-300 mb-6">
                          כאן תפרטו את כל מה שאתם מציעים - <strong>בפרטי ובברור</strong>:
                        </p>
                        <div className="space-y-4">
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">מה חייב להיות בעמוד שירותים:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>רשימת שירותים מפורטת</strong> - כל מה שאתם עושים</li>
                              <li>• <strong>תיאור תהליך העבודה</strong> - מה קורה אחרי שהלקוח פונה</li>
                              <li>• <strong>מחירים או טווחי מחירים</strong> - לפחות "החל מ..."</li>
                              <li>• <strong>זמני טיפול</strong> - כמה זמן לוקח כל שירות</li>
                              <li>• <strong>דוגמאות עבודה</strong> - תיקים או פרויקטים שטיפלתם בהם</li>
                            </ul>
                          </div>
                          <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-6">
                            <p className="text-yellow-400 font-bold mb-2">💡 טיפ זהב:</p>
                            <p className="text-gray-300">
                              עבור כל שירות - תסבירו <strong>למה הלקוח צריך את זה</strong> ומה יקרה אם הוא לא יטפל בבעיה עכשיו.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">עמוד "אודותינו" מקצועי</h3>
                        <p className="text-gray-300 mb-6">
                          כאן הלקוחות רוצים לדעת <strong>עם מי הם מתקשרים</strong> ולמה לסמוך עליכם:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-bold mb-3">חובות:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• סיפור הקמת החברה (קצר!)</li>
                              <li>• המומחיות והניסיון</li>
                              <li>• הצוות - מי האנשים מאחורי העסק</li>
                              <li>• ערכי החברה ודרך העבודה</li>
                              <li>• הישגים ופרסים</li>
                              <li>• מספרים מרשימים</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-bold mb-3">אסור:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• ✗ סיפורי חיים אישיים</li>
                              <li>• ✗ טקסטים ארוכים ומשעממים</li>
                              <li>• ✗ תמונות חובבניות</li>
                              <li>• ✗ פרטים לא רלוונטיים ללקוח</li>
                              <li>• ✗ "החלום שלנו הוא..."</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">עמוד צור קשר מתקדם</h3>
                        <p className="text-gray-300 mb-6">
                          לא רק טופס - עמוד שמקל על הלקוח ליצור קשר:
                        </p>
                        <CodeBlock language="html" index="contact">
{`<div class="contact-page">
  <!-- מידע יצירת קשר מרכזי -->
  <section class="contact-hero">
    <h1>בואו נדבר</h1>
    <p>זמינים 24/7 לייעוץ חינם ללא התחייבות</p>
    
    <div class="contact-methods">
      <div class="method urgent">
        <h3>🚨 מקרה דחוף?</h3>
        <a href="tel:050-1234567">050-123-4567</a>
        <span>24 שעות ביממה</span>
      </div>
      
      <div class="method regular">
        <h3>📞 יצירת קשר רגילה</h3>
        <a href="tel:03-1234567">03-123-4567</a>
        <span>א'-ה' 8:00-18:00</span>
      </div>
      
      <div class="method email">
        <h3>✉️ שליחת מייל</h3>
        <a href="mailto:info@lawfirm.co.il">info@lawfirm.co.il</a>
        <span>מענה תוך 24 שעות</span>
      </div>
    </div>
  </section>

  <!-- טופס פנייה מתקדם -->
  <section class="contact-form">
    <h2>השאירו פרטים ונחזור אליכם</h2>
    <form>
      <select name="service" required>
        <option>איזה שירות מעניין אתכם?</option>
        <option>דיני נזיקין</option>
        <option>דיני עבודה</option>
        <option>דיני משפחה</option>
      </select>
      
      <input type="text" name="name" placeholder="שם מלא" required>
      <input type="tel" name="phone" placeholder="טלפון" required>
      <input type="email" name="email" placeholder="אימייל">
      
      <textarea name="description" placeholder="תארו בקצרה את המצב"></textarea>
      
      <label>
        <input type="checkbox" required>
        קראתי ואני מסכים/ה לתנאי השימוש ומדיניות הפרטיות
      </label>
      
      <button type="submit">שלחו הודעה</button>
    </form>
  </section>

  <!-- מידע נוסף -->
  <section class="office-info">
    <div class="address">
      <h3>המשרד שלנו</h3>
      <p>רחוב הרצל 123, תל אביב</p>
      <p>קומה 5, חניה חינם</p>
    </div>
    
    <div class="hours">
      <h3>שעות פעילות</h3>
      <p>א'-ה': 8:00-18:00</p>
      <p>ו': 8:00-13:00</p>
      <p>מקרי חירום: 24/7</p>
    </div>
  </section>
</div>`}
                        </CodeBlock>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">דף המלצות ועדויות לקוחות</h3>
                        <p className="text-gray-300 mb-6">
                          עמוד שמקדש רק להוכחה חברתית - <strong>הדף הכי חשוב למרווי הרכישה</strong>:
                        </p>
                        <div className="space-y-6">
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">סוגי עדויות לכלול:</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <ul className="space-y-2 text-gray-300">
                                  <li>• <strong>עדויות כתובות</strong> עם תמונת הלקוח</li>
                                  <li>• <strong>עדויות וידאו</strong> (הכי חזקות!)</li>
                                  <li>• <strong>המלצות LinkedIn</strong></li>
                                  <li>• <strong>ביקורות Google</strong> מובאות</li>
                                </ul>
                              </div>
                              <div>
                                <ul className="space-y-2 text-gray-300">
                                  <li>• <strong>מכתבי תודה</strong> מלקוחות</li>
                                  <li>• <strong>לפני ואחרי</strong> - תוצאות עבודה</li>
                                  <li>• <strong>סיפורי הצלחה</strong> מפורטים</li>
                                  <li>• <strong>נתוני הצלחה</strong> - כמה חסכתם ללקוח</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-6">
                            <p className="text-green-400 font-bold mb-2">🎯 השיטה המנצחת:</p>
                            <p className="text-gray-300">
                              עבור כל עדות - כתבו <strong>איזו בעיה הלקוח הגיע איתה</strong>, 
                              <strong>איך טיפלתם בה</strong>, ו<strong>מה התוצאה הסופית</strong>. 
                              זה מראה ללקוחות פוטנציאליים איך אתם פותרים בעיות.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">עמודים נוספים לפי סוג העסק</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-white font-bold mb-4">עסקי שירותים:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>תיק עבודות/פורטפוליו</strong></li>
                              <li>• <strong>תהליך העבודה</strong> - שלב אחר שלב</li>
                              <li>• <strong>שאלות נפוצות (FAQ)</strong></li>
                              <li>• <strong>מדיניות מחירים</strong></li>
                              <li>• <strong>אזור לקוחות</strong> (אם רלוונטי)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-bold mb-4">חנויות ואי-קומרס:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>קטלוג מוצרים</strong></li>
                              <li>• <strong>מדיניות משלוחים</strong></li>
                              <li>• <strong>מדיניות החזרות</strong></li>
                              <li>• <strong>מדריכי שימוש</strong></li>
                              <li>• <strong>השוואת מוצרים</strong></li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="differentiation" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-green-400 pr-4">
                    עמוד הבידול: איך להבדיל מהמתחרים
                  </h2>

                  <p className="text-gray-300 text-lg mb-8">
                    זה העמוד שהופך אתכם מ"עוד עסק" ל<strong>"הבחירה הברורה"</strong>. כאן תסבירו למה לקוחות צריכים לבחור בכם ולא במתחרים.
                  </p>

                  <div className="space-y-8">
                    
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">איך למצוא את הבידול שלכם?</h3>
                        <p className="text-gray-300 mb-6">
                          לפני שכותבים את העמוד, צריך לענות על השאלות האלה:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-4">שאלות לבירור הבידול:</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                              <li>• מה אתם עושים אחרת מכולם?</li>
                              <li>• איזה תוצאות הלקוחות שלכם מקבלים?</li>
                              <li>• מה המתחרים לא עושים טוב?</li>
                              <li>• איזה ניסיון ייחודי יש לכם?</li>
                              <li>• איך הלקוחות מתארים אתכם?</li>
                              <li>• מה הכי מפחיד לקוחות בתחום שלכם?</li>
                            </ul>
                          </div>
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-4">דוגמאות לבידול:</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                              <li>• <strong>מהירות</strong> - "תשובה תוך שעה"</li>
                              <li>• <strong>מחיר</strong> - "ללא תשלום אם לא מנצחים"</li>
                              <li>• <strong>ניסיון</strong> - "מתמחים רק בתחום X"</li>
                              <li>• <strong>שירות</strong> - "ליווי אישי לאורך כל הדרך"</li>
                              <li>• <strong>יוקרה</strong> - "רק עבור לקוחות VIP"</li>
                              <li>• <strong>נגישות</strong> - "שירות 24/7"</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">מבנה עמוד הבידול המושלם</h3>
                        <CodeBlock language="html" index="differentiation">
{`<div class="differentiation-page">
  <!-- כותרת ראשית מושכת -->
  <section class="hero">
    <h1>למה 9 מכל 10 לקוחות בוחרים בנו על פני המתחרים?</h1>
    <p class="subtitle">גלו מה הופך אותנו לבחירה הברורה בתחום</p>
  </section>

  <!-- 5 יתרונות מרכזיים -->
  <section class="key-advantages">
    <h2>5 הדברים שאף אחד אחר לא יגיד לכם</h2>
    
    <div class="advantage">
      <h3>🏆 מתמחים רק בתחום שלכם</h3>
      <p>בניגוד למשרדים גדולים, אנחנו מתמחים רק בנזיקי תאונות דרכים. 
         זה אומר שאנחנו יודעים כל פרט, כל חוק, כל פרצה במערכת.</p>
      <div class="proof">
        <strong>הוכחה:</strong> בגבינו פיצויים של 23% יותר מהממוצע בתחום
      </div>
    </div>
    
    <div class="advantage">
      <h3>⚡ תמיד זמינים - באמת</h3>
      <p>אחרי תאונה, כל דקה חשובה. אנחנו היחידים שעונים 24/7 - 
         גם בלילה, גם בסוף השבוע.</p>
      <div class="proof">
        <strong>הוכחה:</strong> זמן מענה ממוצע: 11 דקות (התחום: 4 שעות)
      </div>
    </div>
    
    <!-- עוד יתרונות... -->
  </section>

  <!-- השוואה למתחרים -->
  <section class="comparison">
    <h2>אנחנו vs המתחרים</h2>
    <table class="comparison-table">
      <tr>
        <th></th>
        <th class="us">אנחנו</th>
        <th class="competitors">משרדים אחרים</th>
      </tr>
      <tr>
        <td>זמן מענה</td>
        <td class="us">תוך שעה</td>
        <td class="competitors">2-3 ימים</td>
      </tr>
      <tr>
        <td>התמחות</td>
        <td class="us">רק נזיקין</td>
        <td class="competitors">כל תחומי המשפט</td>
      </tr>
      <tr>
        <td>שכר טרחה</td>
        <td class="us">רק בהצלחה</td>
        <td class="competitors">גם אם לא מנצחים</td>
      </tr>
    </table>
  </section>

  <!-- סיפורי הצלחה -->
  <section class="success-stories">
    <h2>איך זה נראה בפועל?</h2>
    
    <div class="story">
      <h3>מקרה: תאונה עם משאית</h3>
      <div class="story-content">
        <div class="before">
          <h4>המצב בהגעה אלינו:</h4>
          <p>לקוח שנפגע בתאונה קשה, חברת הביטוח הציעה 50,000 ש"ח</p>
        </div>
        <div class="action">
          <h4>מה עשינו אחרת:</h4>
          <p>גילינו שהמשאית הייתה עמוסה יתר על המידה - דבר שאף אחד לא בדק</p>
        </div>
        <div class="result">
          <h4>התוצאה:</h4>
          <p>הלקוח קיבל 380,000 ש"ח - פי 7.6 מההצעה המקורית</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA חזק -->
  <section class="cta">
    <h2>מוכנים לראות מה אנחנו יכולים לעשות בשבילכם?</h2>
    <p>ייעוץ ראשוני חינם - בואו נראה איך נוכל להשיג תוצאות כמו אלה גם בשבילכם</p>
    <button class="cta-button">קבעו פגישה עכשיו</button>
  </section>
</div>`}
                        </CodeBlock>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">אסטרטגיות בידול מתקדמות</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">1. בידול על בסיס תוצאות</h4>
                            <p className="text-gray-300 mb-3">הכי חזק - הראו נתונים מדויקים:</p>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li>• "ממוצע פיצויים שגבינו: 280,000 ש"ח"</li>
                              <li>• "95% מהתיקים מסתיימים בהצלחה"</li>
                              <li>• "זמן ממוצע לסגירת תיק: 8 חודשים"</li>
                            </ul>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">2. בידול על בסיס תהליך</h4>
                            <p className="text-gray-300 mb-3">איך אתם עובדים אחרת:</p>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li>• "היחידים שמגיעים לבית החולים תוך 2 שעות"</li>
                              <li>• "עובדים עם חוקר פרטי מהיום הראשון"</li>
                              <li>• "מעדכנים את הלקוח כל 48 שעות"</li>
                            </ul>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">3. בידול על בסיס מומחיות</h4>
                            <p className="text-gray-300 mb-3">הידע הייחודי שלכם:</p>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li>• "בעלי הרישיון היחיד בתחום X"</li>
                              <li>• "היועצים הרשמיים של ארגון Y"</li>
                              <li>• "פיתחנו את השיטה המובילה לטיפול ב-Z"</li>
                            </ul>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="trust-building" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-green-400 pr-4">
                    בניית אמון ואמינות באתר
                  </h2>

                  <p className="text-gray-300 text-lg mb-8">
                    ברשת, האמון הוא הכל. לקוחות קונים מעסקים שהם <strong>סומכים עליהם</strong>. הנה איך לבנות אמון דרך האתר:
                  </p>

                  <div className="space-y-8">
                    
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">רכיבי אמון חיוניים</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-white font-bold mb-4">מידע מפורט על העסק:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>כתובת פיזית מלאה</strong> + תמונות המשרד</li>
                              <li>• <strong>מספרי טלפון</strong> עם אזור (לא רק נייד)</li>
                              <li>• <strong>כתובת מייל</strong> מדומיין העסק</li>
                              <li>• <strong>שעות פעילות</strong> ברורות</li>
                              <li>• <strong>שנת הקמה</strong> ומספר עובדים</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-bold mb-4">אישורים וסמכויות:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>רישיונות מקצועיים</strong></li>
                              <li>• <strong>חברות במקצועיות</strong></li>
                              <li>• <strong>תעודות הסמכה</strong></li>
                              <li>• <strong>פרסים ואזכורים</strong> בתקשורת</li>
                              <li>• <strong>ביטוחי אחריות</strong> מקצועית</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">שקיפות מלאה</h3>
                        <p className="text-gray-300 mb-6">
                          לקוחות רוצים לדעת בדיוק מה קורה ומה זה עולה:
                        </p>
                        <div className="space-y-6">
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">שקיפות במחירים:</h4>
                            <CodeBlock language="html" index="pricing">
{`<section class="pricing-transparency">
  <h2>מחירים שקופים - ללא הפתעות</h2>
  
  <div class="price-structure">
    <h3>מבנה התמחור שלנו:</h3>
    <ul>
      <li><strong>ייעוץ ראשוני:</strong> חינם (60 דקות)</li>
      <li><strong>שכר טרחה:</strong> רק במקרה של הצלחה</li>
      <li><strong>אחוז מהפיצוי:</strong> 15% + מע"מ</li>
      <li><strong>הוצאות:</strong> מתוקצבות מראש</li>
    </ul>
  </div>
  
  <div class="no-hidden-fees">
    <h3>מה כלול במחיר:</h3>
    <ul>
      <li>✓ ייצוג משפטי מלא</li>
      <li>✓ חקירה פרטית</li>
      <li>✓ מומחים רפואיים</li>
      <li>✓ עדכונים שוטפים</li>
    </ul>
  </div>
  
  <div class="guarantee">
    <h3>🛡️ הערבות שלנו:</h3>
    <p>"אם לא מנצחים בתיק - אתם לא משלמים שכר טרחה"</p>
  </div>
</section>`}
                            </CodeBlock>
                          </div>
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">שקיפות בתהליכים:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• מה קורה בכל שלב בתהליך</li>
                              <li>• כמה זמן כל שלב לוקח</li>
                              <li>• מתי הלקוח מעודכן</li>
                              <li>• איך מקבלים החלטות</li>
                              <li>• מה קורה במקרה של בעיות</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">הוכחה חברתית מתקדמת</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">אמינות דרך תקשורת:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>כתבות ברשתות החדשות</strong> על המשרד</li>
                              <li>• <strong>ראיונות עם השותפים</strong> בתוכניות מקצועיות</li>
                              <li>• <strong>מאמרים מקצועיים</strong> שכתבתם</li>
                              <li>• <strong>הרצאות וכנסים</strong> שהשתתפתם בהם</li>
                            </ul>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">מספרים שבונים אמון:</h4>
                            <CodeBlock language="html" index="trust-numbers">
{`<section class="trust-numbers">
  <div class="stats-grid">
    <div class="stat">
      <div class="number">1,847</div>
      <div class="label">תיקים נטפלו בהצלחה</div>
    </div>
    
    <div class="stat">
      <div class="number">23</div>
      <div class="label">שנות ניסיון מצטבר</div>
    </div>
    
    <div class="stat">
      <div class="number">127M ₪</div>
      <div class="label">פיצויים שנגבו עד כה</div>
    </div>
    
    <div class="stat">
      <div class="number">4.9/5</div>
      <div class="label">ממוצע ביקורות לקוחות</div>
    </div>
  </div>
</section>`}
                            </CodeBlock>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">שותפויות ולקוחות מובילים:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>לוגו חברות גדולות</strong> שעבדתם איתן</li>
                              <li>• <strong>ארגונים מקצועיים</strong> שאתם חברים בהם</li>
                              <li>• <strong>בנקים וחברות ביטוח</strong> שמכירים אתכם</li>
                              <li>• <strong>רשויות מקומיות</strong> שעבדתם עבורן</li>
                            </ul>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="conversion" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-green-400 pr-4">
                    אופטימיזציה להמרה - הופכים מבקרים ללקוחות
                  </h2>

                  <p className="text-gray-300 text-lg mb-8">
                    אתר יפה זה נחמד, אבל האתר שלכם צריך <strong>למכור</strong>. הנה איך להפוך כל מבקר ללקוח פוטנציאלי:
                  </p>

                  <div className="space-y-8">
                    
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">CTA (קריאות לפעולה) שעובדים</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">עקרונות CTA מנצח:</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">כותרות CTA חזקות:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• "קבלו הצעת מחיר תוך 24 שעות"</li>
                                  <li>• "ייעוץ חינם - ללא התחייבות"</li>
                                  <li>• "בואו נדבר על המקרה שלכם"</li>
                                  <li>• "התחילו עכשיו - משלמים רק בהצלחה"</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-red-400 font-bold mb-2">מה לא לכתוב:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• ✗ "צרו קשר" (יותר מדי כללי)</li>
                                  <li>• ✗ "לחצו כאן" (לא אומר מה יקרה)</li>
                                  <li>• ✗ "שלחו בקשה" (נשמע פורמלי)</li>
                                  <li>• ✗ "הירשמו" (מפחיד התחייבות)</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">מיקום CTA אסטרטגי:</h4>
                            <CodeBlock language="html" index="cta-placement">
{`<!-- CTA בכל נקודה קריטית -->
<div class="strategic-ctas">
  <!-- בתוך Hero Section -->
  <section class="hero">
    <h1>נפגעתם בתאונת דרכים?</h1>
    <p>נדאג שתקבלו את הפיצוי המלא המגיע לכם</p>
    <button class="cta primary">קבעו ייעוץ חינם עכשיו</button>
  </section>

  <!-- אחרי כל קטע שירותים -->
  <section class="service">
    <h2>דיני נזיקין</h2>
    <p>מתמחים בייצוג נפגעי תאונות דרכים...</p>
    <button class="cta secondary">למדו עוד על התהליך</button>
  </section>

  <!-- CTA נייח (sticky) -->
  <div class="sticky-cta">
    <span>מוכנים לשמוע מה אנחנו יכולים לעשות בשבילכם?</span>
    <button class="cta">התקשרו עכשיו</button>
  </div>

  <!-- בסוף כל עמוד -->
  <section class="bottom-cta">
    <h2>הצעד הבא הוא שלכם</h2>
    <p>בואו נדבר על המקרה שלכם - השיחה הראשונה חינם</p>
    <div class="cta-options">
      <button class="cta urgent">התקשרו עכשיו</button>
      <button class="cta secondary">השאירו פרטים</button>
    </div>
  </section>
</div>`}
                            </CodeBlock>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">יצירת דחיפות (Urgency)</h3>
                        <p className="text-gray-300 mb-6">
                          לקוחות נוטים לדחות החלטות. דחיפות עוזרת להם לפעול <strong>עכשיו</strong>:
                        </p>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">טכניקות דחיפות:</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">דחיפות זמן:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• "יש לכם 3 שנים לתבוע - אל תפספסו"</li>
                                  <li>• "כל יום שעובר מקטין את הפיצוי"</li>
                                  <li>• "העדויות נעלמות - פעלו מהר"</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">דחיפות הזדמנות:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• "הייעוץ הראשוני חינם רק השבוע"</li>
                                  <li>• "מקומות מוגבלים ללקוחות חדשים"</li>
                                  <li>• "הצעה מיוחדת לפונים הראשונים"</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-6">
                            <p className="text-yellow-400 font-bold mb-2">⚠️ אזהרה חשובה:</p>
                            <p className="text-gray-300">
                              דחיפות חייבת להיות <strong>אמיתית ומוצדקת</strong>. אל תשקרו ללקוחות - זה הורס אמון לטווח הארוך.
                            </p>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">הורדת חסמים פסיכולוגיים</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">החששות הנפוצים ביותר:</h4>
                            <div className="space-y-4">
                              
                              <div>
                                <h5 className="text-red-400 font-bold mb-2">חשש: "זה יעלה הרבה כסף"</h5>
                                <p className="text-gray-300 text-sm mb-2">הפתרון:</p>
                                <div className="bg-slate-700 rounded p-3">
                                  <p className="text-green-400 font-bold">"רק במקרה של הצלחה - אם לא מנצחים, אתם לא משלמים"</p>
                                </div>
                              </div>

                              <div>
                                <h5 className="text-red-400 font-bold mb-2">חשש: "זה יקח הרבה זמן"</h5>
                                <p className="text-gray-300 text-sm mb-2">הפתרון:</p>
                                <div className="bg-slate-700 rounded p-3">
                                  <p className="text-green-400 font-bold">"השיחה הראשונה 15 דקות - תוך יום תדעו איפה אתם עומדים"</p>
                                </div>
                              </div>

                              <div>
                                <h5 className="text-red-400 font-bold mb-2">חשש: "אולי אני לא זכאי"</h5>
                                <p className="text-gray-300 text-sm mb-2">הפתרון:</p>
                                <div className="bg-slate-700 rounded p-3">
                                  <p className="text-green-400 font-bold">"בדיקת זכאות ראשונית חינמית - לא מתחייבים לכלום"</p>
                                </div>
                              </div>

                            </div>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">הבטחות שמורידות סיכון:</h4>
                            <CodeBlock language="html" index="risk-reversal">
{`<section class="risk-reversal">
  <h2>ההבטחות שלנו לכם:</h2>
  
  <div class="guarantees">
    <div class="guarantee">
      <h3>🛡️ ללא סיכון כספי</h3>
      <p>משלמים רק אם מנצחים בתיק</p>
    </div>
    
    <div class="guarantee">
      <h3>⏰ ללא התחייבות זמן</h3>
      <p>השיחה הראשונה 15 דקות - אפשר להפסיק בכל רגע</p>
    </div>
    
    <div class="guarantee">
      <h3>📞 זמינות מלאה</h3>
      <p>עונים בכל שעה - כולל סופי שבוע</p>
    </div>
    
    <div class="guarantee">
      <h3>🤝 יחס אישי</h3>
      <p>לא מעבירים בין מזכירות - ישר עם עורך הדין</p>
    </div>
  </div>
  
  <div class="bottom-line">
    <h3>התחתונה:</h3>
    <p>אין לכם מה להפסיד - רק לגלות כמה כסף מגיע לכם</p>
  </div>
</section>`}
                            </CodeBlock>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="mobile-first" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-green-400 pr-4">
                    עיצוב Mobile-First: למה זה קריטי
                  </h2>

                  <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-8 mb-8">
                    <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      סטטיסטיקה שמחייבת מחשבה
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <strong>67%</strong> מהחיפושים לעסקים מקומיים נעשים מנייד</li>
                      <li>• <strong>84%</strong> מהלקוחות עוזבים אתר לא מותאם מובייל</li>
                      <li>• <strong>Google מעניש</strong> אתרים לא מותאמי מובייל בתוצאות החיפוש</li>
                      <li>• <strong>74%</strong> מהפניות לעסקים מגיעות מאתרים מותאמי מובייל</li>
                    </ul>
                  </div>

                  <div className="space-y-8">
                    
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">עקרונות עיצוב Mobile-First</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">1. תפריט ניווט פשוט</h4>
                            <CodeBlock language="html" index="mobile-nav">
{`<!-- תפריט מותאם מובייל -->
<nav class="mobile-nav">
  <!-- כפתור המבורגר -->
  <button class="hamburger" onclick="toggleMenu()">
    <span></span>
    <span></span>
    <span></span>
  </button>
  
  <!-- תפריט רספונסיבי -->
  <div class="nav-menu" id="navMenu">
    <a href="#services" class="nav-item">שירותים</a>
    <a href="#about" class="nav-item">אודות</a>
    <a href="#testimonials" class="nav-item">המלצות</a>
    <a href="#contact" class="nav-item">צור קשר</a>
    
    <!-- CTA במקום בולט -->
    <a href="tel:050-1234567" class="nav-cta">
      📞 התקשרו עכשיו
    </a>
  </div>
</nav>

<style>
.mobile-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-menu {
  display: none;
  flex-direction: column;
  padding: 20px;
}

.nav-menu.active {
  display: flex;
}

.nav-item {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  font-size: 18px;
}

.nav-cta {
  background: #007bff;
  color: white;
  padding: 15px;
  text-align: center;
  margin-top: 10px;
  border-radius: 8px;
}
</style>`}
                            </CodeBlock>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">2. כפתורי CTA גדולים וברורים</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">מידות נכונות:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• גובה מינימום: 44px</li>
                                  <li>• רוחב מינימום: 150px</li>
                                  <li>• מרווח בין כפתורים: 8px</li>
                                  <li>• טקסט גודל 16px ומעלה</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">צבעים ועיצוב:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• צבע בולט שלא מופיע במקום אחר</li>
                                  <li>• קונטרסט גבוה עם הרקע</li>
                                  <li>• אפקט hover/tap ברור</li>
                                  <li>• אייקון רלוונטי לפעולה</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">3. מהירות טעינה במובייל</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="text-red-400 font-bold mb-2">מה מאט:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• תמונות כבדות (מעל 500KB)</li>
                                  <li>• וידאו ברקע שמתנגן אוטומטית</li>
                                  <li>• יותר מדי fonts חיצוניים</li>
                                  <li>• קוד JavaScript כבד</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-green-400 font-bold mb-2">פתרונות:</h5>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                  <li>• דחיסת תמונות (WebP format)</li>
                                  <li>• Lazy loading לתמונות</li>
                                  <li>• מינימיזציה של CSS/JS</li>
                                  <li>• שימוש ב-CDN</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">UX מובייל מתקדם</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">Click-to-Call מיידי</h4>
                            <p className="text-gray-300 mb-3">במובייל, הלקוח רוצה להתקשר מיד:</p>
                            <CodeBlock language="html" index="click-to-call">
{`<!-- כפתור התקשרות בולט -->
<div class="sticky-call-button">
  <a href="tel:+972501234567" class="call-btn">
    📞 התקשרו עכשיו
  </a>
</div>

<!-- מספרי טלפון לינקים בכל מקום -->
<p class="contact-info">
  צרו קשר: <a href="tel:+972501234567">050-123-4567</a>
</p>

<!-- הוספת schema markup -->
<div itemscope itemtype="http://schema.org/LocalBusiness">
  <span itemprop="name">משרד עורכי דין פלוני</span>
  <span itemprop="telephone">
    <a href="tel:+972501234567">050-123-4567</a>
  </span>
</div>

<style>
.sticky-call-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.call-btn {
  background: #28a745;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 18px;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3); }
  50% { box-shadow: 0 4px 25px rgba(40, 167, 69, 0.6); }
  100% { box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3); }
}
</style>`}
                            </CodeBlock>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">טפסים מותאמי מובייל</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• <strong>שדות מינימליים</strong> - רק מה שחובה</li>
                              <li>• <strong>Input types נכונים</strong> - tel, email, number</li>
                              <li>• <strong>placeholder text</strong> מסביר במקום labels</li>
                              <li>• <strong>אימות בזמן אמת</strong> - טעויות מיד</li>
                              <li>• <strong>כפתור שליחה גדול</strong> וברור</li>
                            </ul>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />
                <section id="seo" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-green-400 pr-4">
                    SEO מתקדם - איך לדרג גבוה בגוגל
                  </h2>

                  <p className="text-gray-300 text-lg mb-8">
                    אתר יפה זה התחלה, אבל אם הוא לא מדורג בגוגל, הוא לא שווה הרבה. הנה איך לדרג גבוה:
                  </p>

                  <div className="space-y-8">
                    
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">מחקר מילות מפתח מתקדם</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">כלים למחקר מילות מפתח:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• Google Keyword Planner</li>
                              <li>• Ahrefs או SEMrush</li>
                              <li>• Ubersuggest</li>
                              <li>• AnswerThePublic</li>
                            </ul>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">איך לבחור מילות מפתח:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• חפשו ביטויים עם תחרות נמוכה</li>
                              <li>• התמקדו בביטויים עם כוונת רכישה גבוהה</li>
                              <li>• השתמשו בשאלות נפוצות (FAQ)</li>
                              <li>• אל תשכחו את המיקום הגיאוגרפי שלכם</li>
                            </ul>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">אופטימיזציה של תוכן</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">כותרות ותיאורים:</h4>
                            <CodeBlock language="html" index="seo-title-description">
{`<!-- כותרת ותיאור SEO -->
<title>עורך דין תאונות דרכים - משרד פלוני</title>
<meta name="description" content="משרד עורכי דין פלוני מתמחה בתאונות דרכים. ייצוג מקצועי עם הצלחה מוכחת. קבעו ייעוץ חינם!">`}
                            </CodeBlock>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">תוכן עשיר ומועיל:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• כתבות מקצועיות על נושאים רלוונטיים</li>
                              <li>• מדריכים מפורטים לתהליך התביעה</li>
                              <li>• שאלות נפוצות עם תשובות מפורטות</li>
                              <li>• מקרים לדוגמה עם תוצאות מוצלחות</li>
                            </ul>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">קישורים פנימיים וחיצוניים</h3>
                        <div className="space-y-6">
                          
                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">קישורים פנימיים:</h4>
                            <CodeBlock language="html" index="internal-links">
{`<!-- קישורים פנימיים -->
<div class="internal-links">
  <h2>למידע נוסף:</h2>
  <ul>
    <li><a href="/services/personal-injury" class="link">שירותי נזיקין</a></li>
    <li><a href="/blog/accident-claims" class="link">בלוג - תביעות תאונות דרכים</a></li>
    <li><a href="/about-us" class="link">אודות המשרד</a></li>
    <li><a href="/contact" class="link">צור קשר</a></li>
  </ul>
</div>
<style>
.internal-links {
  background: #1e293b;
  padding: 20px;
  border-radius: 8px;
}
  .internal-links h2 {
    color: #34d399;
    margin-bottom: 10px;
  }
  .internal-links .link {
    color: #60a5fa;
    text-decoration: underline;
  }
</style>`}
                            </CodeBlock>
                          </div>

                          <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                            <h4 className="text-white font-bold mb-3">קישורים חיצוניים איכותיים:</h4>
                            <ul className="space-y-2 text-gray-300">
                              <li>• קישורים לאתרים ממשלתיים רלוונטיים</li>
                              <li>• קישורים למאמרים מקצועיים בתקשורת</li>
                              <li>• שיתופי פעולה עם אתרים מקצועיים אחרים</li>
                              <li>• אזכורים ברשתות חברתיות ובפורומים מקצועיים</li>
                            </ul>
                          </div>

                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </section>

              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-600">
                <h3 className="text-lg font-bold text-white mb-4">תגיות:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-slate-600 text-gray-400 hover:border-green-400 hover:text-green-400 cursor-pointer transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-16 pt-10 border-t border-slate-600">
                <div className="bg-slate-700/30 rounded-xl p-8 border border-slate-600/30">
                  <h3 className="text-xl font-bold text-white mb-4">על הכותב</h3>
                  <p className="text-gray-300 mb-4">
                    <strong className="text-green-400" dir="ltr">MasterStack Shahar Maoz</strong><br />
                    שחר מעוז - מפתח פולסטאק ומומחה לכלי בינה מלאכותית לפיתוח. מלמד ומנחה צוותי פיתוח בבניית פתרונות דיגיטליים מתקדמים.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors">
                      הצטרפו לניוזלטר
                    </Button>
                    <Button onClick={() => window.location.href = '/news'} variant="outline" className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors">
                      מדריכים נוספים
                    </Button>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">מוכנים לבנות אתר שמביא לקוחות?</h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            קבלו ייעוץ אישי וליווי מקצועי בבניית האתר הבא שלכם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="outline" className="bg-blue-900/30 border-blue-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-blue-900/30 transition-colors">
              בואו נתחיל לבנות
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
                    <Button size="lg" onClick={() => window.location.href = '/news'} variant="outline" className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors">
              עוד מדריכים
              <ExternalLink className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </div>
      
      </div> {/* End relative z-10 div */}
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BusinessWebsiteGuide;
