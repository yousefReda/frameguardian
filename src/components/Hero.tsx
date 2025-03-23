
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="page-container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 md:pr-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold tracking-wider">
              Advanced Video Analytics
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Intelligent <span className="text-gradient">Video Analysis</span> for Abnormal Event Detection
            </h1>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Leverage the power of OpenCV and YOLOv8 to transform your security and safety monitoring. Our AI-powered system analyzes video frames to detect safety threats and abnormal activities in real-time.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 group">
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div ref={videoRef} className="relative opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="aspect-video glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/40">
            <div className="p-1 h-full w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg">
              <div className="h-6 flex items-center px-3 bg-gray-800 rounded-t-lg">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-4 h-[calc(100%-1.5rem)] flex items-center justify-center bg-black rounded-b-lg">
                <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full">
                  <div className="relative bg-gray-900 rounded overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-500 text-xs">Traffic Camera 01</div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-sm bg-red-500 text-white text-xs font-medium animate-pulse">LIVE</div>
                  </div>
                  <div className="relative bg-gray-900 rounded overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-500 text-xs">Security Gate 02</div>
                    </div>
                  </div>
                  <div className="relative bg-gray-900 rounded overflow-hidden">
                    <div className="absolute bottom-2 left-2 w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="relative bg-gray-900 rounded overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-yellow-400 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-sm bg-yellow-500 text-white text-xs font-medium">ALERT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white rounded-lg shadow-lg border border-gray-100">
            <p className="text-sm font-medium text-gray-800">
              Abnormal activity detected in Sector 4
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
