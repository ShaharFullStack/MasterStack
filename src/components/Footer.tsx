import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm text-white py-12 px-4 border-t border-slate-700/50 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MasterStack
            </h3>
            <p className="text-gray-400 mb-4">
              הפתרון הדיגיטלי המתקדם לעסק שלכם. אנחנו כאן כדי להעלות את העסק שלכם לרמה הבאה.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-white font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-white font-bold">@</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">שירותים</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">כל השירותים</Link></li>
              <li><Link to="/calculator" className="hover:text-blue-400 transition-colors">בניית אתרים</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">SEO ושיווק דיגיטלי</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">אבטחת אתרים</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">תחזוקה ותמיכה</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">החברה</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#about" className="hover:text-blue-400 transition-colors">אודות</a></li>
              <li><Link to="/news" className="hover:text-blue-400 transition-colors">חדשות ועדכונים</Link></li>
              <li><a href="/#testimonials" className="hover:text-blue-400 transition-colors">המלצות לקוחות</a></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">קריירה</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">צור קשר</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+972525347274</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>admin@master-stack.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-400 mt-1" />
                <span>תל אביב, ישראל</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 MasterStack. כל הזכויות שמורות.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-blue-400 transition-colors">מדיניות פרטיות</a>
            <a href="#" className="hover:text-blue-400 transition-colors">עזרה</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
