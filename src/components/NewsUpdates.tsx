import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, Zap, Award } from "lucide-react";

const NewsUpdates = () => {
  const news = [
    {
      id: 1,
      title: "השקת פלטפורמת AI חדשנית לבניית אתרים",
      description: "פיתחנו כלי AI מתקדם שמאפשר בניית אתרים מקצועיים תוך דקות ספורות, עם יכולות אופטימיזציה אוטומטיות.",
      date: "29 ביוני 2025",
      category: "חדשנות",
      icon: <Zap className="w-5 h-5" />,
      readTime: "3 דקות קריאה",
      featured: true
    },
    {
      id: 2,
      title: "הזכייה בפרס החדשנות הדיגיטלית 2025",
      description: "זכינו בפרס היוקרתי לחדשנות דיגיטלית בישראל על פיתוח הפתרונות המתקדמים שלנו.",
      date: "25 ביוני 2025",
      category: "הישגים",
      icon: <Award className="w-5 h-5" />,
      readTime: "2 דקות קריאה",
      featured: false
    },
    {
      id: 3,
      title: "שדרוג מערכת האבטחה - הגנה מתקדמת יותר",
      description: "השקנו מערכת אבטחה חדשה עם הגנה מפני איומים מתקדמים ובינה מלאכותית למניעת תקיפות.",
      date: "20 ביוני 2025",
      category: "אבטחה",
      icon: <TrendingUp className="w-5 h-5" />,
      readTime: "4 דקות קריאה",
      featured: false
    },
    {
      id: 4,
      title: "מדריך חדש: SEO מקומי לעסקים קטנים",
      description: "פרסמנו מדריך מקיף ל-SEO מקומי שיעזור לעסקים קטנים להגביר את הנראות שלהם בחיפושים מקומיים.",
      date: "15 ביוני 2025",
      category: "חינוך",
      icon: <TrendingUp className="w-5 h-5" />,
      readTime: "5 דקות קריאה",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "חדשנות":
        return "bg-blue-600/20 text-blue-400 border-blue-600/30";
      case "הישגים":
        return "bg-yellow-600/20 text-yellow-400 border-yellow-600/30";
      case "אבטחה":
        return "bg-red-600/20 text-red-400 border-red-600/30";
      case "חינוך":
        return "bg-green-600/20 text-green-400 border-green-600/30";
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-600/30";
    }
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background matching Index.tsx */}
      <div className="absolute inset-0 bg-slate-900/50" aria-hidden="true"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            חדשות ועדכונים
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            הישארו מעודכנים עם החדשות האחרונות, הפיתוחים החדשניים והשדרוגים המתקדמים שלנו
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* כתבה מובילה */}
          <div className="lg:col-span-2">
            {news
              .filter(item => item.featured)
              .map(item => (
                <div key={item.id} className="bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm p-8 border-b border-slate-600/30">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-cyan-400/20 p-3 rounded-2xl border border-cyan-400/30">
                        <div className="text-cyan-400">
                          {item.icon}
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white group transition-all duration-300">
                        קרא עוד
                        <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* כתבות נוספות */}
          <div className="space-y-8">
            {news
              .filter(item => !item.featured)
              .map(item => (
                <div key={item.id} className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-105 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
                      <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10">
                      קרא עוד
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* קישור לכל החדשות */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            צפה בכל החדשות
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
