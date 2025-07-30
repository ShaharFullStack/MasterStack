import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useNavigate } from "react-router-dom";
import {
    Code,
    Mic,
    Music,
    Users,
    Briefcase,
    Heart,
    TrendingUp,
    Clapperboard,
    Gamepad2,
    Rocket,
    BrainCircuit,
    PenTool,
    Server,
    Palette,
    AppWindowMacIcon
} from "lucide-react";

const About = () => {
    const navigate = useNavigate();
    const { contactByWhatsApp } = useAuth();

    const musicianSkills = [
        { icon: <Briefcase className="w-8 h-8" />, title: "יזמות ושיווק", text: "לנהל את עצמך כעסק, מהבסיס ועד לצמיחה." },
        { icon: <PenTool className="w-8 h-8" />, title: "קופירייטינג ותוכן", text: "כתיבה, עריכת סרטונים, קליפים וכל מה שמסביב." },
        { icon: <Palette className="w-8 h-8" />, title: "הפקה ומיקסינג", text: "עבודה על סאונד, יצירת טראקים והבאה לתוצר מוגמר." },
        { icon: <Users className="w-8 h-8" />, title: "הוראה ומנטורינג", text: "הקניית ידע, טכניקה ומשמעת בסבלנות ותוך אמונה בתהליך." },
        { icon: <Heart className="w-8 h-8" />, title: "התמדה ואימון", text: "כישרון וידע זה לא מספיק, צריך להתאמן כל יום." },
        { icon: <BrainCircuit className="w-8 h-8" />, title: "חוסן מנטלי", text: "התמודדות עם מחסומים, כישלונות וגם עם הצלחות." },
    ];

    const myServices = [
        { icon: <Code className="w-8 h-8" />, title: "פיתוח ובניית אתרים", text: "מהיסוד ועד למוצר מוגמר, כולל מערכות מורכבות." },
        { icon: <Clapperboard className="w-8 h-8" />, title: "יצירה ועריכת תוכן", text: "קליפים, סרטוני קידום, ותוכן ויזואלי שמניע לפעולה." },
        { icon: <Music className="w-8 h-8" />, title: "סאונד ומיקסינג", text: "הפקת מוזיקה וסאונד מקצועי לפרויקטים דיגיטליים." },
        { icon: <AppWindowMacIcon className="w-8 h-8" />, title: "תלת מימד ו-Blender", text: "עיצוב ואנימציה בתלת מימד להוספת עומק וחדשנות." },
        { icon: <Gamepad2 className="w-8 h-8" />, title: "בניית משחקים", text: "פיתוח חוויות אינטראקטיביות עם Three.js וטכנולוגיות web." },
        { icon: <TrendingUp className="w-8 h-8" />, title: "שיווק דיגיטלי ו-SEO", text: "ניהול דפי עסק, Google Business וקידום אורגני." },
    ];

    return (
        <div className="bg-slate-900 text-white" dir="rtl">
            <SEO
                title="אודות MasterStack | ממוזיקאי למפתח Full-Stack"
                description="הסיפור של שחר מעוז, המייסד של MasterStack. גלו איך הרקע כמוזיקאי ועצמאי הפך ליתרון תחרותי בעולם הפיתוח, ואיך הניסיון הזה מביא ערך מוסף ללקוחות."
                keywords="אודות MasterStack, שחר מעוז, פיתוח אתרים, מוזיקאי מתכנת, פרילנסר פיתוח, full-stack"
                type="website"
            />

            <Header />

            <main id="main-content" className="relative pb-16 px-4 overflow-hidden">

                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="container max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            למה שמוזיקאי ירצה לתכנת?
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            זו שאלה שתמיד שואלים אותי. <br /> אני בדרך כלל מחזיר בשאלה
                            <br />
                            <span className="text-blue-400 font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">למה כונן C נקרא כונן C?</span>
                            <br />
                            הרוב לא יודעים את התשובה ואני גדלתי על A ו-B.
                            <br />
                            אני שחר, מפתח Full Stack ומומחה ביצירת חוויות אינטראקטיביות, מערכות מורכבות, ואוטומציה חכמה. מאחורי פרויקטים מבוססי React, Node.js, WebGL, Tone.js ו-Three.js ועוד שבניתי מאפס, מקונספט ועד מוצר עובד. <br />

                            אני מגיע מעולמות של יצירה, חינוך ומוזיקה, אבל אני לא מגדיר את עצמי לפי מה שהייתי אלא לפי מה שאני עושה היום: בונה כלים, משחקים, מערכות ניהול, ואתרי תוכן שמחברים עיצוב, חוויית משתמש, ותשתית טכנולוגית יציבה.  <br />אני עובד לבד כשצריך, משתלב בצוות כשאפשר, ותמיד מחפש את הפתרון הכי מדויק, לא הכי מהיר.<br />

                            מה שמבדל אותי כמפתח זו היכולת לראות את המערכת גם בעיניים של משתמש, גם בעיניים של איש תוכן, וגם דרך העדשה הטכנית. <br />אני לא כותב קוד כדי לעבור משימה אני בונה מבנים שמחזיקים מוצר.

                            אם זה אתר תדמית, מערכת פנימית, אפליקציית למידה או כלי אוטומציה אני כאן כדי להלחין פתרונות וזו לא מטאפורה<br /> אלא מתודולוגיה.




                        </p>

                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="justify-center items-center text-center relative overflow-hidden">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
כתבו לי ונתחיל מיד
                        </h1>
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <div className="max-w-xl mx-auto bg-brand-purple p-6 md:p-8 rounded-2xl shadow-2xl">
                            <form action="https://formspree.io/f/mvgqqkqq" method="POST" className="space-y-6">
                                <div className="text-right">

                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-white text-lg mb-2">שם מלא</label>
                                        <input type="text" id="name" name="name" placeholder="ישראל ישראלי" required
                                            className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]" />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-white text-lg mb-2">כתובת מייל</label>
                                        <input type="email" id="email" name="email" placeholder="israel@example.com" required
                                            className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phone" className="block text-white text-lg mb-2">מספר טלפון</label>
                                        <input type="tel" id="phone" name="phone" placeholder="050-1234567" required
                                            className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="block text-white text-lg mb-2">נושא הפנייה</label>
                                    <select id="subject" name="subject" required
                                        className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]">
                                        <option value="עמוד נחיתה">עמוד נחיתה</option>
                                        <option value="אתר תדמית">אתר תדמית</option>
                                        <option value="אחסון ותחזוקה">אחסון ותחזוקה</option>
                                        <option value="שאלה כללית">שאלה כללית</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-white text-lg mb-2">הודעה</label>
                                    <textarea id="message" name="message" placeholder="אשמח לקבל פרטים נוספים על..." required
                                        className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a3b18a]"></textarea>
                                </div>

                                <div className="text-center">
                                    <button type="submit"
                                        className="bg-primary-foreground text-[#2d5a4a] py-3 px-12 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                                        שליחת פנייה
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;