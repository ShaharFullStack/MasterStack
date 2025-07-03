import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  User, 
  LogIn, 
  LogOut, 
  Mail, 
  Phone, 
  MessageCircle,
  Settings,
  UserCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

const UserMenu = () => {
  const { 
    user, 
    loading, 
    signInWithGoogle, 
    signOut,
    contactByPhone,
    contactByEmail,
    contactByWhatsApp 
  } = useAuth();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactAction = (type: 'email' | 'phone' | 'whatsapp') => {
    switch (type) {
      case 'email':
        contactByEmail();
        break;
      case 'phone':
        contactByPhone();
        break;
      case 'whatsapp':
        contactByWhatsApp();
        break;
    }
    setIsContactModalOpen(false);
  };

  if (loading) {
    return (
      <div className="w-8 h-8 bg-slate-700/50 rounded-full animate-pulse"></div>
    );
  }

  return (
    <>
      {user ? (
        // Logged in user menu
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="relative h-10 w-auto px-3 rounded-full bg-slate-700/30 hover:bg-slate-600/50 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-cyan-400/30">
                  <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'משתמש'} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-cyan-400 text-white font-bold">
                    {user.displayName?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start text-right">
                  <span className="text-sm font-medium text-white">
                    {user.displayName || 'משתמש'}
                  </span>
                  <span className="text-xs text-gray-400">
                    {user.email}
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-80 bg-slate-800/95 backdrop-blur-md border-slate-700/50 shadow-xl" 
            align="end"
          >
            <DropdownMenuLabel className="text-right text-white border-b border-slate-700/50 pb-2">
              <div className="flex items-center gap-3 py-2">
                <Avatar className="h-10 w-10 border-2 border-cyan-400/30">
                  <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'משתמש'} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-cyan-400 text-white font-bold">
                    {user.displayName?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-right">
                  <span className="font-medium">{user.displayName || 'משתמש'}</span>
                  <span className="text-sm text-gray-400">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            
            <DropdownMenuItem 
              className="text-right text-gray-300 hover:text-white hover:bg-slate-700/50 cursor-pointer py-3"
              onClick={() => setIsContactModalOpen(true)}
            >
              <div className="flex items-center gap-3 w-full justify-end">
                <span>צור קשר</span>
                <MessageCircle className="w-4 h-4" />
              </div>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="text-right text-gray-300 hover:text-white hover:bg-slate-700/50 cursor-pointer py-3">
              <div className="flex items-center gap-3 w-full justify-end">
                <span>הגדרות</span>
                <Settings className="w-4 h-4" />
              </div>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="bg-slate-700/50" />
            
            <DropdownMenuItem 
              className="text-right text-red-400 hover:text-red-300 hover:bg-red-900/20 cursor-pointer py-3"
              onClick={signOut}
            >
              <div className="flex items-center gap-3 w-full justify-end">
                <span>התנתק</span>
                <LogOut className="w-4 h-4" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        // Not logged in - show login and contact options
        <div className="flex items-center gap-2">


          <Button 
            onClick={signInWithGoogle}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <User className="w-4 h-4 mr-2" />
            התחבר
          </Button>
        </div>
      )}

      {/* Contact Modal */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="bg-slate-800/95 backdrop-blur-md border-slate-700/50 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-right text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              בואו נתחיל לעבוד יחד
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-6">
            <p className="text-gray-300 text-right leading-relaxed">
              יש לכם פרויקט מעניין? רוצים לשמוע על השירותים שלנו? 
              בחרו את הדרך הנוחה לכם ליצירת קשר:
            </p>
            
            <div className="space-y-3">
              <Button 
                onClick={() => handleContactAction('whatsapp')}
                className="w-full bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-green-400 hover:text-green-300 transition-all duration-300 justify-end"
                variant="outline"
              >
                <div className="flex items-center gap-2">
                  <span>שלח הודעה ב-WhatsApp</span>
                  <MessageCircle className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4" />
              </Button>
              
              <Button 
                onClick={() => handleContactAction('phone')}
                className="w-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 text-blue-400 hover:text-blue-300 transition-all duration-300 justify-end"
                variant="outline"
              >
                <div className="flex items-center gap-2">
                  <span>התקשר עכשיו - 052-534-7274</span>
                  <Phone className="w-5 h-5" />
                </div>
              </Button>
              
              <Button 
                onClick={() => handleContactAction('email')}
                className="w-full bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-600/30 text-cyan-400 hover:text-cyan-300 transition-all duration-300 justify-end"
                variant="outline"
              >
                <div className="flex items-center gap-2">
                  <span>שלח מייל - admin@master-stack.com</span>
                  <Mail className="w-5 h-5" />
                </div>
              </Button>
            </div>
            
            <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
              <p className="text-sm text-gray-400 text-right">
                <strong className="text-cyan-400">זמני מענה:</strong><br />
                ראשון-חמישי: 09:00-18:00<br />
                מענה מהיר ב-WhatsApp גם בסופ"ש
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserMenu;
