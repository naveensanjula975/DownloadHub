"use client";

import Image from "next/image";
import { Download, FileText, Archive, Settings, BookOpen } from "lucide-react";

// File type configurations with icons and colors
const fileTypeConfig = {
  pdf: { icon: FileText, color: "text-red-500", bgColor: "bg-red-50" },
  txt: { icon: FileText, color: "text-blue-500", bgColor: "bg-blue-50" },
  json: { icon: Settings, color: "text-green-500", bgColor: "bg-green-50" },
  md: { icon: BookOpen, color: "text-purple-500", bgColor: "bg-purple-50" },
  zip: { icon: Archive, color: "text-orange-500", bgColor: "bg-orange-50" },
  default: { icon: FileText, color: "text-gray-500", bgColor: "bg-gray-50" }
};

// Available files for download
const downloadableFiles = [
  {
    name: "Sample Document",
    filename: "sample-document.pdf",
    type: "pdf",
    size: "2.4 MB",
    description: "Complete documentation and user manual"
  },
  {
    name: "Configuration File",
    filename: "config.json",
    type: "json",
    size: "1.2 KB",
    description: "Application configuration settings"
  },
  {
    name: "Data Export",
    filename: "data.txt",
    type: "txt",
    size: "834 bytes",
    description: "Sample data export file"
  },
  {
    name: "User Guide",
    filename: "user-guide.md",
    type: "md",
    size: "5.7 KB",
    description: "Step-by-step user guide in Markdown format"
  }
];

function DownloadCard({ file }: { file: typeof downloadableFiles[0] }) {
  const config = fileTypeConfig[file.type as keyof typeof fileTypeConfig] || fileTypeConfig.default;
  const IconComponent = config.icon;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/downloads/${file.filename}`;
    link.download = file.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${config.bgColor} dark:bg-gray-700`}>
          <IconComponent className={`w-6 h-6 ${config.color} dark:text-gray-300`} />
        </div>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
          {file.size}
        </span>
      </div>
      
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {file.name}
      </h3>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {file.description}
      </p>
      
      <button
        onClick={handleDownload}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        aria-label={`Download ${file.name}`}
      >
        <Download className="w-4 h-4" />
        Download
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="relative overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              File Download Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access and download essential files, documentation, and resources. 
              Everything you need in one convenient location.
            </p>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/5 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/5 rounded-full"></div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Downloads section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Available Downloads
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose from our collection of files below. Each download is ready to use and 
              comes with detailed information about file size and content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {downloadableFiles.map((file, index) => (
              <DownloadCard key={index} file={file} />
            ))}
          </div>
        </section>

        {/* Stats section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {downloadableFiles.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Files Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Secure Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400">Access Available</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center text-sm text-gray-600 dark:text-gray-400">
            <a
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="w-4 h-4" />
              Learn More
            </a>
            <a
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="https://vercel.com/templates?framework=next.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Examples
            </a>
            <a
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Next.js →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
