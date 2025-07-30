import {
  MessageCircle,
  Shield,
  Star,
  Zap
} from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three'; // Added for TypeScript type safety
import AccessibilityMenu from '../components/AccessibilityMenu';
import Breadcrumbs from '../components/Breadcrumbs';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageBackground from '../components/PageBackground';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

// TypeScript declaration for window.THREE with extended properties
declare global {
  interface Window {
    THREE: typeof import('three') & {
      CSS3DObject: new (element: HTMLElement) => {
        rotation: { x: number; y: number };
      };
      CSS3DRenderer: new () => {
        setSize: (width: number, height: number) => void;
        domElement: HTMLElement;
        render: (scene: unknown, camera: unknown) => void;
      };
    };
  }
}

// --- Helper function to load scripts dynamically ---
const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      // Check if script is already loaded by testing for the global object
      if (src.includes('three.min.js') && window.THREE) {
        resolve();
        return;
      }
      if (src.includes('CSS3DRenderer.js') && window.THREE?.CSS3DRenderer) {
        resolve();
        return;
      }
      // If script exists but not loaded, wait for it
      existingScript.addEventListener('load', () => resolve());
      existingScript.addEventListener('error', () => reject(new Error(`Script load error for ${src}`)));
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.appendChild(script);
  });
};

