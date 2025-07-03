export interface FileItem {
  name: string;
  filename: string;
  type: string;
  size: string;
  description: string;
  uploadDate?: string;
}

export interface FileTypeConfig {
  icon: any;
  color: string;
  bgColor: string;
  darkBgColor?: string;
}

export interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (type: string) => void;
  activeFilter: string;
  fileTypes: string[];
}

export interface DownloadStats {
  totalFiles: number;
  totalDownloads: number;
  securityLevel: string;
  availability: string;
}
