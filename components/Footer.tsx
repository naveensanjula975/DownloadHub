import Image from "next/image";
import { BookOpen, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Logo"
                width={120}
                height={25}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your trusted file download center. Secure, fast, and reliable file sharing.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://nextjs.org/learn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://nextjs.org/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <a
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="w-4 h-4" />
                Learn More
              </a>
              <a
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 File Download Center. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
              Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
