import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Globe,
  MessageSquare,
  Users,
  Briefcase,
  Star,
  Calendar,
  ChartGanttIcon,
  MessageSquareCodeIcon,
  MessageCircle
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const AdvancedContact = () => {
  const { contactByWhatsApp, contactByPhone, contactByEmail } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    contactMethod: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "בניית אתר חדש",
    "שדרוג אתר קיים",
    "SEO ושיווק דיגיטלי",
    "אבטחת אתרים",
    "תחזוקה ותמיכה",
    "עיצוב UI/UX",
    "פיתוח אפליקציה",
    "ייעוץ דיגיטלי",
    "אחר"
  ];

  const budgetRanges = [
    "עד 5,000₪",
    "5,000-10,000₪",
    "10,000-25,000₪",
    "25,000-50,000₪",
    "50,000₪+"
  ];

  const timelines = [
    "דחוף (1-2 שבועות)",
    "רגיל (3-4 שבועות)",
    "גמיש (5-8 שבועות)",
    "ארוך טווח (3+ חודשים)"
  ];

  const contactMethods = [
    "ווצאפ",
    "טלפון",
    "אימייל",
    "פגישה אישית"
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-blue-600/20 rounded-2xl border border-blue-500/30">
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              בואו נדבר על הפרויקט שלכם
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            השאירו פרטים ונחזור אליכם תוך 24 שעות עם הצעה מותאמת אישית
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-b border-slate-600/30">
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Send className="w-6 h-6 text-blue-400" />
                פרטי הפרויקט
              </CardTitle>
              <CardDescription className="text-gray-300">
                מלאו את הפרטים ונכין עבורכם הצעה מותאמת
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">שם מלא *</label>
                    <Input
                      placeholder="שם פרטי ומשפחה"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">אימייל *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">טלפון</label>
                    <Input
                      type="tel"
                      placeholder="052-123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">שם החברה</label>
                    <Input
                      placeholder="שם העסק או החברה"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>
                </div>

                <Separator className="bg-slate-600/50" />

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">סוג השירות *</label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="בחרו שירות" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {services.map((service) => (
                          <SelectItem key={service} value={service} className="text-white hover:bg-slate-700">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">תקציב משוער</label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="בחרו תקציב" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {budgetRanges.map((budget) => (
                          <SelectItem key={budget} value={budget} className="text-white hover:bg-slate-700">
                            {budget}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">לוח זמנים</label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="בחרו לוח זמנים" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {timelines.map((timeline) => (
                          <SelectItem key={timeline} value={timeline} className="text-white hover:bg-slate-700">
                            {timeline}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">איך תעדיפו שנחזור אליכם?</label>
                    <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange('contactMethod', value)}>
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="בחרו דרך יצירת קשר" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {contactMethods.map((method) => (
                          <SelectItem key={method} value={method} className="text-white hover:bg-slate-700">
                            {method}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">תיאור הפרויקט *</label>
                  <Textarea
                    placeholder="ספרו לנו על הפרויקט שלכם, מה הציפיות ומה החזון..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="min-h-[120px] bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 ml-2" />
                      נשלח בהצלחה!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 ml-2" />
                      שלח בקשה
                    </>
                  )}
                </Button>

                {isSubmitted && (
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4 text-center">
                    <p className="text-green-400 font-medium">התקבל! נחזור אליכם תוך 24 שעות</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 overflow-hidden group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-600/20 rounded-2xl border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">ווצאפ וטלפון</h3>
                      <p className="text-gray-400">זמינים א'-ה' 08:00-21:00</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p className="text-lg font-semibold text-white">+972525347274</p>
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={contactByWhatsApp}>
                        <MessageCircle className="w-4 h-4 ml-1" />
                        הודעה בווצאפ
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={contactByPhone}>
                        <Phone className="w-4 h-4 ml-1" />
                        שיחה טלפונית
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 overflow-hidden group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-cyan-600/20 rounded-2xl border border-cyan-500/30 group-hover:bg-cyan-600/30 transition-colors">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">אימייל</h3>
                      <p className="text-gray-400">מענה תוך 24 שעות</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p className="text-lg font-semibold text-white">admin@master-stack.com</p>
                    <Button size="sm" variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700" onClick={contactByEmail}>
                      שלח מייל
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 overflow-hidden group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-600/20 rounded-2xl border border-green-500/30 group-hover:bg-green-600/30 transition-colors">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">מיקום</h3>
                      <p className="text-gray-400">פגישות אישיות בתיאום</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p className="text-lg font-semibold text-white">הרצליה, ישראל</p>
                    <p className="text-sm text-gray-400">גם פגישות און-ליין וביקורים אצל הלקוח</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
              <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50 overflow-hidden group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  למה לבחור בנו?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">מענה מהיר תוך 24 שעות</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">ייעוץ ללא עלות</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">ניסיון של מעל 5 שנים</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">תמיכה מתמשכת לאחר מסירת הפרויקט</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedContact;
