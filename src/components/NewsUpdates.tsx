import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, Zap, Award, Palette, Code, Lightbulb, Rocket, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { link } from "fs";

const NewsUpdates = () => {
  const articles = [
    {
      id: 1,
      title: "מדריך מקיף: בניית דף נחיתה עם AI בשעה אחת",
      description: "גלו כיצד להשתמש בכלי AI מתקדמים כמו Claude ו-ChatGPT לבניית דף נחיתה מקצועי ומכירתי שממיר מבקרים ללקוחות. כולל קוד מוכן, טיפים מעשיים ודוגמאות עבודה.",
      date: "2 ביולי 2025",
      category: "כלי AI",
      icon: <Zap className="w-5 h-5" />,
      readTime: "8 דקות קריאה",
      featured: true,
      link: "/articles/landing-page-with-ai"
    },
    {
      id: 2,
      title: "מדריך מקיף: איך לבנות אתר עסקי ",
      description: "כל מה שאתם צריכים לדעת על בניית אתר עסקי מנצח - מהדף הבית המושלם ועד לעמודי הבידול שיפרידו אתכם מהמתחרים. כולל טיפים מעשיים ודוגמאות עבודה.",
      date: "29 ביוני 2025",
      category: "עסקים דיגיטליים",
      icon: <Building className="w-5 h-5" />,
      readTime: "12 דקות קריאה",
      featured: true,
      link: "/articles/business-website-guide"
    },
    {
      id: 3,
      title: "5 טרנדים בעיצוב אתרים שחייבים לדעת ב-2025",
      description: "מגלסמורפיזם ועד אנימציות מיקרו - כל מה שצריך לדעת על הטרנדים החמים ביותר בעיצוב אתרים השנה.",
      date: "25 ביוני 2025",
      category: "עיצוב",
      icon: <Palette className="w-5 h-5" />,
      readTime: "6 דקות קריאה",
      featured: false
    },
    {
      id: 4,
      title: "React vs Vue vs Svelte - מה לבחור ב-2025?",
      description: "השוואה מעמיקה של שלושת הפריימוורקס הפופולאריים ביותר, כולל ביצועים, קהילה ומתי להשתמש בכל אחד.",
      date: "20 ביוני 2025",
      category: "פיתוח",
      icon: <Code className="w-5 h-5" />,
      readTime: "12 דקות קריאה",
      featured: false
    },
    {
      id: 5,
      title: "טיפ מהיר: CSS Grid במקום Flexbox?",
      description: "מתי להשתמש ב-CSS Grid ומתי ב-Flexbox? טיפים מעשיים שיחסכו לכם שעות של עבודה ויהפכו את הקוד ליותר נקי.",
      date: "15 ביוני 2025",
      category: "טיפים",
      icon: <Lightbulb className="w-5 h-5" />,
      readTime: "3 דקות קריאה",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "כלי AI":
        return "bg-slatefrom-slate-700/10/20 text-slatefrom-slate-700/10 border-slatefrom-slate-700/10/30";
      case "עסקים דיגיטליים":
        return "bg-orange-600/20 text-orange-400 border-orange-600/30";
      case "עיצוב":
        return "bg-pink-600/20 text-pink-400 border-pink-600/30";
      case "פיתוח":
        return "bg-blue-600/20 text-blue-400 border-blue-600/30";
      case "טיפים":
        return "bg-green-600/20 text-green-400 border-green-600/30";
      default:
        return "bg-slatefrom-slate-700/10/20 text-slatefrom-slate-700/10 border-slatefrom-slate-700/10/30";
    }
  };

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background matching Index.tsx */}
      <div className="absolute inset-0 bg-slate-900/50" aria-hidden="true"></div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ניוזלטר ומאמרים
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            מדריכים מעשיים, טיפים מקצועיים וכלי AI מתקדמים לבניית אתרים ופיתוח מוצרים דיגיטליים
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* מאמר מוביל */}
          <div className="lg:col-span-2 order-1 lg:order-1">
            {articles
              .filter(item => item.featured)
              .map(item => (
                <div key={item.id} className="bg-slate-800/60 mb-8 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-r from-slate-700/10/20 to-cyan-600/20 backdrop-blur-sm p-6 sm:p-8 border-b border-slate-600/30">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="bg-cyan-400/20 p-3 rounded-2xl border border-cyan-400/30 w-fit">
                        <div className="text-cyan-400">
                          {item.icon}
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium border w-fit ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-slate-700/10 to-cyan-600 hover:from-slate-700/10 hover:to-cyan-700 text-white group transition-all duration-300 w-full sm:w-auto">
                      <Link to={item.link} className="flex items-center">
                          קרא את המאמר
                          <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* מאמרים נוספים */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-2">
            {articles
              .filter(item => !item.featured)
              .map(item => (
                <div key={item.id} className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-4 sm:p-6 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-105 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2 sm:gap-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border w-fit ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300 w-fit sm:w-auto">
                      <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 w-fit sm:w-auto">
                      <Link to="/articles/landing-page-with-ai" className="flex items-center">
                        קרא עוד
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* הרשמה לניוזלטר */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-slate-700/50 p-6 sm:p-8 max-w-2xl mx-auto mb-6 md:mb-8">
            <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">הצטרפו לניוזלטר שלי</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base px-2">קבלו מדריכים חדשים, טיפים מקצועיים וכלי AI ישירות לתיבת המייל</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="אימייל"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-sm sm:text-base"
              />
              <Button className="bg-gradient-to-r from-slate-700/10 to-cyan-600/30 hover:from-slate-700/10 hover:to-cyan-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                הרשמה
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;