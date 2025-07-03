import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, signInWithGoogle, logOut } from '../lib/firebase';
import { toast } from 'sonner';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      toast.success('התחברת בהצלחה!');
    } catch (error) {
      console.error('שגיאה בהתחברות:', error);
      toast.error('שגיאה בהתחברות. אנא נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      toast.success('התנתקת בהצלחה!');
    } catch (error) {
      console.error('שגיאה בהתנתקות:', error);
      toast.error('שגיאה בהתנתקות. אנא נסה שוב.');
    }
  };

  const handleContactByPhone = () => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '+972525347274';
    window.open(`tel:${phoneNumber}`, '_self');
    toast.info(`מתקשר ל-${phoneNumber}`);
  };

  const handleContactByEmail = () => {
    const email = import.meta.env.VITE_EMAIL_ADDRESS || 'admin@master-stack.com';
    window.open(`mailto:${email}`, '_blank');
    toast.info(`פותח מייל ל-${email}`);
  };

  const handleContactByWhatsApp = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+972525347274';
    const message = encodeURIComponent('היי! אשמח לקבל מידע נוסף על השירותים שלכם.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    toast.info('פותח WhatsApp');
  };

  return {
    user,
    loading,
    signInWithGoogle: handleSignInWithGoogle,
    signOut: handleSignOut,
    contactByPhone: handleContactByPhone,
    contactByEmail: handleContactByEmail,
    contactByWhatsApp: handleContactByWhatsApp
  };
};