const ServiceCard3D = ({ service }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js')
      .then(() => {
        if (service.type === 'iframe') {
          return loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/renderers/CSS3DRenderer.js');
        }
      })
      .then(() => setScriptsLoaded(true))
      .catch(error => console.error(error));
  }, [service.type]);

  useEffect(() => {
    if (!scriptsLoaded || !mountRef.current) return;
    const currentMount = mountRef.current;

    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer | InstanceType<typeof window.THREE.CSS3DRenderer>;
    let frameId: number;
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };
    let object: THREE.Object3D | InstanceType<typeof window.THREE.CSS3DObject>;
    const innerShapes: THREE.Mesh[] = [];
    let iframeElement: HTMLIFrameElement;

    const init = () => {
      const container = mountRef.current!;
      const width = container.clientWidth;
      const height = container.clientHeight;
      scene = new window.THREE.Scene();
      
      if (service.type === 'iframe') {
        camera = new window.THREE.PerspectiveCamera(75, width / height, 1, 5000);
        camera.position.set(0, 0, 850);

        // Create smartphone container - קטן ב-20%
        const phoneContainer = document.createElement('div');
        phoneContainer.style.width = '440px'; 
        phoneContainer.style.height = '720px'; 
        phoneContainer.style.position = 'relative';
        phoneContainer.style.background = 'linear-gradient(145deg, #1e293b, #334155)';
        phoneContainer.style.borderRadius = '35px';
        phoneContainer.style.padding = '10px 6px 15px 4px';
        phoneContainer.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
        phoneContainer.style.transform = 'translate(-25%, -25%)';
        phoneContainer.style.right = '0%';
        phoneContainer.style.top = '3%';

        // Create notch
        const notch = document.createElement('div');
        notch.style.position = 'absolute';
        notch.style.top = '2px';
        notch.style.left = '50%';
        notch.style.transform = 'translateX(-50%)';
        notch.style.width = '120px';
        notch.style.height = '25px';
        notch.style.background = '#000';
        notch.style.borderRadius = '0 0 20px 20px';
        notch.style.zIndex = '10';
        phoneContainer.appendChild(notch);

        // Create screen container
        const screenContainer = document.createElement('div');
        screenContainer.style.width = '100%';
        screenContainer.style.height = 'calc(100% - 35px)';
        screenContainer.style.position = 'relative';
        screenContainer.style.background = '#000';
        screenContainer.style.borderRadius = '25px';
        screenContainer.style.overflow = 'hidden';
        screenContainer.style.marginTop = '30px';

        // Create iframe (the actual screen content)
        const element = document.createElement('iframe');
        element.src = service.demoUrl;
        element.style.width = '100%';
        element.style.height = '100%';
        element.style.border = 'none';
        element.style.borderRadius = '25px';
        element.style.position = 'absolute';
        element.style.top = '0';
        element.style.left = '0';
        element.style.pointerEvents = 'none';
        element.style.userSelect = 'none';
        iframeElement = element;

        // Create home indicator
        const homeIndicator = document.createElement('div');
        homeIndicator.style.position = 'absolute';
        homeIndicator.style.bottom = '8px';
        homeIndicator.style.left = '50%';
        homeIndicator.style.transform = 'translateX(-50%)';
        homeIndicator.style.width = '35%';
        homeIndicator.style.height = '4px';
        homeIndicator.style.background = 'rgba(255, 255, 255, 0.3)';
        homeIndicator.style.borderRadius = '2px';
        phoneContainer.appendChild(homeIndicator);

        // Assemble the phone
        screenContainer.appendChild(element);
        phoneContainer.appendChild(screenContainer);

        object = new window.THREE.CSS3DObject(phoneContainer);
        scene.add(object as unknown as THREE.Object3D);

        renderer = new window.THREE.CSS3DRenderer();
      
      } else {
        camera = new window.THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;
        
        const mainGeometry = new window.THREE.BoxGeometry(2.5, 2.5, 2.5);
        const edges = new window.THREE.EdgesGeometry(mainGeometry);
        const mainCube = new window.THREE.LineSegments(edges, new window.THREE.LineBasicMaterial({ color: 0x34d399, linewidth: 2 }));
        
        const innerShapesGroup = new window.THREE.Group();
        const geometries = [ new window.THREE.SphereGeometry(0.2, 16, 16), new window.THREE.BoxGeometry(0.3, 0.3, 0.3), new window.THREE.ConeGeometry(0.2, 0.4, 16)];
        const colors = [0xff6347, 0x4682b4, 0x32cd32, 0xffd700, 0x6a5acd];

        for (let i = 0; i < 15; i++) {
            const geom = geometries[Math.floor(Math.random() * geometries.length)];
            const material = new window.THREE.MeshStandardMaterial({ color: colors[Math.floor(Math.random() * colors.length)], roughness: 0.5 });
            const shape = new window.THREE.Mesh(geom, material);

            shape.position.set((Math.random() - 0.5) * 2.2, (Math.random() - 0.5) * 2.2, (Math.random() - 0.5) * 2.2);
            shape.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            
            // Physics properties
            shape.userData = { 
              velocity: new window.THREE.Vector3(
                (Math.random() - 0.5) * 0.01,
                0, // Start with no Y velocity
                (Math.random() - 0.5) * 0.01
              ),
              mass: 0.5 + Math.random() * 0.5,
              bounce: 0.1 + Math.random() * 0.2, // Lower bounce for settling
              radius: geom.type === 'SphereGeometry' ? 0.2 : 0.15,
              settled: false
            };

            innerShapes.push(shape);
            innerShapesGroup.add(shape);
        }

        mainCube.add(innerShapesGroup);
        object = mainCube;
        
        const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        const pointLight = new window.THREE.PointLight(0xffffff, 0.8);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        scene.add(object as THREE.Object3D);
        renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
      }

      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
      
      container.addEventListener('mouseenter', onMouseEnter);
      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseleave', onMouseLeave);
    };

    const onMouseMove = (event: MouseEvent) => {
      const container = mountRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mouseX = (event.clientX - rect.left) / rect.width * 2 - 1;
      const mouseY = -(event.clientY - rect.top) / rect.height * 2 + 1;
      targetRotation.y = mouseX * 0.5;
      targetRotation.x = mouseY * 0.5;
    };

    const onMouseEnter = () => {
      // Enable pointer events on iframe when hovering over the card
      if (iframeElement) {
        iframeElement.style.pointerEvents = 'auto';
      }
    };

    const onMouseLeave = () => {
      targetRotation.x = 0;
      targetRotation.y = 0;
      // Disable pointer events when leaving the card
      if (iframeElement) {
        iframeElement.style.pointerEvents = 'none';
      }
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
      
      if (object) {
        object.rotation.x = currentRotation.x;
        object.rotation.y = currentRotation.y;
      }
      
      if (service.type === 'abstract' && object) {
        object.rotation.y += 0.002;
        
        // Physics simulation for inner shapes
        const cubeSize = 1.4; // Half of cube size (3/2 - some margin)
        const gravity = new window.THREE.Vector3(0, -0.001, 0); // Stronger gravity
        const damping = 0.95;
        const groundLevel = -cubeSize + 0.1; // Ground level with small margin
        
        innerShapes.forEach(shape => {
          const userData = shape.userData;
          
          // Apply gravity only if not settled on ground
          if (!userData.settled) {
            userData.velocity.add(gravity);
          }
          
          // Apply cube rotation effects (centrifugal force) - reduced
          const rotationEffect = new window.THREE.Vector3()
            .copy(shape.position)
            .multiplyScalar(0.0005);
          userData.velocity.add(rotationEffect);
          
          // Update position
          shape.position.add(userData.velocity);
          
          // Collision detection with cube boundaries
          ['x', 'z'].forEach(axis => {
            if (shape.position[axis] > cubeSize - userData.radius) {
              shape.position[axis] = cubeSize - userData.radius;
              userData.velocity[axis] *= -userData.bounce;
            } else if (shape.position[axis] < -cubeSize + userData.radius) {
              shape.position[axis] = -cubeSize + userData.radius;
              userData.velocity[axis] *= -userData.bounce;
            }
          });
          
          // Ground collision - keep shapes on ground
          if (shape.position.y <= groundLevel + userData.radius) {
            shape.position.y = groundLevel + userData.radius;
            userData.velocity.y = 0;
            userData.velocity.x *= 0.8; // Friction
            userData.velocity.z *= 0.8; // Friction
            
            // Mark as settled if velocity is very low
            if (Math.abs(userData.velocity.x) < 0.001 && Math.abs(userData.velocity.z) < 0.001) {
              userData.settled = true;
              userData.velocity.set(0, 0, 0);
            }
          }
          
          // Apply damping only to unsettled shapes
          if (!userData.settled) {
            userData.velocity.multiplyScalar(damping);
          }
        });
      }
      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      currentMount?.removeEventListener('mouseenter', onMouseEnter);
      currentMount?.removeEventListener('mousemove', onMouseMove);
      currentMount?.removeEventListener('mouseleave', onMouseLeave);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [scriptsLoaded, service.type, service.demoUrl]);

  return (
    <article 
      className={`bg-slate-800/50 border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl relative overflow-hidden group`}
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Solid background overlay that hides on hover */}
      <div className="absolute inset-0 bg-slate-800 transition-opacity duration-500 group-hover:opacity-0 z-0"></div>
      
      <div className="absolute inset-0 z-5" ref={mountRef}>
        {!scriptsLoaded && <div className="text-white text-center pt-20">טוען תצוגה תלת-ממדית...</div>}
      </div>
      
      <div className="relative z-10 flex flex-col h-full p-3 sm:p-4 lg:p-6 rounded-xl pointer-events-none">
          <div className="text-center mb-6">
            {service.badge && (
              <Badge className={`${service.badgeColor} text-white mb-4 shadow-lg`}>
                <Star className="w-3 h-3 inline-block ml-1" />
                {service.badge}
              </Badge>
            )}
            <h3 id={`service-title-${service.id}`} className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{service.title}</h3>
            <p className="text-xs sm:text-sm text-slate-400">{service.category}</p>
          </div>
          
          <div className="flex-grow min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]"></div>

          <div className="text-center my-4">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{service.price}</span>
            <span className="text-slate-400 block text-xs sm:text-sm">{service.priceType}</span>
          </div>
          
          <Button 
            className={`w-full mt-4 py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base bg-gradient-to-r ${service.gradient} text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 pointer-events-auto`}
            onClick={() => {
              const phoneNumber = '972525347274'; 
              const message = `שלום, אני מתעניין/ת בחבילה: "${service.title}"`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            aria-label={`הזמנת השירות: ${service.title}`}
          >
            אני רוצה את החבילה הזו
          </Button>
      </div>
    </article>
  );
};
const ServicesPage = () => {
  const services = [
    {
      id: 1,
      type: 'iframe',
      demoUrl: 'https://shaharfullstack.github.io/SPI/',
      title: "דף נחיתה ממיר",
      category: "התחלה מהירה",
      badge: "מחיר השקה",
      badgeColor: "bg-emerald-500",
      price: "1,200₪",
      priceType: "מחיר השקה חד-פעמי",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      type: 'iframe',
      demoUrl: 'https://sfez-nadlan.web.app/',
      title: "אתר תדמית מקצועי",
      category: "הנוכחות הדיגיטלית שלך",
      badge: "החבילה המומלצת",
      badgeColor: "bg-blue-500",
      price: "3,000₪",
      priceType: "מחיר השקה חד-פעמי",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      type: 'abstract',
      title: "חבילת שקט נפשי",
      category: "אחסון, תחזוקה וביטחון",
      badge: "שירות חיוני",
      badgeColor: "bg-orange-500",
      price: "250₪",
      priceType: "לחודש (ללא התחייבות)",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <PageBackground showVideo={false}>
      <AccessibilityMenu />
      <Header />
      
      <div className="relative z-10">

        
        <section className="pt-16 mb-3 rounded-sm backdrop-blur-sm bg-black/70 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="bg-blue-500/10 text-blue-300 border border-blue-500/30 mb-4">השירותים שלנו</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
              הופכים רעיונות לנוכחות דיגיטלית <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent">שמביאה תוצאות</span>
            </h1>
            <p className="text-base  sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              בין אם אתם צריכים כרטיס ביקור דיגיטלי מרשים או אתר תדמית מלא, יש לנו את הפתרון המדויק עבורכם. אנחנו בונים אתרים מהירים, מאובטחים ומעוצבים אישית כדי שהעסק שלכם יבלוט.
            </p>
          </div>
        </section>

        <main id="main-content" className="pb-12 sm:pb-16 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {services.map((service) => (
                <ServiceCard3D key={service.id} service={service} />
              ))}
            </div>
          </div>
        </main>

        <section className="py-12 sm:py-16 lg:py-20 bg-slate-900/70">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                לא עוד אתר תבניתי. נכס דיגיטלי אמיתי.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-4">
                ההבדל בין אתר שנבנה על תבנית לאתר שנבנה מאפס הוא ההבדל בין רכב שכור לרכב יוקרה שיוצר במיוחד בשבילך. הנה מה אתם מקבלים איתנו:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="text-center p-4 sm:p-6">
                <div className="inline-block p-3 sm:p-4 bg-yellow-500/10 rounded-xl mb-4 border border-yellow-500/20">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">מהירות מסחררת</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  אתרים מהירים יותר משפרים את חווית המשתמש, מורידים אחוזי נטישה ומקבלים עדיפות בגוגל.
                </p>
              </div>
              
              <div className="text-center p-4 sm:p-6">
                <div className="inline-block p-3 sm:p-4 bg-blue-500/10 rounded-xl mb-4 border border-blue-500/20">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">אבטחה והתאמה אישית</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  בנייה מאפס מקטינה את הסיכון לפריצות ומאפשרת לנו גמישות עיצובית מלאה ללא מגבלות.
                </p>
              </div>
              
              <div className="text-center p-4 sm:p-6">
                <div className="inline-block p-3 sm:p-4 bg-green-500/10 rounded-xl mb-4 border border-green-500/20">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">ליווי אישי ובגובה העיניים</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  אנחנו כאן כדי להקשיב, לייעץ ולהוביל אתכם לתוצאה הטובה ביותר עבור העסק שלכם.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              מוכנים להתחיל את המסע הדיגיטלי שלכם?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              השאירו את הפרטים הטכניים לנו. בואו נדבר על איך נוכל לעזור לעסק שלכם לצמוח.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.me/+972525347274?text=שלום, אני אשמח להתחיל את המסע הדיגיטלי איתכם', '_blank')}
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              דברו איתי בווצאפ
            </Button>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </PageBackground>
  );
};

export default ServicesPage;