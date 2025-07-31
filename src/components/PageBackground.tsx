import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Interface defining the props for the PageBackground component
interface PageBackgroundProps {
  children: React.ReactNode; // Content to be displayed over the background
  showVideo?: boolean; // Optional prop to control video background display
}

/**
 * A React component that provides an interactive three.js background using vanilla Three.js.
 * Avoids react-three-fiber to prevent reconciler issues.
 */
const PageBackground: React.FC<PageBackgroundProps> = ({ children, showVideo = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    particles?: Array<{ position: THREE.Vector3; velocity: THREE.Vector3 }>;
    points?: THREE.Points;
    lines?: THREE.LineSegments;
    animationId?: number;
  }>({});

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

      renderer.setSize(width, height);
      renderer.setClearColor(0x0f172a, 1);
      camera.position.z = 30;

      mount.appendChild(renderer.domElement);

      // Create particles
      const particleCount = 60;
      const particles: Array<{ position: THREE.Vector3; velocity: THREE.Vector3 }> = [];
      const positions = new Float32Array(particleCount * 2);

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 300;
        const z = (Math.random() - 0.5) * 10;

        particles.push({
          position: new THREE.Vector3(x, y, z),
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            0
          )
        });

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }

      // Create points
      const pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const pointsMaterial = new THREE.PointsMaterial({
        color: 0x2dd4bf,
        size: 0.2,
        sizeAttenuation: true
      });
      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      scene.add(points);

      // Create lines
      const linesGeometry = new THREE.BufferGeometry();
      const linesMaterial = new THREE.LineBasicMaterial({
        color: 0x0891b2,
        transparent: true,
        opacity: 0.9
      });
      const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
      scene.add(lines);

      // Mouse tracking
      const mouse = new THREE.Vector2();
      const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / width) * 2 - 1;
        mouse.y = -(event.clientY / height) * 2 + 1;
      };
      window.addEventListener('mousemove', handleMouseMove);

      // Animation loop
      const animate = () => {
        const animationId = requestAnimationFrame(animate);
        sceneRef.current.animationId = animationId;

        // Update particles
        const linePositions: number[] = [];
        const mouseWorld = new THREE.Vector3(
          mouse.x * 25,
          mouse.y * 15,
          0
        );

        particles.forEach((particle, i) => {
          // Update position
          particle.position.add(particle.velocity);

          // Boundary checks
          if (particle.position.x < -25) particle.position.x = 25;
          if (particle.position.x > 25) particle.position.x = -25;
          if (particle.position.y < -15) particle.position.y = 15;
          if (particle.position.y > 15) particle.position.y = -15;

          // Update geometry
          positions[i * 3] = particle.position.x;
          positions[i * 3 + 1] = particle.position.y;
          positions[i * 3 + 2] = particle.position.z;

          // Connect to mouse
          const distToMouse = particle.position.distanceTo(mouseWorld);
          if (distToMouse < 10) {
            linePositions.push(
              particle.position.x, particle.position.y, particle.position.z,
              mouseWorld.x, mouseWorld.y, mouseWorld.z
            );
          }

          // Connect particles
          for (let j = i + 1; j < particles.length; j++) {
            const distance = particle.position.distanceTo(particles[j].position);
            if (distance < 8) {
              linePositions.push(
                particle.position.x, particle.position.y, particle.position.z,
                particles[j].position.x, particles[j].position.y, particles[j].position.z
              );
            }
          }
        });

        // Update geometries
        pointsGeometry.attributes.position.needsUpdate = true;
        linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

        renderer.render(scene, camera);
      };

      animate();

      // Store references
      sceneRef.current = {
        scene,
        camera,
        renderer,
        particles,
        points,
        lines
      };

      // Handle resize
      const handleResize = () => {
        const newWidth = mount.clientWidth;
        const newHeight = mount.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId);
        }
        if (sceneRef.current.renderer) {
          mount.removeChild(sceneRef.current.renderer.domElement);
          sceneRef.current.renderer.dispose();
        }
        if (sceneRef.current.scene) {
          sceneRef.current.scene.clear();
        }
      };
    } catch (error) {
      console.error('Three.js initialization failed:', error);
      // Fallback to gradient background
    }
  }, []);

  return (
    <div className="min-h-screen text-white bg-slate-950 relative" dir="rtl">
      {/* Three.js canvas container */}
      <div
        ref={mountRef}
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      
      {/* Fallback gradient background */}
      <div 
        className="fixed inset-0 w-full h-full -z-10"
        style={{
          background: 'linear-gradient(45deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          opacity: 0.8
        }}
      />
      
      {/* Optional video background */}
      {showVideo && (
        <video 
          className="fixed inset-0 w-full h-full object-cover -z-20 brightness-[0.3]" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/assets/videos/background.mp4" type="video/mp4" />
        </video>
      )}

      {/* The main content is placed here, above the background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;