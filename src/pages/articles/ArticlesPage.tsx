import { ArrowRight, Calendar, Clock, Home, ChevronLeft, Zap, ExternalLink, User, BookOpen, Share2, Palette, Code, Lightbulb, Copy, CheckCircle, Terminal, Globe, Rocket, TrendingUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { useState } from "react";

const ArticlesPage = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const article = {
    id: 1,
    title: "מדריך מקיף: בניית דף נחיתה עם AI בשעה אחת",
    description: "גלו כיצד להשתמש בכלי AI מתקדמים כמו Claude ו-ChatGPT לבניית דף נחיתה מקצועי ומכירתי שממיר מבקרים ללקוחות. כולל קוד מוכן, טיפים מעשיים ודוגמאות עבודה.",
    date: "26 ביוני 2025",
    category: "כלי AI",
    icon: <Zap className="w-5 h-5" />,
    readTime: "8 דקות קריאה",
    author: "MasterStack Digital",
    tags: ["AI", "דף נחיתה", "Landing Page", "Conversion", "מדריך"]
  
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ children, language = "tsx", index }) => (
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

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "MasterStack Web Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://master-stack.com/assets/images/logo.png"
      }
    },
    "datePublished": "2025-06-26",
    "dateModified": "2025-06-26",
    "image": "https://master-stack.com/assets/images/article-ai-landing-og.jpg",
    "articleSection": "Technology",
    "keywords": article.tags.join(", "),
    "inLanguage": "he"
  };

  return (
    <div className="min-h-screen text-white bg-transparent" dir="rtl">
      <SEO 
        title={`${article.title} - MasterStack`}
        description={article.description}
        keywords={article.tags.join(", ") + ", MasterStack, בניית אתרים, AI, דף נחיתה מכירתי"}
        type="article"
        image="/assets/images/article-ai-landing-og.jpg"
        author={article.author}
        publishedTime="2025-06-26"
        structuredData={articleStructuredData}
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
            { label: "מאמרים", href: "/articles/landing-page-with-ai" },
            { label: "מדריך מקיף: בניית דף נחיתה עם AI", current: true }
          ]} 
        />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900/80 via-blue-900/40 to-slate-900/80 py-20">
          <div className="container mx-auto px-6 relative z-10">
          {/* Article Header */}
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-purple-600/20 p-3 rounded-2xl border border-purple-600/30">
                <div className="text-purple-400">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 px-4 py-2">
                {article.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
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
              <Button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      text: article.description,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('הקישור הועתק ללוח');
                  }
                }}
                variant="outline" 
                className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                שתף
              </Button>
              <Button 
                onClick={() => {
                  localStorage.setItem('savedArticle', JSON.stringify(article));
                  alert('המאמר נשמר לקריאה מאוחר יותר');
                }}
                variant="outline" 
                className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors"
              >
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
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  תוכן העניינים
                </h3>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li><a href="#intro" className="hover:text-cyan-400 transition-colors">הקדמה - למה דף נחיתה זה כל כך חשוב?</a></li>
                  <li><a href="#requirements" className="hover:text-cyan-400 transition-colors">מה תצטרכו לפני שמתחילים?</a></li>
                  <li><a href="#planning" className="hover:text-cyan-400 transition-colors">השלב הראשון: הגדרת המטרה והקהל (8 דקות)</a></li>
                  <li><a href="#structure" className="hover:text-cyan-400 transition-colors">השלב השני: תכנון מבנה הדף (7 דקות)</a></li>
                  <li><a href="#design" className="hover:text-cyan-400 transition-colors">השלב השלישי: יצירת העיצוב (20 דקות)</a></li>
                  <li><a href="#content" className="hover:text-cyan-400 transition-colors">השלב הרביעי: כתיבת תוכן שמוכר (15 דקות)</a></li>
                  <li><a href="#optimization" className="hover:text-cyan-400 transition-colors">השלב החמישי: אופטימיזציה להמרות (7 דקות)</a></li>
                  <li><a href="#deployment" className="hover:text-cyan-400 transition-colors">השלב השישי: פרסום ומעקב (3 דקות)</a></li>
                  <li><a href="#examples" className="hover:text-cyan-400 transition-colors">דוגמאות דפי נחיתה מוצלחים</a></li>
                  <li><a href="#tips" className="hover:text-cyan-400 transition-colors">טיפים לשיפור שיעורי ההמרה</a></li>
                </ul>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert prose-cyan max-w-none">
                
                <section id="intro" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    הקדמה - למה דף נחיתה זה כל כך חשוב?
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    בעולם השיווק הדיגיטלי, דף הנחיתה הוא הכלי החשוב ביותר להמרת מבקרים ללקוחות. דף נחיתה טוב יכול להכפיל את שיעור ההמרה שלכם, ועם <strong className="text-cyan-400">כלי AI מתקדמים</strong> אתם יכולים לבנות אחד כזה תוך שעה אחת בלבד.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    במאמר זה תלמדו כיצד להשתמש ב-<strong className="text-cyan-400">Claude</strong>, <strong className="text-cyan-400">ChatGPT</strong> ו-<strong className="text-cyan-400">GitHub Copilot</strong> ליצירת דף נחיתה שלא רק נראה מקצועי, אלא גם אמיתי מוכר.
                  </p>
                  
                  <div className="bg-cyan-600/10 border border-cyan-600/30 rounded-xl p-8">
                    <h3 className="text-cyan-400 font-bold text-xl mb-4">מה זה דף נחיתה?</h3>
                    <p className="text-gray-300">
                      דף נחיתה (Landing Page) הוא דף ייעודי שנועד להמיר מבקרים לפעולה ספציפית - רכישה, הרשמה, הורדה או יצירת קשר. 
                      בניגוד לאתר רגיל, דף הנחיתה מתמקד במטרה אחת ברורה ומוביל את המבקר אליה צעד אחר צעד.
                    </p>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="requirements" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    מה תצטרכו לפני שמתחילים?
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-10 mb-10">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          כלי AI חיוניים
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                          <li><strong className="text-white">Claude</strong> (חינם/פרו) - לכתיבת קוד ותוכן מכירתי</li>
                          <li><strong className="text-white">ChatGPT</strong> (חינם/פרו) - לאסטרטגיית שיווק ותוכן</li>
                          <li><strong className="text-white">Gemini</strong> (חינם/פרו) - לאסטרטגיית שיווק ותוכן</li>
                          <li><strong className="text-white">GitHub Copilot</strong> (אופציונלי) - לזיקוק קוד</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                          <Terminal className="w-5 h-5" />
                          כלי פיתוח בסיסיים
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                          <li><strong className="text-white">VS Code</strong> + תוספות</li>
                          <li><strong className="text-white">Node.js</strong> (גרסה 18+)</li>
                          <li><strong className="text-white">Git</strong> לניהול קוד</li>
                          <li>חשבון <strong className="text-white">Vercel/Netlify</strong> לפרסום</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          ידע בשיווק דיגיטלי
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                          <li>הבנה בסיסית בעקרונות המרה</li>
                          <li>ידע על קהל היעד</li>
                          <li>הכרת המוצר/שירות שלכם</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="planning" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב הראשון: הגדרת המטרה והקהל (8 דקות)
                  </h2>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">לפני שבונים - צריך לדעת למי ולמה</h3>
                  <p className="text-gray-300 mb-6">דף נחיתה מוצלח מתחיל בהבנה ברורה של המטרה והקהל יעד:</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-slate-700/30 rounded-xl p-8 border border-slate-600/30">
                      <h4 className="text-xl font-bold text-cyan-400 mb-3">מה המטרה של הדף?</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• מכירת מוצר ספציפי</li>
                        <li>• איסוף leads (רשימת לקוחות פוטנציאלים)</li>
                        <li>• הרשמה לאירוע או קורס</li>
                        <li>• הורדת משאב (eBook, מדריך)</li>
                        <li>• יצירת קשר לייעוץ</li>
                      </ul>
                    </div>

                    <div className="bg-slate-700/30 rounded-xl p-8 border border-slate-600/30">
                      <h4 className="text-xl font-bold text-cyan-400 mb-3">מי הקהל יעד?</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• גיל, מקצוע ורמת הכנסה</li>
                        <li>• הכאבים והבעיות שלהם</li>
                        <li>• איך הם מגיעים אליכם (גוגל, פייסבוק, המלצה)</li>
                        <li>• מה הם מצפים למצוא בדף</li>
                        <li>• איזה טון דיבור מדבר אליהם</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">פרומפט לתכנון אסטרטגי עם Claude</h3>
                  
                  <CodeBlock language="prompt" index="planning">
{`אני רוצה לבנות דף נחיתה למכירת [תיאור המוצר/שירות].
קהל היעד שלי: [תיאור מפורט של הקהל יעד].
המטרה: [המרת מבקרים למה - רכישה/הרשמה/lead וכו'].

אנא עזור לי:
1. לנסח הצעת ערך ייחודית (Unique Value Proposition)
2. לזהות 3-5 כאבים מרכזיים של הקהל יעד
3. להכין רשימת יתרונות שפותרים את הכאבים האלה
4. לתכנן מבנה דף נחיתה שמוביל להמרה
5. לכתוב headline ראשי מושך ומשכנע`}
                  </CodeBlock>

                  <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-8">
                    <p className="text-gray-300">
                      <strong className="text-cyan-400">דוגמה לתשובה שתקבלו:</strong> Claude יציע הצעת ערך ברורה, יזהה כאבים ספציפיים של הקהל יעד, ויתכנן מבנה דף שמוביל צעד אחר צעד להמרה.
                    </p>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="structure" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב השני: תכנון מבנה הדף (7 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-6">המבנה הקלאסי של דף נחיתה מוצלח:</h3>

                  <div className="space-y-8 mb-10">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                          <span className="bg-green-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                          Hero Section - הרושם הראשון
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• כותרת ראשית חזקה שתופסת תשומת לב</li>
                          <li>• תת-כותרת שמסבירה את הערך</li>
                          <li>• כפתור CTA בולט</li>
                          <li>• תמונה/וידאו רלווטי</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                          <span className="bg-cyan-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                          בעיה + פתרון - למה דווקא אני?
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• הבעיה שאתם פותרים</li>
                          <li>• למה הפתרונות הקיימים לא עובדים</li>
                          <li>• איך המוצר שלכם שונה וטוב יותר</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                          <span className="bg-purple-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                          יתרונות וFEATURES - מה אני מקבל?
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• 3-5 יתרונות מרכזיים</li>
                          <li>• הסבר קצר איך זה עוזר ללקוח</li>
                          <li>• אייקונים או תמונות להמחשה</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                          <span className="bg-yellow-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                          Social Proof - הוכחה חברתית
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• המלצות לקוחות</li>
                          <li>• לוגואים של חברות שעובדות איתכם</li>
                          <li>• מספרים מרשימים (X לקוחות, Y% שיפור וכו')</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
                          <span className="bg-red-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                          CTA Final - הקריאה לפעולה
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• כפתור גדול ובולט</li>
                          <li>• טקסט שיוצר דחיפות</li>
                          <li>• הסרת ספקות אחרונים</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">בחירת הטכנולוגיה הנכונה</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <Card className="bg-green-600/10 border-green-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-green-400 font-bold mb-3">למתחילים: HTML + CSS + JS</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• הכי פשוט להתחיל</li>
                          <li>• מהיר לטעינה</li>
                          <li>• אפשר להשתמש בתבניות מוכנות</li>
                        </ul>
                        <CodeBlock language="bash" index="simple-setup">
{`# יצירת פרויקט פשוט
mkdir my-landing-page
cd my-landing-page
touch index.html style.css script.js`}
                        </CodeBlock>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-600/10 border-blue-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-blue-400 font-bold mb-3">למתקדמים: Next.js + Tailwind</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• אופטימיזציה טובה יותר</li>
                          <li>• SEO מובנה</li>
                          <li>• קל לתחזוקה</li>
                        </ul>
                        <CodeBlock language="bash" index="nextjs-setup">
{`# יצירת פרויקט Next.js
npx create-next-app@latest my-landing --typescript --tailwind --app
cd my-landing && npm run dev`}
                        </CodeBlock>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="design" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב השלישי: יצירת העיצוב (20 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-4">פרומפט לבניית Hero Section עם Claude</h3>
                  
                  <CodeBlock language="prompt" index="hero-design">
{`אני בונה דף נחיתה למכירת [המוצר/שירות שלכם].
הקהל יעד: [תיאור הקהל יעד]
הצעת הערך: [ההצעת ערך שהגדרתם קודם]

אנא צור לי Hero Section שכולל:
1. כותרת ראשית מושכת תשומת לב
2. תת-כותרת שמסבירה את הערך
3. 2-3 bullet points קצרים
4. כפתור CTA בולט
5. עיצוב מודרני עם Tailwind CSS

דרישות טכניות:
- Next.js עם TypeScript
- Tailwind CSS בלבד
- Responsive design
- אנימציות קלות
- נגישות (accessibility)

צבעי הבסיס: כחול וירוק להרגשת אמינות וצמיחה`}
                  </CodeBlock>

                  <h3 className="text-2xl font-bold text-white mb-4">דוגמה לHero Section שתקבלו:</h3>
                  
                  <CodeBlock language="tsx" index="hero-example">
{`// components/HeroSection.tsx
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            הפכו את העסק שלכם ל
            <span className="text-blue-600">מכונת מכירות</span>
            תוך 30 יום
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            המערכת היחידה שתזרים לכם לידים איכותיים 24/7 
            ללא השקעה בפרסום או מחלקת מכירות יקרה
          </p>

          {/* Benefits */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>300% עלייה בלידים</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>התקנה תוך 24 שעות</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>ללא התחייבות חודשית</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              קבלו הצעה בחינם
            </button>
            <p className="text-sm text-gray-500">
              ללא התחייבות • תשובה תוך שעה • 100% בחינם
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;`}
                  </CodeBlock>

                  <h3 className="text-2xl font-bold text-white mb-4">פרומפט לקטע יתרונות</h3>
                  
                  <CodeBlock language="prompt" index="benefits-section">
{`עכשיו אני צריך קטע יתרונות שכולל:

1. כותרת מרכזית
2. 3-4 יתרונות עיקריים עם:
   - אייקון רלוונטי
   - כותרת קצרה
   - הסבר של 1-2 משפטים איך זה עוזר ללקוח
3. עיצוב עם כרטיסיות
4. צבעים שמשלימים את ההירו

הקהל יעד: [הקהל יעד שלכם]
הבעיות שאנחנו פותרים: [הבעיות שזיהיתם]`}
                  </CodeBlock>

                  <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-xl p-6">
                    <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      טיפ חשוב לעיצוב
                    </h4>
                    <p className="text-gray-300">
                      <strong>תמיד בקשו מ-AI לקבל גרסאות:</strong>
                    </p>
                    <ul className="space-y-1 text-gray-300 mt-2">
                      <li>• "תן לי 3 גרסאות שונות לכותרת הHero"</li>
                      <li>• "איך אפשר לשפר את הCTA?"</li>
                      <li>• "תעשה את העיצוב יותר מודרני"</li>
                    </ul>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="content" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב הרביעי: כתיבת תוכן שמוכר (15 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-4">עקרונות כתיבה מכירתית</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">נוסחת AIDA:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li><strong className="text-white">A</strong>ttention - תשומת לב</li>
                          <li><strong className="text-white">I</strong>nterest - עניין</li>
                          <li><strong className="text-white">D</strong>esire - רצון</li>
                          <li><strong className="text-white">A</strong>ction - פעולה</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">עקרונות פסיכולוגיים:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• יצירת דחיפות (scarcity)</li>
                          <li>• הוכחה חברתית (social proof)</li>
                          <li>• פחד מהחמצה (FOMO)</li>
                          <li>• אמינות (testimonials)</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">פרומפט לכתיבת תוכן מכירתי</h3>
                  
                  <CodeBlock language="prompt" index="copywriting">
{`אני צריך תוכן מכירתי לדף נחיתה למכירת [המוצר/שירות].

פרטים על המוצר:
- מה זה עושה: [תיאור התועלת]
- למי זה מיועד: [קהל היעד]
- מה הבעיה שזה פותר: [הכאב של הלקוח]

אנא כתב לי:
1. כותרת ראשית חזקה (headline) שגורמת לעצור ולקרוא
2. תת-כותרת שמרחיבה על הערך
3. 4 יתרונות מרכזיים עם הסבר איך זה עוזר ללקוח
4. 2-3 המלצות לקוחות (מדומות אבל ריאליסטיות)
5. טקסט CTA שיוצר דחיפות

סגנון כתיבה: ישיר, ביטחון עצמי, בעברית פשוטה`}
                  </CodeBlock>

                  <h3 className="text-2xl font-bold text-white mb-4">דוגמה לתוכן שתקבלו:</h3>
                  
                  <CodeBlock language="text" index="copy-example">
{`כותרת ראשית:
"תפסיקו לאבד לקוחות בגלל אתר שלא עובד - קבלו אתר שמוכר 24/7"

תת-כותרת:
"המערכת היחידה שהופכת כל ביקור באתר ללקוח משלם, 
ללא השקעה בפרסום יקר או צוות מכירות גדול"

יתרונות:
✅ עלייה של 300% בהמרות תוך 30 יום
מערכת בינה מלאכותית שמזהה בדיוק מה הלקוח רוצה ומובילה אותו לרכישה

✅ התקנה תוך 24 שעות ללא תקלות
הצוות שלנו עושה הכל בשבילכם - אתם רק רואים את התוצאות

✅ תמיכה מלאה 24/7 בעברית
לא נשארים לבד - צוות מומחים זמין תמיד לעזור

המלצה:
"תוך חודש העלנו את המכירות ב-250%. 
הלקוחות פשוט זורמים באתר וקונים בקלות."
- דני כהן, בעלים של חנות אונליין

CTA:
"קבלו ניתוח חינמי של האתר תוך 24 שעות - 
עוד יום שאתם מחכים זה עוד כסף שאתם מפסידים"`}
                  </CodeBlock>

                  <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-6">
                    <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      טעויות נפוצות בכתיבה מכירתית
                    </h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• יותר מדי טקסט - אנשים לא קוראים, הם סורקים</li>
                      <li>• התמקדות בתכונות במקום ביתרונות ללקוח</li>
                      <li>• CTA חלש שלא יוצר דחיפות</li>
                      <li>• חוסר הוכחה חברתית או המלצות</li>
                    </ul>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="optimization" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב החמישי: אופטימיזציה להמרות (7 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-4">אלמנטים קריטיים לשיפור ההמרה</h3>
                  
                  <div className="space-y-8 mb-10">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          כפתורי CTA אופטימליים
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-white font-bold mb-2">עיצוב הכפתור:</h5>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li>• צבע בולט שבולט מהעיצוב</li>
                              <li>• גודל גדול מספיק (מינימום 44px גובה)</li>
                              <li>• פינות מעוגלות לנוחות חזותית</li>
                              <li>• אפקט hover שמעיד על אינטראקטיביות</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-white font-bold mb-2">טקסט הכפתור:</h5>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li>• "קבלו עכשיו" במקום "שלח"</li>
                              <li>• "התחילו בחינם" במקום "הרשמה"</li>
                              <li>• הוספת דחיפות: "זמין רק היום"</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          מהירות טעינה - קריטי להמרות
                        </h4>
                        <p className="text-gray-300 mb-4">כל שנייה עיכוב = 7% ירידה בהמרות</p>
                        
                        <CodeBlock language="bash" index="performance">
{`# בדיקת ביצועים
npx lighthouse https://yoursite.com --only-performance

# אופטימיזציית תמונות
npm install next-optimized-images
npm install imagemin-mozjpeg imagemin-optipng`}
                        </CodeBlock>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                          <User className="w-5 h-5" />
                          הוכחה חברתית מושכת
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-white font-bold mb-2">מספרים מרשימים:</h5>
                            <CodeBlock language="text" index="social-proof">
{`"יותר מ-10,000 לקוחות מרוצים"
"שיפור ממוצע של 250% במכירות"
"דירוג 4.9/5 כוכבים ב-Google"`}
                            </CodeBlock>
                          </div>
                          <div>
                            <h5 className="text-white font-bold mb-2">לוגואי לקוחות:</h5>
                            <p className="text-gray-300 text-sm">הוספת לוגואים של חברות מוכרות מגבירה אמינות ב-50%</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">פרומפט לבדיקת אופטימיזציה</h3>
                  
                  <CodeBlock language="prompt" index="optimization-check">
{`אני שולח לך את הקוד של דף הנחיתה שלי.
אנא בדוק ותציע שיפורים עבור:

1. מיקום וצבע כפתורי ה-CTA
2. מהירות טעינה ואופטימיזציות
3. הוכחה חברתית ואמינות
4. נגישות (accessibility)
5. עיצוב responsive למובייל
6. הוספת אלמנטים שיגבירו המרות

[כאן תדביקו את הקוד]`}
                  </CodeBlock>

                  <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-6">
                    <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      טיפ זהב לאופטימיזציה
                    </h4>
                    <p className="text-gray-300">
                      <strong>תמיד בדקו את הדף במובייל:</strong> יותר מ-60% מהמבקרים מגיעים ממובייל. 
                      דף שלא עובד טוב במובייל = איבוד הרבה המרות.
                    </p>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="deployment" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב השישי: פרסום ומעקב (3 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-4">פרסום מהיר ב-Vercel</h3>
                  
                  <CodeBlock language="bash" index="deploy">
{`# התקנה והתחברות
npm i -g vercel
vercel login

# פרסום
vercel

# הדף יהיה באוויר תוך דקות!`}
                  </CodeBlock>

                  <h3 className="text-2xl font-bold text-white mb-4">הוספת מעקב והמרות - חובה!</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">Google Analytics 4</h4>
                        <p className="text-gray-300 text-sm mb-3">למעקב אחר מבקרים והתנהגות</p>
                        <CodeBlock language="bash" index="analytics">
{`npm install gtag

# בקובץ _app.tsx או layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="GA_MEASUREMENT_ID" />`}
                        </CodeBlock>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">Facebook Pixel</h4>
                        <p className="text-gray-300 text-sm mb-3">למעקב המרות ו-remarketing</p>
                        <CodeBlock language="javascript" index="pixel">
{`// הוספה ל-<head>
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>`}
                        </CodeBlock>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">מעקב אחר המרות</h3>
                  
                  <CodeBlock language="javascript" index="conversion-tracking">
{`// במקום שקורית ההמרה (כמו שליחת טופס)
function trackConversion() {
  // Google Analytics
  gtag('event', 'conversion', {
    'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'
  });
  
  // Facebook Pixel
  fbq('track', 'Lead');
  
  // אם זו רכישה
  fbq('track', 'Purchase', {
    value: 99.00,
    currency: 'ILS'
  });
}`}
                  </CodeBlock>

                  <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-6">
                    <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      חשוב: הגדרת Goals
                    </h4>
                    <p className="text-gray-300">
                      <strong>אל תשכחו להגדיר מטרות ב-Google Analytics:</strong>
                    </p>
                    <ul className="space-y-1 text-gray-300 mt-2">
                      <li>• שליחת טופס יצירת קשר</li>
                      <li>• הורדת משאב</li>
                      <li>• לחיצה על כפתור טלפון</li>
                      <li>• זמן שהייה מעל X דקות</li>
                    </ul>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="examples" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    דוגמאות דפי נחיתה מוצלחים
                  </h2>

                  <div className="space-y-8">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">דף נחיתה לקורס אונליין (60 דקות)</h3>
                        <p className="text-gray-300 mb-4">
                          <strong>התוצאה:</strong> שיעור המרה של 12% מביקור לרכישה, מכירות של 50,000₪ בחודש הראשון
                        </p>
                        <div className="bg-slate-700/30 rounded-lg p-6 mb-4">
                          <h4 className="text-white font-bold mb-2">הזמנים בפועל:</h4>
                          <ul className="space-y-1 text-gray-300">
                            <li>• תכנון אסטרטגיה: 8 דקות</li>
                            <li>• מבנה דף: 7 דקות</li>
                            <li>• עיצוב: 20 דקות</li>
                            <li>• תוכן מכירתי: 15 דקות</li>
                            <li>• אופטימיזציה: 7 דקות</li>
                            <li>• פרסום: 3 דקות</li>
                          </ul>
                        </div>
                        <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-6">
                          <h4 className="text-green-400 font-bold mb-2">מרכיבי הצלחה:</h4>
                          <ul className="space-y-1 text-gray-300">
                            <li>• וידאו הסבר של 90 שניות</li>
                            <li>• 15 המלצות לקוחות עם תמונות</li>
                            <li>• כפתור CTA כל 2 מקטעים</li>
                            <li>• מחיר עם הנחה מוגבלת בזמן</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">דף נחיתה לשירות B2B (45 דקות)</h3>
                        <p className="text-gray-300 mb-4">
                          <strong>התוצאה:</strong> 180 leads איכותיים בחודש, שיעור המרה 8.5%
                        </p>
                        <div className="bg-cyan-600/10 border border-cyan-600/30 rounded-lg p-6">
                          <h4 className="text-cyan-400 font-bold mb-2">אסטרטגיה שעבדה:</h4>
                          <ul className="space-y-1 text-gray-300">
                            <li>• ROI calculator אינטראקטיבי</li>
                            <li>• Case studies מפורטים</li>
                            <li>• לוגואי 20+ לקוחות מוכרים</li>
                            <li>• הצעת ייעוץ חינמי במקום מכירה ישירה</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-purple-400 mb-4">דף נחיתה למוצר פיזי (35 דקות)</h3>
                        <p className="text-gray-300 mb-4">
                          <strong>התוצאה:</strong> עלייה של 340% במכירות תוך 3 שבועות
                        </p>
                        <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-6">
                          <h4 className="text-purple-400 font-bold mb-2">נקודות חשובות:</h4>
                          <ul className="space-y-1 text-gray-300">
                            <li>• תמונות מוצר איכותיות עם זום</li>
                            <li>• ביקורות מ-Amazon עם כוכבים</li>
                            <li>• משלוח חינם + החזרה מובטחת</li>
                            <li>• מלאי מוגבל ודחיפות</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-8 mt-10">
                    <h3 className="text-blue-400 font-bold mb-4">מה מובא לכל הדוגמאות המוצלחות?</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-gray-300">
                        <li>• <strong className="text-white">כותרת ברורה</strong> שמסבירה את הערך תוך 5 שניות</li>
                        <li>• <strong className="text-white">CTA בולט</strong> שנראה מעל הקפלה</li>
                        <li>• <strong className="text-white">הוכחה חברתית</strong> מרובה ואמינה</li>
                      </ul>
                      <ul className="space-y-2 text-gray-300">
                        <li>• <strong className="text-white">מהירות טעינה</strong> מתחת ל-3 שניות</li>
                        <li>• <strong className="text-white">עיצוב רספונסיבי</strong> שעובד מושלם במובייל</li>
                        <li>• <strong className="text-white">מעקב והמרות</strong> מדויק</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="tips" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    טיפים לשיפור שיעורי ההמרה
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                    פרומפטים מתקדמים לאופטימיזציה
                  </h3>

                  <div className="space-y-8 mb-10">
                    <div>
                      <h4 className="text-xl font-bold text-cyan-400 mb-3">לשיפור כותרת ראשית:</h4>
                      <CodeBlock language="prompt" index="headline-optimization">
{`נתח את הכותרת שלי ותציע 5 גרסאות משופרות:

"[הכותרת הנוכחית שלכם]"

אני מוכר [מוצר/שירות] לקהל של [תיאור הקהל].
הבעיה העיקרית שאני פותר: [הבעיה]

תעשה את הכותרות:
1. יותר ספציפיות עם מספרים
2. יותר אמוציונליות
3. עם תחושת דחיפות
4. שמתמקדות בתוצאה הסופית
5. שפונות ישירות לכאב של הלקוח`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-cyan-400 mb-3">לטקסט CTA מנצח:</h4>
                      <CodeBlock language="prompt" index="cta-optimization">
{`תן לי 10 רעיונות לטקסט CTA עבור כפתור שמוביל ל[פעולה - רכישה/הרשמה/הורדה].

הקהל שלי: [תיאור]
הערך שהם מקבלים: [ערך]

החלק לקטגוריות:
1. דחיפות (זמן מוגבל)
2. סקרנות (מה יקרה אחרי הלחיצה)
3. יתרון (מה הם ירוויחו)
4. פחד מהחמצה (FOMO)
5. פשוט וישיר`}
                      </CodeBlock>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    A/B Testing מהיר עם AI
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">מה לבדוק ראשון:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• <strong className="text-white">כותרת ראשית</strong> - ההשפעה הגדולה ביותר</li>
                          <li>• <strong className="text-white">צבע כפתור CTA</strong> - שינוי של 20-30% בהמרות</li>
                          <li>• <strong className="text-white">מיקום הCTA</strong> - מעל הקפלה vs. אחרי יתרונות</li>
                          <li>• <strong className="text-white">אורך הדף</strong> - קצר vs. ארוך ומפורט</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">כלים לA/B Testing:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• <strong className="text-white">Google Optimize</strong> (חינם)</li>
                          <li>• <strong className="text-white">Hotjar</strong> - מפות חום</li>
                          <li>• <strong className="text-white">VWO</strong> - פלטפורמה מתקדמת</li>
                          <li>• <strong className="text-white">Unbounce</strong> - ספציאלית לדפי נחיתה</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-cyan-400" />
                    טקטיקות מתקדמות להגברת המרות
                  </h3>

                  <div className="space-y-6">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Exit Intent Popup
                        </h4>
                        <p className="text-gray-300 mb-3">כשמשתמש מנסה לצאת מהדף - הצעה אחרונה</p>
                        <CodeBlock language="javascript" index="exit-intent">
{`// JavaScript פשוט ל-Exit Intent
let hasShownPopup = false;

document.addEventListener('mouseleave', function(e) {
  if (e.clientY <= 0 && !hasShownPopup) {
    hasShownPopup = true;
    // הצג popup עם הצעה מיוחדת
    showExitIntentOffer();
  }
});`}
                        </CodeBlock>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          Social Proof בזמן אמת
                        </h4>
                        <p className="text-gray-300 mb-3">"5 אנשים קנו את המוצר ב-24 השעות האחרונות"</p>
                        <CodeBlock language="javascript" index="social-proof">
{`// עדכון דינמי של מספר לקוחות
function updateSocialProof() {
  const counter = document.getElementById('customer-count');
  const baseNumber = 1247;
  const randomAdd = Math.floor(Math.random() * 10);
  counter.textContent = baseNumber + randomAdd;
}

// עדכון כל 30 שניות
setInterval(updateSocialProof, 30000);`}
                        </CodeBlock>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          Scarcity Timer
                        </h4>
                        <p className="text-gray-300 mb-3">ספירה לאחור שיוצרת דחיפות אמיתית</p>
                        <CodeBlock language="javascript" index="scarcity-timer">
{`// Timer לספירה לאחור
function startCountdown(duration) {
  const timer = duration, minutes, seconds;
  const display = document.getElementById('countdown');
  
  const interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    display.textContent = minutes + ":" + seconds;
    
    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = "ההצעה נגמרה!";
    }
  }, 1000);
}

// התחל עם 30 דקות
startCountdown(30 * 60);`}
                        </CodeBlock>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-red-400 pr-4">
                    טעויות נפוצות שכדאי להימנע מהן
                  </h2>

                  <div className="grid md:grid-cols-2 gap-10">
                    <Card className="bg-red-900/20 border-red-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          טעויות טכניות
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-white font-bold mb-2">בכתיבת פרומפטים:</h4>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li>• יותר מדי פרטים בפעם אחת</li>
                              <li>• לא מציינים את הטכנולוגיה הספציפית</li>
                              <li>• שוכחים לבקש responsive design</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-bold mb-2">בקוד:</h4>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li>• העתקה עיוורת בלי הבנה</li>
                              <li>• לא בדיקת browser compatibility</li>
                              <li>• שכחת נגישות (alt tags, aria-labels)</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-900/20 border-green-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          הפתרונות
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-white font-bold mb-2">תמיד בקשו מ-AI להסביר:</h4>
                            <CodeBlock language="prompt" index="explain">
                              {`"אפשר להסביר לי מה הקוד הזה עושה שורה אחר שורה?"`}
                            </CodeBlock>
                          </div>
                          <div>
                            <h4 className="text-white font-bold mb-2">בקשו דוגמאות לשימוש:</h4>
                            <CodeBlock language="prompt" index="examples-usage">
                              {`"תן לי דוגמה איך להשתמש בקומפוננט הזה ב-Next.js"`}
                            </CodeBlock>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    סיכום והמלצות לצעדים הבאים
                  </h2>

                  <div className="grid md:grid-cols-2 gap-10 mb-10">
                    <Card className="bg-green-900/20 border-green-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-green-400 font-bold mb-4">מה השגתם תוך שעה:</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            דף נחיתה מקצועי שמוכר
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            תוכן מכירתי שמדבר אל הלקוח
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            עיצוב מותאם למובייל
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            מעקב אחר המרות
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            דף באוויר ומוכן לקבל תנועה
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-cyan-400 font-bold mb-4">צעדים הבאים לשיפור:</h3>
                        <ol className="space-y-2 text-gray-300">
                          <li>1. <strong>A/B Testing</strong> - בדקו גרסאות שונות של כותרת וCTA</li>
                          <li>2. <strong>מפות חום</strong> - נתחו איך משתמשים מתנהגים בדף</li>
                          <li>3. <strong>Social Proof</strong> - הוסיפו עוד המלצות ומספרים</li>
                          <li>4. <strong>אופטימיזציה לSEO</strong> - כדי להביא תנועה אורגנית</li>
                          <li>5. <strong>Remarketing</strong> - פנייה חוזרת למי שלא המיר</li>
                        </ol>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-blue-900/20 border-blue-600/30">
                    <CardContent className="p-8">
                      <h3 className="text-blue-400 font-bold mb-4">משאבים להעמקה:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-bold mb-2">טכני:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• <a href="https://nextjs.org/docs" className="hover:text-cyan-400">מדריך Next.js הרשמי</a></li>
                            <li>• <a href="https://tailwindcss.com/docs" className="hover:text-cyan-400">תיעוד Tailwind CSS</a></li>
                            <li>• <a href="https://web.dev/performance/" className="hover:text-cyan-400">Web.dev Performance</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-2">שיווק דיגיטלי:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• <a href="https://unbounce.com/landing-page-articles/" className="hover:text-cyan-400">מדריכי Unbounce</a></li>
                            <li>• <a href="https://www.copyhackers.com/" className="hover:text-cyan-400">Copyhackers - כתיבה מכירתית</a></li>
                            <li>• <a href="https://conversion-rate-experts.com/" className="hover:text-cyan-400">Conversion Rate Experts</a></li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl p-10 border border-cyan-600/30 mt-10">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">זכרו:</h3>
                    <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                      דף נחיתה טוב הוא לא רק דף יפה - זה דף שמוכר. השקיעו בבדיקות, תאמנו את התוכן, 
                      ותמיד חשבו על הלקוח: מה הוא רוצה לשמוע? איך הוא מגיע אליכם? מה יגרום לו לבטוח בכם?
                    </p>
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-bold text-xl">
                        הצלחה בדרך! 🚀
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-600">
                <h3 className="text-lg font-bold text-white mb-4">תגיות:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 cursor-pointer transition-colors">
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
                    <strong className="text-cyan-400" dir="ltr">MasterStack Shahar Maoz</strong> <br />שחר מעוז - מפתח פולסטאק ומומחה לכלי בינה מלאכותית לפיתוח. מלמד ומנחה צוותי פיתוח בבניית פתרונות דיגיטליים מתקדמים.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors">
                      הצטרפו לניוזלטר
                    </Button>
                    <Button onClick={() => window.location.href = '/news'} variant="outline" className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors">
                      מדריכים נוספים
                    </Button>
                    <Button variant="outline" className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors">
                      ווצאפ
                    </Button>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-16 pt-10 border-t border-slate-600">
                <h3 className="text-xl font-bold text-white mb-8">מאמרים נוספים שעשויים לעניין אתכם</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-slate-700/30 border-slate-600/30 hover:border-cyan-400/50 transition-colors cursor-pointer group">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-pink-600/20 p-2 rounded-lg">
                          <Palette className="text-pink-400 w-4 h-4" />
                        </div>
                        <Badge className="bg-pink-600/20 text-pink-400 border-pink-600/30">עיצוב</Badge>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        5 טרנדים בעיצוב אתרים שחייבים לדעת ב-2025
                      </h4>
                      <p className="text-gray-400 text-sm">מגלסמורפיזם ועד אנימציות מיקרו - כל מה שצריך לדעת על הטרנדים החמים ביותר בעיצוב אתרים השנה.</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>25 ביוני 2025</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-700/30 border-slate-600/30 hover:border-cyan-400/50 transition-colors cursor-pointer group">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-600/20 p-2 rounded-lg">
                          <Code className="text-blue-400 w-4 h-4" />
                        </div>
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">פיתוח</Badge>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        React vs Vue vs Svelte - מה לבחור ב-2025?
                      </h4>
                      <p className="text-gray-400 text-sm">השוואה מעמיקה של שלושת הפריימוורקס הפופולאריים ביותר, כולל ביצועים, קהילה ומתי להשתמש בכל אחד.</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>20 ביוני 2025</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">מוכנים לבנות דף נחיתה שמוכר?</h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            קבלו ייעוץ אישי וליווי מקצועי בבניית דף הנחיתה הבא שלכם - מהאסטרטגיה ועד ההמרה הראשונה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="outline" className="bg-slate-700/30 border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-500/40 transition-colors">
              בואו נבנה דף שמוכר
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

export default ArticlesPage;