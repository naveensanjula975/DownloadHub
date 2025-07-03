import Image from "next/image";
import { Shield, Download, Zap, Users, Mail, HelpCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                className="dark:hidden"
                src="/logo.svg"
                alt="DownloadHub Logo"
                width={120}
                height={25}
              />
              <Image
                className="hidden dark:block"
                src="/logo-dark.svg"
                alt="DownloadHub Logo"
                width={120}
                height={25}
              />
            </div>
            <p className="text-foreground-secondary text-sm">
              Your trusted file download center. Secure, fast, and reliable file sharing for everyone.
            </p>
            <div className="flex items-center gap-1 text-foreground-secondary text-sm">
              Made with <Heart className="w-4 h-4 text-red-500" /> for you
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#downloads"
                  className="flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  <Download className="w-3 h-3" />
                  File Downloads
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  <Shield className="w-3 h-3" />
                  Security Center
                </a>
              </li>
              <li>
                <a
                  href="#premium"
                  className="flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  <Zap className="w-3 h-3" />
                  Premium Access
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#help"
                  className="flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  <HelpCircle className="w-3 h-3" />
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-3 h-3" />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  <Users className="w-3 h-3" />
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground-secondary text-sm">
              © 2025 DownloadHub. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="#status" 
                className="text-success hover:text-green-600 transition-colors flex items-center gap-1"
              >
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                All Systems Operational
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
