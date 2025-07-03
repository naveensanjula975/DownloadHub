"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onThemeToggle?: () => void;
  isDark?: boolean;
}

export default function Header({ onThemeToggle, isDark }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center relative z-10">
          {/* Theme Toggle */}
          <div className="absolute top-0 right-0">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <Image
                className="drop-shadow-lg dark:hidden"
                src="/logo.svg"
                alt="DownloadHub logo"
                width={200}
                height={42}
                priority
              />
              <Image
                className="drop-shadow-lg hidden dark:block"
                src="/logo-dark.svg"
                alt="DownloadHub logo"
                width={200}
                height={42}
                priority
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-slide-up">
            DownloadHub
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
            Your secure file center for downloading essential documents, resources, and files. 
            Everything you need in one convenient, trusted location.
          </p>
        </div>
      </div>
      
      {/* Enhanced decorative background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full animate-pulse"></div>
      </div>
    </header>
  );
}
