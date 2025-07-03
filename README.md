# 🚀 DownloadHub

A modern, responsive file download center built with Next.js 15, TypeScript, and Tailwind CSS.

![DownloadHub Logo](public/logo.svg)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Mode**: System preference detection with manual toggle
- **Smooth Animations**: Custom CSS animations and transitions
- **Gradient Backgrounds**: Beautiful gradient overlays and effects
- **Accessible**: ARIA labels, keyboard navigation, and screen reader support

### 🔍 **Advanced Search & Filter**
- **Real-time Search**: Search files by name, description, or type
- **File Type Filters**: Filter by PDF, JSON, TXT, MD, ZIP, etc.
- **Smart Filtering**: Combine search and filters for precise results
- **Clear Filters**: Easy reset functionality

### 📁 **Enhanced File Management**
- **Dynamic File Detection**: Automatically detects files in `/public/downloads/`
- **File Metadata**: Size, type, description, and upload date
- **Type-specific Icons**: Visual file type identification
- **Download Analytics**: Track download events (console logging)
- **Error Handling**: Graceful handling of download failures

### 🎯 **User Experience**
- **Loading States**: Visual feedback during downloads
- **Download Progress**: Animated loading indicators
- **Retry Functionality**: Easy retry on failed downloads
- **Empty States**: Helpful messages when no files match criteria

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your files**
   - Place downloadable files in `/public/downloads/`
   - Supported formats: PDF, JSON, TXT, MD, ZIP, and more

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
my-app/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage component
├── components/
│   ├── Header.tsx           # Header with theme toggle
│   ├── SearchFilter.tsx     # Search and filter functionality
│   ├── DownloadCard.tsx     # Individual file card component
│   └── Footer.tsx           # Footer component
├── hooks/
│   └── useTheme.ts          # Theme management hook
├── types/
│   └── index.ts             # TypeScript type definitions
├── public/
│   └── downloads/           # Your downloadable files go here
│       ├── sample-document.pdf
│       ├── config.json
│       ├── data.txt
│       └── user-guide.md
└── package.json
```

## 🎨 Customization

### Adding New File Types

1. **Update file type configuration** in `components/DownloadCard.tsx`:
   ```typescript
   const fileTypeConfig = {
     // Add your new file type
     docx: { 
       icon: FileText, 
       color: "text-blue-600", 
       bgColor: "bg-blue-50",
       darkBgColor: "dark:bg-blue-900/20" 
     },
     // ... existing types
   };
   ```

2. **Add files** to `/public/downloads/`

3. **Update file list** in `app/page.tsx`:
   ```typescript
   const downloadableFiles: FileItem[] = [
     {
       name: "New Document",
       filename: "document.docx",
       type: "docx",
       size: "1.5 MB",
       description: "Important document",
       uploadDate: "2025-07-03"
     },
     // ... existing files
   ];
   ```

### Theme Customization

Modify colors in `app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  /* Add your custom CSS variables */
}
```

### Animation Customization

Add custom animations in `app/globals.css`:
```css
@keyframes your-animation {
  from { /* start state */ }
  to { /* end state */ }
}

.animate-your-animation {
  animation: your-animation 1s ease-out;
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for configuration:
```env
NEXT_PUBLIC_APP_NAME="Your App Name"
NEXT_PUBLIC_ANALYTICS_ID="your-analytics-id"
```

### File Upload Limits

Currently supports static files in `/public/downloads/`. For dynamic uploads, consider integrating:
- AWS S3
- Cloudinary
- Firebase Storage

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Vercel](https://vercel.com/) - Deployment platform
