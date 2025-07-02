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
import { useState } from "react";

const ArticlesPage = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const article = {
    id: 1,
    title: "מדריך מקיף: בניית אתר עם AI בשעה אחת",
    description: "גלו כיצד להשתמש בכלי AI מתקדמים כמו Claude ו-ChatGPT לבניית אתר מקצועי מאפס. כולל קוד מוכן, טיפים מעשיים ודוגמאות עבודה.",
    date: "29 ביוני 2025",
    category: "כלי AI",
    icon: <Zap className="w-5 h-5" />,
    readTime: "8 דקות קריאה",
    author: "MasterStack Digital",
    tags: ["AI", "פיתוח", "Next.js", "Tailwind", "מדריך"]
  
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
            { label: "מאמרים", href: "/articles" },
            { label: "מדריך מקיף: בניית אתר עם AI", current: true }
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
              <Button variant="outline" className="border-slate-600 text-gray-400 hover:text-white hover:border-cyan-400">
                <Share2 className="w-4 h-4 mr-2" />
                שתף
              </Button>
              <Button variant="outline" className="border-slate-600 text-gray-400 hover:text-white hover:border-cyan-400">
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
                  <li><a href="#intro" className="hover:text-cyan-400 transition-colors">הקדמה - למה AI זה המשחק החדש?</a></li>
                  <li><a href="#requirements" className="hover:text-cyan-400 transition-colors">מה תצטרכו לפני שמתחילים?</a></li>
                  <li><a href="#planning" className="hover:text-cyan-400 transition-colors">השלב הראשון: תכנון האתר (10 דקות)</a></li>
                  <li><a href="#technology" className="hover:text-cyan-400 transition-colors">השלב השני: בחירת הטכנולוגיה (5 דקות)</a></li>
                  <li><a href="#design" className="hover:text-cyan-400 transition-colors">השלב השלישי: יצירת העיצוב (15 דקות)</a></li>
                  <li><a href="#content" className="hover:text-cyan-400 transition-colors">השלב הרביעי: יצירת תוכן (10 דקות)</a></li>
                  <li><a href="#review" className="hover:text-cyan-400 transition-colors">השלב החמישי: שילוב וביקורת (15 דקות)</a></li>
                  <li><a href="#deployment" className="hover:text-cyan-400 transition-colors">השלב השישי: פרסום (5 דקות)</a></li>
                  <li><a href="#examples" className="hover:text-cyan-400 transition-colors">דוגמאות עבודה ומוצעי זמן</a></li>
                  <li><a href="#tips" className="hover:text-cyan-400 transition-colors">טיפים מתקדמים לייעול התהליך</a></li>
                </ul>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert prose-cyan max-w-none">
                
                <section id="intro" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    הקדמה - למה AI זה המשחק החדש?
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    בעולם שבו המהירות קובעת את ההצלחה, היכולת לבנות אתר מקצועי תוך שעה אחת כבר לא נשמעת כמו חלום. כלי AI מתקדמים כמו <strong className="text-cyan-400">Claude</strong>, <strong className="text-cyan-400">ChatGPT</strong> ו-<strong className="text-cyan-400">GitHub Copilot</strong> הפכו את תהליך הפיתוח לזמין יותר מתמיד.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    במאמר זה תלמדו להשתמש בכלי AI ליצירת אתר מקצועי מאפס, כולל עיצוב מודרני, תוכן איכותי וקוד נקי - הכל תוך שעה אחת.
                  </p>
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
                          <li><strong className="text-white">Claude</strong> (חינם עם מגבלות) - לכתיבת קוד ותוכן</li>
                          <li><strong className="text-white">ChatGPT</strong> (חינם/פרו) - לרעיונות ובדיקת קוד</li>
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
                          <BookOpen className="w-5 h-5" />
                          ידע בסיסי נדרש
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                          <li>HTML/CSS בסיסי</li>
                          <li>JavaScript בסיסי</li>
                          <li>הבנה כללית של React (לא חובה)</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="planning" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב הראשון: תכנון האתר (10 דקות)
                  </h2>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">הגדרת המטרה</h3>
                  <p className="text-gray-300 mb-6">לפני שמתחילים לקודד, חשוב להגדיר:</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-slate-700/30 rounded-xl p-8 border border-slate-600/30">
                      <h4 className="text-xl font-bold text-cyan-400 mb-3">מה סוג האתר?</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• אתר תדמית עסקי</li>
                        <li>• פורטפוליו אישי</li>
                        <li>• דף נחיתה למוצר</li>
                        <li>• בלוג או מגזין</li>
                      </ul>
                    </div>

                    <div className="bg-slate-700/30 rounded-xl p-8 border border-slate-600/30">
                      <h4 className="text-xl font-bold text-cyan-400 mb-3">מי הקהל יעד?</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• גיל ותחומי עניין</li>
                        <li>• רמת הידע הטכני</li>
                        <li>• התנהגות גלישה</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">פרומפט לתכנון עם Claude</h3>
                  
                  <CodeBlock language="prompt" index="planning">
{`אני רוצה לבנות אתר [סוג האתר] עבור [תיאור העסק/מטרה].
קהל היעד שלי הוא [תיאור קהל היעד].

אנא תן לי:
1. המלצה על מבנה האתר (דפים וקטעים)
2. 5 רעיונות עיצוביים שמתאימים לתחום
3. צבעים וטיפוגרפיה מומלצים
4. רשימת תכנים שצריך להכין`}
                  </CodeBlock>

                  <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-8">
                    <p className="text-gray-300">
                      <strong className="text-cyan-400">דוגמה לתשובה שתקבלו:</strong> Claude יציע מבנה מפורט עם הסברים, צבעים ספציפיים, וגם רשימת תכנים מוכנה.
                    </p>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="technology" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב השני: בחירת הטכנולוגיה (5 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-6">האופציות המומלצות לבניית אתר מהירה:</h3>

                  <div className="space-y-8 mb-10">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                          <Rocket className="w-5 h-5" />
                          Next.js + Tailwind CSS (המומלץ ביותר)
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• מהיר ומותאם ל-SEO</li>
                          <li>• Tailwind מאפשר עיצוב מהיר</li>
                          <li>• תמיכה מצוינת של AI בכלים האלה</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          Vite + React + Tailwind
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• הקמה מהירה יותר</li>
                          <li>• פחות תכונות אבל יותר פשוט</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-purple-500 mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          HTML/CSS/JS טהור
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• הכי פשוט לתחילת דרך</li>
                          <li>• פחות תלות בכלים חיצוניים</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">הקמת הפרויקט</h3>
                  
                  <CodeBlock language="bash" index="setup">
{`# Next.js (מומלץ)
npx create-next-app@latest my-ai-website --typescript --tailwind --app

# או Vite
npm create vite@latest my-ai-website -- --template react-ts
cd my-ai-website && npm install -D tailwindcss@latest`}
                  </CodeBlock>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="design" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב השלישי: יצירת העיצוב (15 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-4">פרומפט לבניית עיצוב עם Claude</h3>
                  
                  <CodeBlock language="prompt" index="design">
{`אני בונה [סוג האתר] והתכנון שלי כולל [תיאור הדפים והקטעים].

אנא צור לי:
1. קומפוננט Header מודרני עם navigation
2. Hero section מרשים עם CTA
3. קטע "אודות" או "שירותים"
4. Footer מפורט

דרישות טכניות:
- Next.js עם TypeScript
- Tailwind CSS בלבד
- Responsive design
- אנימציות קלות
- גישה לטקסט (accessibility)

צבעי הבסיס: [הצבעים שבחרתם]`}
                  </CodeBlock>

                  <h3 className="text-2xl font-bold text-white mb-4">דוגמה לקוד שתקבלו:</h3>
                  
                  <CodeBlock language="tsx" index="header">
{`// components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              לוגו
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              אודות
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              שירותים
            </Link>
            <Link href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              צור קשר
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                אודות
              </Link>
              <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                שירותים
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                צור קשר
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;`}
                  </CodeBlock>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="content" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב הרביעי: יצירת תוכן (10 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-4">פרומפט ליצירת תוכן איכותי</h3>
                  
                  <CodeBlock language="prompt" index="content">
{`אני צריך תוכן מקצועי לאתר [סוג האתר] עבור [תיאור העסק].

אנא כתב לי:
1. כותרת ראשית מושכת (H1)
2. טקסט היכרות של 2-3 משפטים
3. 3-4 שירותים/יתרונות עיקריים עם הסברים קצרים
4. קטע "אודות" של פסקה אחת
5. טקסט CTA (קריאה לפעולה) משכנע

סגנון כתיבה: [מקצועי/ידידותי/טכני] בעברית`}
                  </CodeBlock>

                  <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-xl p-6">
                    <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      טיפ חשוב לתוכן
                    </h4>
                    <p className="text-gray-300">
                      <strong>תמיד בקשו מ-AI לספק גרסאות:</strong>
                    </p>
                    <ul className="space-y-1 text-gray-300 mt-2">
                      <li>• "תן לי 3 גרסאות שונות לכותרת הראשית"</li>
                      <li>• "איך אפשר לכתוב את זה יותר משכנע?"</li>
                    </ul>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="review" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב החמישי: שילוב וביקורת (15 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-4">בדיקת איכות עם AI</h3>
                  
                  <CodeBlock language="prompt" index="review">
{`אני שולח לך את הקוד של האתר שלי. 
אנא בדוק:

1. שגיאות קוד או דברים שיכולים להתקלקל
2. בעיות נגישות (accessibility)
3. אופטימיזציות לביצועים
4. שיפורים באבטחה
5. SEO בסיסי

[כאן תדביקו את הקוד]`}
                  </CodeBlock>

                  <p className="text-gray-300 mb-6">Claude יזהה בעיות ויציע תיקונים מדויקים.</p>

                  <h3 className="text-2xl font-bold text-white mb-4">טיפים למקסימום יעילות:</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-6">
                        <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          בדיקת איכות מהירה
                        </h4>
                        <CodeBlock language="bash" index="quality">
{`# בדיקת syntax
npm run build

# בדיקת performance
npm run lighthouse`}
                        </CodeBlock>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-6">
                        <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          אופטימיזציות בסיסיות
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• דחיסת תמונות (TinyPNG)</li>
                          <li>• מינימיזציה של CSS/JS</li>
                          <li>• הוספת meta tags לSEO</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="deployment" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    השלב השישי: פרסום (5 דקות)
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-4">פרסום ב-Vercel (הכי מהיר)</h3>
                  
                  <CodeBlock language="bash" index="deploy">
{`# התקנה
npm i -g vercel

# פרסום
vercel

# המערכת תשאל מספר שאלות - סמנו Yes לכולן`}
                  </CodeBlock>

                  <h3 className="text-2xl font-bold text-white mb-4">חלופות מהירות:</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-6">
                        <h4 className="text-cyan-400 font-bold mb-2">Netlify</h4>
                        <p className="text-gray-300 text-sm">גרירה ושחרור של תיקייה</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-6">
                        <h4 className="text-cyan-400 font-bold mb-2">GitHub Pages</h4>
                        <p className="text-gray-300 text-sm">חינם לפרויקטים פומביים</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-6">
                        <h4 className="text-cyan-400 font-bold mb-2">Surge.sh</h4>
                        <p className="text-gray-300 text-sm">פקודה אחת ואתם באוויר</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="examples" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    דוגמאות עבודה ומוצעי זמן
                  </h2>

                  <div className="space-y-8">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">אתר תדמית עסקי (45 דקות)</h3>
                        <p className="text-gray-300 mb-4">
                          <strong>מה יצא:</strong> דף נחיתה עם 5 קטעים, טופס יצירת קשר, עיצוב מותאם לנייד
                        </p>
                        <div className="bg-slate-700/30 rounded-lg p-6">
                          <h4 className="text-white font-bold mb-2">הזמנים בפועל:</h4>
                          <ul className="space-y-1 text-gray-300">
                            <li>• תכנון: 8 דקות</li>
                            <li>• קוד: 25 דקות</li>
                            <li>• תוכן: 7 דקות</li>
                            <li>• פרסום: 5 דקות</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">פורטפוליו מעצב (35 דקות)</h3>
                        <p className="text-gray-300 mb-4">
                          <strong>מה יצא:</strong> גלריית עבודות, אודות, קורות חיים להורדה
                        </p>
                        <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-6">
                          <p className="text-yellow-400 font-bold">טיפ: השתמשו ב-Unsplash API לתמונות מקום</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">דף נחיתה למוצר (30 דקות)</h3>
                        <p className="text-gray-300">
                          <strong>מה יצא:</strong> Hero מרשים, יתרונות, מחירים, עדויות לקוחות
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <Separator className="my-12 bg-slate-600" />

                <section id="tips" className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-cyan-400 pr-4">
                    טיפים מתקדמים לייעול התהליך
                  </h2>

                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    פרומפטים מנצחים
                  </h3>

                  <div className="space-y-8 mb-10">
                    <div>
                      <h4 className="text-xl font-bold text-cyan-400 mb-3">לעיצוב רספונסיבי:</h4>
                      <CodeBlock language="prompt" index="responsive">
{`צור קומפוננט שנראה מושלם בכל גודל מסך.
השתמש ב-Tailwind responsive classes (sm:, md:, lg:, xl:).
וודא שהטקסט קריא במובייל.`}
                      </CodeBlock>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-cyan-400 mb-3">לאנימציות:</h4>
                      <CodeBlock language="prompt" index="animations">
{`הוסף אנימציות עדינות עם Tailwind:
- Fade in בכניסה לדף
- Hover effects על כפתורים
- Smooth scroll בין קטעים`}
                      </CodeBlock>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-cyan-400" />
                    קיצורי דרך שחוסכים זמן
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">Emmet Snippets בVS Code:</h4>
                        <ul className="space-y-2 text-gray-300 font-mono text-sm">
                          <li>• <code>div.container.mx-auto.px-4</code> ← קונטיינר מוכן</li>
                          <li>• <code>button.bg-blue-500.text-white.px-4.py-2.rounded</code> ← כפתור מעוצב</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">ChatGPT Extensions:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• <strong>WebChatGPT</strong> - תוספת לחיפוש ברשת</li>
                          <li>• <strong>AIPRM</strong> - תבניות פרומפטים מוכנות</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Palette className="w-6 h-6 text-cyan-400" />
                    משאבים לעיצוב מהיר
                  </h3>

                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">צבעים:</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• <a href="https://tailwindcss.com/docs/customizing-colors" className="hover:text-cyan-400">TailwindCSS Colors</a></li>
                          <li>• <a href="https://coolors.co" className="hover:text-cyan-400">Coolors.co</a> - פלטות צבעים אוטומטיות</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">אייקונים:</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• <a href="https://heroicons.com" className="hover:text-cyan-400">Heroicons</a> - מובנה ב-Tailwind</li>
                          <li>• <a href="https://lucide.dev" className="hover:text-cyan-400">Lucide React</a> - ספרייה עשירה</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h4 className="text-cyan-400 font-bold mb-3">תמונות:</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• <a href="https://unsplash.com" className="hover:text-cyan-400">Unsplash</a> - תמונות איכותיות חינם</li>
                          <li>• <a href="https://pixabay.com" className="hover:text-cyan-400">Pixabay</a> - וקטורים ותמונות</li>
                        </ul>
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
                            אתר מקצועי ומעוצב
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            קוד נקי ומתועד
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            עיצוב רספונסיבי
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            אתר באוויר וזמין לכולם
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600/30">
                      <CardContent className="p-8">
                        <h3 className="text-cyan-400 font-bold mb-4">צעדים הבאים לשיפור:</h3>
                        <ol className="space-y-2 text-gray-300">
                          <li>1. <strong>SEO מתקדם</strong> - Google Search Console, Schema Markup</li>
                          <li>2. <strong>אנליטיקס</strong> - Google Analytics, Hotjar</li>
                          <li>3. <strong>אבטחה</strong> - SSL, Headers בטיחותיים</li>
                          <li>4. <strong>ביצועים</strong> - CDN, Cache, Image Optimization</li>
                        </ol>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-blue-900/20 border-blue-600/30">
                    <CardContent className="p-8">
                      <h3 className="text-blue-400 font-bold mb-4">משאבים להעמקה:</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• <a href="https://nextjs.org/docs" className="hover:text-cyan-400">מדריך Next.js הרשמי</a></li>
                        <li>• <a href="https://tailwindcss.com/docs" className="hover:text-cyan-400">תיעוד Tailwind CSS</a></li>
                        <li>• <a href="https://web.dev/performance/" className="hover:text-cyan-400">Web.dev Performance</a></li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-10 border border-cyan-600/30 mt-10">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">זכרו:</h3>
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                      המטרה היא לא לבנות אתר מושלם בשעה אחת, אלא ליצור בסיס איכותי שתוכלו לפתח ולשפר עליו. 
                      AI הוא כלי עוצמתי, אבל הוא לא מחליף חשיבה יצירתית ובדיקה מדוקדקת.
                    </p>
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
                    <Button variant="outline" className="border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                      הצטרפו לניוזלטר
                    </Button>
                    <Button variant="outline" className="border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                      מדריכים נוספים
                    </Button>
                    <Button variant="outline" className="border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
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
          <h3 className="text-3xl font-bold text-white mb-4">מוכנים לבנות אתר בעצמכם?</h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            קבלו ייעוץ אישי וליווי מקצועי בבניית האתר הבא שלכם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
              בואו נתחיל לבנות
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 text-lg rounded-xl transition-colors">
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