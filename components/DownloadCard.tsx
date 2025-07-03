"use client";

import { Download, FileText, Archive, Settings, BookOpen, File, AlertCircle } from "lucide-react";
import { useState } from "react";

interface FileItem {
  name: string;
  filename: string;
  type: string;
  size: string;
  description: string;
  uploadDate?: string;
}

// Enhanced file type configurations with more icons and colors
const fileTypeConfig = {
  pdf: { icon: FileText, color: "text-red-500", bgColor: "bg-red-50", darkBgColor: "dark:bg-red-900/20" },
  txt: { icon: File, color: "text-blue-500", bgColor: "bg-blue-50", darkBgColor: "dark:bg-blue-900/20" },
  json: { icon: Settings, color: "text-green-500", bgColor: "bg-green-50", darkBgColor: "dark:bg-green-900/20" },
  md: { icon: BookOpen, color: "text-purple-500", bgColor: "bg-purple-50", darkBgColor: "dark:bg-purple-900/20" },
  zip: { icon: Archive, color: "text-orange-500", bgColor: "bg-orange-50", darkBgColor: "dark:bg-orange-900/20" },
  default: { icon: FileText, color: "text-gray-500", bgColor: "bg-gray-50", darkBgColor: "dark:bg-gray-700" }
};

interface DownloadCardProps {
  file: FileItem;
  index: number;
}

export default function DownloadCard({ file, index }: DownloadCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  
  const config = fileTypeConfig[file.type as keyof typeof fileTypeConfig] || fileTypeConfig.default;
  const IconComponent = config.icon;

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadError(false);
    
    try {
      // Simulate download delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const link = document.createElement('a');
      link.href = `/downloads/${file.filename}`;
      link.download = file.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Track download analytics (placeholder)
      console.log(`Downloaded: ${file.filename}`);
    } catch (error) {
      setDownloadError(true);
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
      
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${config.bgColor} ${config.darkBgColor} transition-transform duration-200 group-hover:scale-110`}>
          <IconComponent className={`w-6 h-6 ${config.color} dark:text-gray-300`} />
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {file.size}
          </span>
          {file.uploadDate && (
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {file.uploadDate}
            </span>
          )}
        </div>
      </div>
      
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-lg">
        {file.name}
      </h3>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
        {file.description}
      </p>

      {/* File type badge */}
      <div className="mb-4">
        <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${config.bgColor} ${config.color} ${config.darkBgColor}`}>
          {file.type.toUpperCase()}
        </span>
      </div>
      
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`w-full flex items-center justify-center gap-2 font-medium py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
          downloadError
            ? "bg-red-600 hover:bg-red-700 text-white"
            : isDownloading
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
        }`}
        aria-label={`Download ${file.name}`}
      >
        {downloadError ? (
          <>
            <AlertCircle className="w-4 h-4" />
            Retry Download
          </>
        ) : isDownloading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Downloading...
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            Download
          </>
        )}
      </button>
    </div>
  );
}
