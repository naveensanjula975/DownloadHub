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

// Enhanced file type configurations with new color system
const fileTypeConfig = {
  pdf: { 
    icon: FileText, 
    color: "text-red-500 dark:text-red-400", 
    bgColor: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800"
  },
  txt: { 
    icon: File, 
    color: "text-blue-500 dark:text-blue-400", 
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  json: { 
    icon: Settings, 
    color: "text-green-500 dark:text-green-400", 
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800"
  },
  md: { 
    icon: BookOpen, 
    color: "text-purple-500 dark:text-purple-400", 
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800"
  },
  zip: { 
    icon: Archive, 
    color: "text-orange-500 dark:text-orange-400", 
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800"
  },
  default: { 
    icon: FileText, 
    color: "text-foreground-muted", 
    bgColor: "bg-surface-elevated",
    borderColor: "border-custom"
  }
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
      className="group relative bg-surface border border-custom rounded-xl p-6 card-hover focus-ring transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Enhanced gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
      
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${config.bgColor} border ${config.borderColor} transition-all duration-200 group-hover:scale-110`}>
          <IconComponent className={`w-6 h-6 ${config.color}`} />
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs font-medium text-foreground-muted bg-surface-elevated px-2 py-1 rounded-full border border-custom">
            {file.size}
          </span>
          {file.uploadDate && (
            <span className="text-xs text-foreground-muted">
              {file.uploadDate}
            </span>
          )}
        </div>
      </div>
      
      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-lg">
        {file.name}
      </h3>
      
      <p className="text-sm text-foreground-secondary mb-4 line-clamp-2 leading-relaxed">
        {file.description}
      </p>

      {/* Enhanced file type badge */}
      <div className="mb-4">
        <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${config.bgColor} ${config.color} border ${config.borderColor}`}>
          {file.type.toUpperCase()}
        </span>
      </div>
      
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`w-full flex items-center justify-center gap-2 font-medium py-3 px-4 rounded-lg transition-all duration-200 focus-ring ${
          downloadError
            ? "bg-error hover:bg-red-600 text-white border border-red-500"
            : isDownloading
            ? "bg-surface-elevated cursor-not-allowed text-foreground-muted border border-custom"
            : "btn-primary hover:shadow-lg"
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
            <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
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
