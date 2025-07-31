import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Calculator, Code, Search, Palette, Target, Settings, Lock, Gauge, BookOpen, GraduationCap, CheckCircle, AlertCircle, DollarSign, Phone, MessageCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const PriceCalculator = () => {
  const { contactByWhatsApp } = useAuth();
  const [serviceType, setServiceType] = useState("");
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [maintenance, setMaintenance] = useState("");

  const services = [
    { 
      id: "fix", 
      icon: <Code className="w-6 h-6" />,
      emoji: "🆘",
      name: "שחר עושה סדר", 
      minPrice: 1500, 
      maxPrice: 3500, 
      description: "תיקון ושדרוג אתרים שנבנו בעזרת AI - כשניסיתם לבד ונתקעתם",
      problem: "אתר שנבנה בעזרת AI לא עובד / לא נראה טוב / לא מביא לקוחות"
    },
    { 
      id: "audit", 
      icon: <Search className="w-6 h-6" />,
      emoji: "🔍",
      name: "סריקה ופתרונות", 
      minPrice: 399, 
      maxPrice: 499, 
      description: "סריקה מקצועית של האתר + דוח פידבק מפורט עם המלצות לתיקון",
      problem: "האתר לא מביא לקוחות ולא יודע למה ומה לתקן"
    },
    { 
      id: "landing", 
      icon: <Target className="w-6 h-6" />,
      emoji: "🏃‍♂️",
      name: "עמוד נחיתה מקסיק", 
      minPrice: 1200, 
      maxPrice: 2500, 
      description: "עמוד נחיתה אטרקטיבי ומקצועי שמותאם להמרות עם טפסי הזמנה ושיחה לפעולה חזקה",
      problem: "עסקים שרוצים למכור מוצר או שירות ספציפי אבל לא יודעים איך לבנות עמוד שמוכר"
    },
    { 
      id: "artist", 
      icon: <Palette className="w-6 h-6" />,
      emoji: "🎨",
      name: "אתר תדמית לאמנים וספורטאים", 
      minPrice: 2500, 
      maxPrice: 3300, 
      description: "אתר תדמית מרשים + גלריה מקצועית + מערכת הזמנות + אופטימיזציה למובייל",
      problem: "אמנים ספורטאים ומקצועות חופשיים זקוקים לנוכחות דיגיטלית מקצועית"
    },
    { 
      id: "business", 
      icon: <Palette className="w-6 h-6" />,
      emoji: "🎨",
      name: "אתר לעסקים קטנים-בינוניים", 
      minPrice: 4500, 
      maxPrice: 9900, 
      description: "אתר מרשים + גלריה מקצועית + מערכת הזמנות + אופטימיזציה למובייל",
      problem: "עסקים קטנים-בינוניים זקוקים לנוכחות דיגיטלית מקצועית"
    },
    { 
      id: "seo-artist", 
      icon: <Target className="w-6 h-6" />,
      emoji: "🎯",
      name: "SEO מקומי לאמנים וספורטאים", 
      minPrice: 1300, 
      maxPrice: 3300, 
      description: "אופטימיזציה לחיפושים מקומיים הגדרת Google My Business קידום על מילות מפתח",
      problem: "אמנים עם אתרים יפים שאף אחד לא מוצא בגוגל כשמחפשים בעיר שלהם"
    },
    { 
      id: "seo-business", 
      icon: <Target className="w-6 h-6" />,
      emoji: "🎯",
      name: "SEO מקומי לעסקים קטנים-בינוניים", 
      minPrice: 1800, 
      maxPrice: 2500, 
      description: "אופטימיזציה לחיפושים מקומיים הגדרת Google My Business קידום על מילות מפתח",
      problem: "עסקים שאף אחד לא מוצא בגוגל כשמחפשים בעיר שלהם"
    },
    { 
      id: "security", 
      icon: <Lock className="w-6 h-6" />,
      emoji: "🔒",
      name: "שירותי אבטחה ובטיחות אתרים", 
      minPrice: 299, 
      maxPrice: 599, 
      description: "מערכת אבטחה מתקדמת גיבוי יומי אוטומטי מוניטורינג 24/7 שחזור מהיר",
      problem: "אתרים נפרצים וירוסים התקפות DDoS ואיבוד מידע שהורס עסקים שלמים"
    },
    { 
      id: "speed", 
      icon: <Gauge className="w-6 h-6" />,
      name: "שירותי מהירות ואופטימיזציה", 
      minPrice: 800, 
      maxPrice: 1500, 
      description: "אופטימיזציה מלאה למהירות דחיסת תמונות אופטימיזציה לקוד CDN ושיפור PageSpeed",
      problem: "אתרים איטיים שגורמים ללקוחות לעזוב ירידה בדירוגי גוגל וחוויית משתמש גרועה"
    },
    { 
      id: "training", 
      icon: <BookOpen className="w-6 h-6" />,
      emoji: "📚",
      name: "הדרכות שימוש באתר ללקוחות", 
      minPrice: 500, 
      maxPrice: 900, 
      description: "הדרכה אישית למערכת הניהול מדריכי וידאו מותאמים תמיכה צמודה לחודש הראשון",
      problem: "לקוחות מקבלים אתר מדהים אבל לא יודעים איך להוסיף תוכן או לנהל את האתר"
    },
    { 
      id: "coach", 
      icon: <GraduationCap className="w-6 h-6" />,
      emoji: "🎓",
      name: "מאמן דיגיטלי לעסקים קטנים", 
      minPrice: 890, 
      maxPrice: 1490, 
      description: "ליווי חודשי משולב AI וייעוץ אנושי לבניית יכולת דיגיטלית עצמאית במקום תלות מוחלטת",
      problem: "עסקים קטנים וטכנופוביים שזקוקים לליווי הדרגתי לבניית יכולות דיגיטליות עצמאיות"
    }
  ];

  const maintenanceOptions = [
    { 
      id: "basic", 
      name: "חבילת תחזוקה חודשית בסיסית", 
      price: 149, 
      maxPrice: 299,
      description: "עדכוני מערכת ותוספים גיבוי חודשי סריקת קישורים שבורים בדיקת PageSpeed" 
    },
    { 
      id: "advanced", 
      name: "חבילת תחזוקה חודשית מתקדמת", 
      price: 399, 
      maxPrice: 599,
      description: "עדכוני מערכת ותוספים גיבוי שבועי ניטור פרואקטיבי 24/7 שעות תמיכה נוספות אופטימיזציה בסיסית" 
    },
    { 
      id: "premium", 
      name: "חבילת תחזוקה חודשית פרימיום", 
      price: 699, 
      maxPrice: 999,
      description: "כל מה שיש במתקדמת + עדכוני תוכן קלים דוחות ביצועים מפורטים ייעוץ אסטרטגי חודשי אופטימיזציה מתקדמת" 
    }
  ];

  const timelineOptions = [
    { id: "rush", name: "דחוף (1-2 שבועות)", multiplier: 1.5 },
    { id: "standard", name: "רגיל (3-4 שבועות)", multiplier: 1 },
    { id: "extended", name: "מורחב (6-8 שבועות)", multiplier: 0.85 }
  ];

  const calculatePrice = () => {
    const selectedService = services.find(s => s.id === serviceType);
    if (!selectedService) return { subtotal: 0, maintenance: 0, total: 0 };

    const basePrice = selectedService.maxPrice;
    
    // חישוב שירותים נוספים
    const additionalServicesCost = additionalServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.minPrice || 0);
    }, 0);
    
    // מכפיל זמנים
    const timelineOption = timelineOptions.find(t => t.id === timeline);
    const timelineMultiplier = timelineOption?.multiplier || 1;
    
    // תחזוקה חודשית
    const maintenanceOption = maintenanceOptions.find(m => m.id === maintenance);
    const maintenanceCost = maintenanceOption?.price || 0;
    
    const subtotal = (basePrice + additionalServicesCost) * timelineMultiplier;
    
    return {
      subtotal: Math.round(subtotal),
      maintenance: maintenanceCost,
      total: Math.round(subtotal)
    };
  };

  const price = calculatePrice();

  const handleAdditionalServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setAdditionalServices([...additionalServices, serviceId]);
    } else {
      setAdditionalServices(additionalServices.filter(s => s !== serviceId));
    }
  };

  return (
    <section className="min-h-screen text-white py-12 md:py-20 relative" dir="rtl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 md:p-4 bg-blue-600/20 rounded-2xl border border-blue-500/30">
              <Calculator className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              מחשבון מחיר
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            קבלו הערכת מחיר מדויקת ומיידית לפרויקט שלכם
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* טופס המחשבון */}
          <div className="lg:col-span-2 space-y-6">
            {/* סוג שירות עיקרי */}
            <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-b border-slate-600/30">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calculator className="w-5 h-5 text-blue-400" />
                  בחירת שירות עיקרי
                </CardTitle>
                <CardDescription className="text-gray-400">בחרו את השירות הראשי שאתם זקוקים לו</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={serviceType} onValueChange={setServiceType}>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value={service.id} id={service.id} />
                        <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                          <div className="p-3 md:p-4 border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors">
                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                              <div className="flex-shrink-0">{service.icon}</div>
                              <span className="text-xl md:text-2xl flex-shrink-0">{service.emoji}</span>
                              <div className="font-semibold text-white text-sm md:text-base">{service.name}</div>
                            </div>
                            <div className="text-xs md:text-sm text-gray-400 mb-2">{service.description}</div>
                            <div className="text-xs text-gray-500 mb-3 hidden md:block">{service.problem}</div>
                            <Badge variant="outline" className="border-blue-500 text-blue-400 text-xs">
                              {service.minPrice.toLocaleString()}-{service.maxPrice.toLocaleString()}₪
                            </Badge>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* שירותים נוספים */}
            <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-b border-slate-600/30">
                <CardTitle className="text-white">שירותים נוספים</CardTitle>
                <CardDescription className="text-gray-400">הוסיפו שירותים נוספים לחבילה שלכם</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.filter(s => s.id !== serviceType).map((service) => (
                    <div key={service.id} className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox
                        id={`additional-${service.id}`}
                        checked={additionalServices.includes(service.id)}
                        onCheckedChange={(checked) => handleAdditionalServiceChange(service.id, checked as boolean)}
                      />
                      <Label htmlFor={`additional-${service.id}`} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center p-3 border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors">
                          <div className="flex items-center gap-3">
                            {service.icon}
                            <span className="text-lg">{service.emoji}</span>
                            <span className="font-medium text-white">{service.name}</span>
                          </div>
                          <Badge variant="outline" className="border-blue-500 text-blue-400">
                            +{service.minPrice.toLocaleString()}₪
                          </Badge>
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* לוח זמנים */}
            <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-b border-slate-600/30">
                <CardTitle className="text-white">לוח זמנים</CardTitle>
                <CardDescription className="text-gray-400">מתי תרצו שהפרויקט יושלם?</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="בחרו לוח זמנים" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {timelineOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id} className="text-white hover:bg-slate-700">
                        <div className="flex justify-between items-center w-full">
                          <span>{option.name}</span>
                          {option.multiplier !== 1 && (
                            <Badge variant={option.multiplier > 1 ? "destructive" : "default"} className="mr-2">
                              {option.multiplier > 1 ? `+${((option.multiplier - 1) * 100).toFixed(0)}%` : `-${((1 - option.multiplier) * 100).toFixed(0)}%`}
                            </Badge>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* תחזוקה */}
            <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-b border-slate-600/30">
                <CardTitle className="text-white">שירותי תחזוקה</CardTitle>
                <CardDescription className="text-gray-400">בחרו חבילת תחזוקה חודשית (אופציונלי)</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={maintenance} onValueChange={setMaintenance}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="בחרו חבילת תחזוקה (אופציונלי)" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {maintenanceOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id} className="text-white hover:bg-slate-700">
                        <div>
                          <div className="font-semibold">{option.name}</div>
                          <div className="text-sm text-gray-400">{option.description}</div>
                          <Badge variant="outline" className="mt-1">
                            {option.price}-{option.maxPrice}₪/חודש
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          {/* סיכום מחיר */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <Card className="bg-slate-800/60 backdrop-blur-sm shadow-2xl border-2 border-blue-500/30">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <DollarSign className="w-5 h-5 md:w-6 md:h-6" />
                    הערכת מחיר
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-sm md:text-base">
                    מחיר מותאם לפרויקט שלכם
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  {serviceType ? (
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">שירות עיקרי:</span>
                          <span className="font-semibold text-white">{services.find(s => s.id === serviceType)?.maxPrice.toLocaleString()}₪</span>
                        </div>
                        
                        {additionalServices.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-gray-400">שירותים נוספים:</span>
                            {additionalServices.map(serviceId => {
                              const service = services.find(s => s.id === serviceId);
                              return service ? (
                                <div key={serviceId} className="flex justify-between items-center text-sm">
                                  <span className="text-gray-500">• {service.name}</span>
                                  <span className="text-white">+{service.minPrice.toLocaleString()}₪</span>
                                </div>
                              ) : null;
                            })}
                          </div>
                        )}
                        
                        {timeline && timelineOptions.find(t => t.id === timeline)?.multiplier !== 1 && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">התאמת זמנים:</span>
                            <span className="font-semibold text-white">
                              {(() => {
                                const timelineOption = timelineOptions.find(t => t.id === timeline);
                                if (!timelineOption) return '';
                                const multiplier = timelineOption.multiplier;
                                return multiplier > 1 ? 
                                  `+${((multiplier - 1) * 100).toFixed(0)}%` : 
                                  `${((multiplier - 1) * 100).toFixed(0)}%`;
                              })()}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <Separator className="bg-slate-600" />
                      
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span className="text-white">סה"כ:</span>
                        <span className="text-2xl text-blue-400">{price.total.toLocaleString()}₪</span>
                      </div>
                      
                      {maintenance && (
                        <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-300">תחזוקה חודשית:</span>
                            <span className="font-semibold text-blue-400">{price.maintenance}₪/חודש</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-3 md:space-y-4 pt-4">
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 h-12 md:h-14 text-sm md:text-base"
                          onClick={() => {
                            const message = `היי! אשמח לקבל הצעת מחיר מדויקת יותר על: ${price.total.toLocaleString()}₪`;
                            // Create a custom WhatsApp contact with the specific message
                            const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+972525347274';
                            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                        >
                          <MessageCircle className="w-4 h-4 ml-2" />
                          בקש הצעת מחיר בווצאפ
                        </Button>
                        <Button variant="outline" className="w-full border-slate-600 text-gray-300 hover:bg-slate-700 h-10 md:h-12 text-sm md:text-base">
                          התייעץ עם מומחה
                        </Button>
                      </div>
                      
                      <div className="bg-green-900/20 p-3 md:p-4 rounded-lg border border-green-500/30">
                        <div className="flex items-center gap-2 text-green-400 text-xs md:text-sm">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span>הערכה ללא התחייבות</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6 md:py-8">
                      <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-slate-400 mx-auto mb-3 md:mb-4" />
                      <p className="text-gray-400 text-sm md:text-base">בחרו שירות עיקרי לקבלת הערכת מחיר</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
