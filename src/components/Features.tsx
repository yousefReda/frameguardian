
import React from 'react';
import { ShieldAlert, Activity, AlertTriangle, Zap, BarChart, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => (
  <div 
    className={cn(
      "glass-panel p-6 rounded-xl hover-lift",
      className
    )}
  >
    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <ShieldAlert size={24} />,
      title: "Security & Surveillance",
      description: "Detect suspicious activities, unauthorized access, and potential security threats in real-time.",
      className: "border-blue-100"
    },
    {
      icon: <Activity size={24} />,
      title: "Traffic Monitoring",
      description: "Analyze traffic patterns, detect accidents, and identify traffic violations automatically.",
      className: "border-blue-200"
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Fire Safety",
      description: "Early detection of smoke, fire, and evacuation bottlenecks to prevent catastrophes.",
      className: "border-blue-100"
    },
    {
      icon: <Zap size={24} />,
      title: "Industrial Safety",
      description: "Monitor workplace safety compliance and detect potential hazards before accidents occur.",
      className: "border-blue-200"
    },
    {
      icon: <BarChart size={24} />,
      title: "Detailed Reports",
      description: "Generate comprehensive analytics and insights based on detected events and patterns.",
      className: "border-blue-100"
    },
    {
      icon: <Settings size={24} />,
      title: "Custom Training",
      description: "Train models for your specific detection needs and environment requirements.",
      className: "border-blue-200"
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="page-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold tracking-wider">
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced Event Detection Technology
          </h2>
          <p className="text-lg text-gray-600">
            Our platform leverages state-of-the-art computer vision and AI to identify abnormal events across various scenarios.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
