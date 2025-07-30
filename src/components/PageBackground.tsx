import React from 'react';

interface PageBackgroundProps {
  children: React.ReactNode;
  showVideo?: boolean;
  videoProps?: {
    showContent?: boolean;
    videoError?: boolean;
  };
}

const PageBackground: React.FC<PageBackgroundProps> = ({ 
  children, 
  showVideo = false, 
  videoProps = {} 
}) => {
  const { showContent = false, videoError = false } = videoProps;

  return (
    <div className="min-h-screen text-white bg-transparent relative" dir="rtl">
      {showVideo && (
        <>
          {/* Video Background - Only for hero sections */}
          {!videoError && (
            <video
              className={`fixed inset-0 w-full h-full object-cover -z-40 transition-all duration-[4s] ease-out ${
                showContent ? 'brightness-50 scale-105' : 'brightness-100 scale-100'
              }`}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source src="/assets/videos/background.mp4" type="video/mp4" />
            </video>
          )}
          {/* Fallback background image */}
          {videoError && (
            <div
              className="fixed inset-0 w-full h-full -z-40"
              style={{
                backgroundImage: 'url(/assets/images/image.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              aria-hidden="true"
            />
          )}
          {/* Video overlay */}
          <div
            className={`fixed inset-0 w-full h-full -z-30 transition-all duration-[4s] ease-out ${
              showContent ? 'bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/80' : 'bg-slate-900/10'
            }`}
            aria-hidden="true"
          />
        </>
      )}

      {!showVideo && (
        <>
          {/* Gradient Background */}
          <div 
            className="fixed inset-0 w-full h-full -z-50 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
            aria-hidden="true"
          />
          
          {/* Animated SVG Background Elements */}
          <div className="fixed inset-0 w-full h-full -z-40 overflow-hidden" aria-hidden="true">
            {/* Large floating circles */}
            <svg className="absolute -top-20 -right-20 w-96 h-96 text-blue-500/10 animate-pulse">
              <circle cx="50%" cy="50%" r="40%" fill="currentColor" />
            </svg>
            
            <svg className="absolute top-1/3 -left-32 w-80 h-80 text-cyan-500/8 animate-pulse" style={{animationDelay: '2s'}}>
              <circle cx="50%" cy="50%" r="45%" fill="currentColor" />
            </svg>
            
            <svg className="absolute bottom-10 right-1/4 w-64 h-64 text-emerald-500/12 animate-pulse" style={{animationDelay: '4s'}}>
              <circle cx="50%" cy="50%" r="35%" fill="currentColor" />
            </svg>

            {/* Geometric shapes */}
            <svg className="absolute top-20 left-1/4 w-40 h-40 text-purple-500/15 animate-bounce" style={{animationDuration: '6s', animationDelay: '1s'}}>
              <polygon points="50,10 90,90 10,90" fill="currentColor" />
            </svg>
            
            <svg className="absolute bottom-1/3 left-10 w-32 h-32 text-orange-500/10 animate-bounce" style={{animationDuration: '8s', animationDelay: '3s'}}>
              <rect x="10" y="10" width="80" height="80" rx="15" fill="currentColor" transform="rotate(45 50 50)" />
            </svg>

            {/* Flowing lines */}
            <svg className="absolute top-0 left-0 w-full h-full text-blue-400/5">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,200 Q400,100 800,300 T1600,200"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M0,400 Q300,300 600,500 T1200,400"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                fill="none"
                className="animate-pulse"
                style={{animationDelay: '2s'}}
              />
            </svg>

            {/* Scattered dots */}
            <svg className="absolute inset-0 w-full h-full text-slate-400/20">
              <circle cx="10%" cy="20%" r="2" fill="currentColor" className="animate-pulse" />
              <circle cx="80%" cy="15%" r="1.5" fill="currentColor" className="animate-pulse" style={{animationDelay: '1s'}} />
              <circle cx="60%" cy="70%" r="2.5" fill="currentColor" className="animate-pulse" style={{animationDelay: '3s'}} />
              <circle cx="30%" cy="80%" r="1" fill="currentColor" className="animate-pulse" style={{animationDelay: '2s'}} />
              <circle cx="90%" cy="60%" r="2" fill="currentColor" className="animate-pulse" style={{animationDelay: '4s'}} />
              <circle cx="15%" cy="90%" r="1.5" fill="currentColor" className="animate-pulse" style={{animationDelay: '5s'}} />
            </svg>
          </div>

          {/* Subtle noise texture overlay */}
          <div 
            className="fixed inset-0 w-full h-full -z-30 opacity-[0.02] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;