import { MessageCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const FloatingWhatsApp = () => {
  const { contactByWhatsApp } = useAuth();

  return (
    <button
      onClick={contactByWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-none hover:animate-pulse backdrop-blur-sm border border-green-400/30"
      aria-label="פנו אלינו בווצאפ"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default FloatingWhatsApp;
