"use client";

import { useState, useMemo } from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import DownloadCard from "../components/DownloadCard";
import Footer from "../components/Footer";
import { useTheme } from "../hooks/useTheme";
import { FileItem } from "../types";

// Enhanced downloadable files with more metadata
const downloadableFiles: FileItem[] = [
	{
		name: "Sample Document",
		filename: "sample-document.pdf",
		type: "pdf",
		size: "2.4 MB",
		description:
			"Complete documentation and user manual with detailed instructions and examples",
		uploadDate: "2025-07-01",
	},
	{
		name: "Configuration File",
		filename: "config.json",
		type: "json",
		size: "1.2 KB",
		description:
			"Application configuration settings and environment variables",
		uploadDate: "2025-07-02",
	},
	{
		name: "Data Export",
		filename: "data.txt",
		type: "txt",
		size: "834 bytes",
		description:
			"Sample data export file containing structured information",
		uploadDate: "2025-06-30",
	},
	{
		name: "User Guide",
		filename: "user-guide.md",
		type: "md",
		size: "5.7 KB",
		description:
			"Step-by-step user guide in Markdown format with screenshots",
		uploadDate: "2025-07-01",
	},
];

export default function Home() {
	const { isDark, toggleTheme } = useTheme();
	const [searchQuery, setSearchQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState("all");

	// Get unique file types for filter buttons
	const fileTypes = useMemo(() => {
		return Array.from(
			new Set(downloadableFiles.map((file) => file.type))
		);
	}, []);

	// Filter files based on search and filter criteria
	const filteredFiles = useMemo(() => {
		return downloadableFiles.filter((file) => {
			const matchesSearch =
				file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				file.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				file.type.toLowerCase().includes(searchQuery.toLowerCase());

			const matchesFilter =
				activeFilter === "all" || file.type === activeFilter;

			return matchesSearch && matchesFilter;
		});
	}, [searchQuery, activeFilter]);

	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	const handleFilter = (type: string) => {
		setActiveFilter(type);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			<Header onThemeToggle={toggleTheme} isDark={isDark} />

			{/* Main content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Search and Filter */}
				<SearchFilter
					onSearch={handleSearch}
					onFilter={handleFilter}
					activeFilter={activeFilter}
					fileTypes={fileTypes}
				/>

				{/* Downloads section */}
				<section>
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							Available Downloads
							{filteredFiles.length !== downloadableFiles.length && (
								<span className="text-lg font-normal text-gray-500 dark:text-gray-400 ml-2">
									(
									{filteredFiles.length} of{" "}
									{downloadableFiles.length})
								</span>
							)}
						</h2>
						<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							{searchQuery || activeFilter !== "all"
								? `Showing filtered results. ${filteredFiles.length} files match your criteria.`
								: "Choose from our collection of files below. Each download is ready to use and comes with detailed information about file size and content."}
						</p>
					</div>

					{filteredFiles.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
							{filteredFiles.map((file, index) => (
								<DownloadCard key={file.filename} file={file} index={index} />
							))}
						</div>
					) : (
						<div className="text-center py-12">
							<div className="text-6xl mb-4">🔍</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								No files found
							</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-4">
								Try adjusting your search criteria or filter settings.
							</p>
							<button
								onClick={() => {
									setSearchQuery("");
									setActiveFilter("all");
								}}
								className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
							>
								Clear Filters
							</button>
						</div>
					)}
				</section>

				{/* Enhanced Stats section */}
				<section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-12 shadow-lg">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
						<div className="group">
							<div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
								{downloadableFiles.length}
							</div>
							<div className="text-gray-600 dark:text-gray-400 text-sm">
								Total Files
							</div>
						</div>
						<div className="group">
							<div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
								100%
							</div>
							<div className="text-gray-600 dark:text-gray-400 text-sm">
								Secure Downloads
							</div>
						</div>
						<div className="group">
							<div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
								24/7
							</div>
							<div className="text-gray-600 dark:text-gray-400 text-sm">
								Available
							</div>
						</div>
						<div className="group">
							<div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
								Fast
							</div>
							<div className="text-gray-600 dark:text-gray-400 text-sm">
								Download Speed
							</div>
						</div>
					</div>
				</section>

				{/* Features section */}
				<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow duration-200">
						<div className="text-4xl mb-4">🔒</div>
						<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
							Secure Downloads
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							All files are scanned and verified for security before being made
							available.
						</p>
					</div>
					<div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow duration-200">
						<div className="text-4xl mb-4">⚡</div>
						<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
							Fast Downloads
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							Optimized servers ensure quick download speeds for all file types.
						</p>
					</div>
					<div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow duration-200">
						<div className="text-4xl mb-4">📱</div>
						<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
							Mobile Friendly
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							Download files on any device with our responsive design.
						</p>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
