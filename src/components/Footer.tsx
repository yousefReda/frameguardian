
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FooterLinkProps {
  href: string;
  label: string;
  className?: string;
}

const FooterLink = ({ href, label, className }: FooterLinkProps) => (
  <a 
    href={href} 
    className={cn(
      "text-gray-500 hover:text-blue-600 transition-colors",
      className
    )}
  >
    {label}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="page-container">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-xl text-gradient">FrameGuardian</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Advanced video analysis for abnormal event detection powered by OpenCV and YOLOv8.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#" label="Security & Surveillance" /></li>
              <li><FooterLink href="#" label="Traffic Monitoring" /></li>
              <li><FooterLink href="#" label="Fire Safety" /></li>
              <li><FooterLink href="#" label="Industrial Safety" /></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#" label="Documentation" /></li>
              <li><FooterLink href="#" label="API Reference" /></li>
              <li><FooterLink href="#" label="Case Studies" /></li>
              <li><FooterLink href="#" label="Training Guides" /></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#" label="About Us" /></li>
              <li><FooterLink href="#" label="Careers" /></li>
              <li><FooterLink href="#" label="Contact" /></li>
              <li><FooterLink href="#" label="Privacy Policy" /></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} FrameGuardian. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <FooterLink href="#" label="Terms" className="text-sm" />
            <FooterLink href="#" label="Privacy" className="text-sm" />
            <FooterLink href="#" label="Cookies" className="text-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
