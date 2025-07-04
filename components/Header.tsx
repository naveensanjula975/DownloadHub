"use client";

import Image from "next/image";
import { Moon, Sun, Monitor } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onThemeCycle?: () => void;
  theme?: 'light' | 'dark' | 'system';
  isDark?: boolean;
}

export default function Header({ onThemeCycle, theme = 'system', isDark }: HeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'dark':
        return <Moon className="w-5 h-5 text-blue-400" />;
      case 'system':
      default:
        return <Monitor className="w-5 h-5 text-gray-500 dark:text-gray-400" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light mode';
      case 'dark':
        return 'Dark mode';
      case 'system':
      default:
        return 'System theme';
    }
  };

  return (
    <header className="relative overflow-hidden bg-surface border-b border-custom shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center relative z-10">
          {/* Single Theme Toggle */}
          <div className="absolute top-0 right-0">
            {mounted && (
              <button
                onClick={onThemeCycle}
                className="p-2 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-custom transition-all duration-200 focus-ring group"
                aria-label={getThemeLabel()}
                title={`Current: ${getThemeLabel()} - Click to cycle themes`}
              >
                <div className="transition-transform duration-200 group-hover:scale-110">
                  {getThemeIcon()}
                </div>
              </button>
            )}
          </div>

          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative group">
              <Image
                className="drop-shadow-lg dark:hidden transition-transform duration-300 group-hover:scale-105"
                src="/logo.svg"
                alt="DownloadHub logo"
                width={200}
                height={42}
                priority
              />
              <Image
                className="drop-shadow-lg hidden dark:block transition-transform duration-300 group-hover:scale-105"
                src="/logo-dark.svg"
                alt="DownloadHub logo"
                width={200}
                height={42}
                priority
              />
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6 animate-slide-up">
            DownloadHub
          </h1>
          
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
            Your secure file center for downloading essential documents, resources, and files. 
            Everything you need in one convenient, trusted location.
          </p>

          {/* Enhanced Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-light text-success border border-green-200 dark:border-green-800">
              🔒 Secure Downloads
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
              ⚡ Fast Access
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800">
              📱 Mobile Ready
            </span>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-float blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-float-delayed blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full animate-pulse blur-3xl"></div>
      </div>
    </header>
  );
}
