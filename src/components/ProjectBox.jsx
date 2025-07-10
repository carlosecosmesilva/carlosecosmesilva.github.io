import { FaGithub, FaStar, FaCode } from "react-icons/fa";
import {
	AlertCircle,
	Calendar,
	Star,
	ExternalLink,
	Github,
} from "lucide-react";

export default function ProjectBox({ project, isHeadline = false }) {
	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});
	};

	const getLanguageColor = (language) => {
		const colors = {
			JavaScript: "bg-yellow-400",
			TypeScript: "bg-blue-500",
			React: "bg-cyan-400",
			Python: "bg-green-500",
			Java: "bg-orange-500",
			"C#": "bg-purple-500",
			HTML: "bg-orange-400",
			CSS: "bg-blue-400",
		};
		return colors[language] || "bg-gray-400";
	};

	if (isHeadline) {
		return (
			<article className="border-4 border-newspaper-border bg-white p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
				{/* Badge de destaque */}
				<div className="bg-headline-red text-white px-2 sm:px-3 py-1 inline-block text-xs sm:text-sm font-bold mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2">
					<AlertCircle size={14} className="sm:w-4 sm:h-4" />
					<span className="hidden sm:inline">
						PROJETO EM DESTAQUE
					</span>
					<span className="sm:hidden">DESTAQUE</span>
				</div>

				{/* Título principal estilo manchete */}
				<h2 className="text-2xl sm:text-4xl md:text-5xl font-headline font-black uppercase leading-tight mb-3 sm:mb-4 break-words hyphens-auto">
					{project.name.replace(/-/g, " ")}
				</h2>

				{/* Subtítulo */}
				<p className="text-sm sm:text-xl font-newspaper italic text-gray-700 mb-3 sm:mb-4 border-l-4 border-headline-red pl-3 sm:pl-4">
					{project.description}
				</p>

				{/* Metadados */}
				<div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
					<span className="bg-gray-100 px-2 py-1 border flex items-center gap-1">
						<Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
						<span className="hidden sm:inline">
							{formatDate(project.updated_at)}
						</span>
						<span className="sm:hidden">
							{formatDate(project.updated_at)
								.split("/")
								.slice(0, 2)
								.join("/")}
						</span>
					</span>
					{project.language && (
						<span
							className={`px-2 py-1 text-white text-xs font-bold ${getLanguageColor(
								project.language
							)} flex items-center gap-1`}
						>
							<FaCode size={10} className="sm:w-3 sm:h-3" />
							{project.language}
						</span>
					)}
					<span className="bg-gray-100 px-2 py-1 border flex items-center gap-1">
						<Star size={12} className="sm:w-3.5 sm:h-3.5" />
						<span className="hidden sm:inline">
							{project.stargazers_count} estrelas
						</span>
						<span className="sm:hidden">
							{project.stargazers_count}★
						</span>
					</span>
				</div>

				{/* Botões de ação */}
				<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
					{/* ...existing code... */}
					<a
						href={project.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-newspaper-border text-white px-4 sm:px-6 py-2 font-bold uppercase text-xs sm:text-sm hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-none"
					>
						<Github size={14} className="sm:w-4 sm:h-4" />
						<span className="hidden sm:inline">Ver Código</span>
						<span className="sm:hidden">Código</span>
					</a>
					{project.homepage && (
						<a
							href={project.homepage}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-headline-red text-white px-4 sm:px-6 py-2 font-bold uppercase text-xs sm:text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-none"
						>
							<ExternalLink size={14} className="sm:w-4 sm:h-4" />
							<span className="hidden sm:inline">Ver Demo</span>
							<span className="sm:hidden">Demo</span>
						</a>
					)}
				</div>
			</article>
		);
	}

	// Versão compacta para lista de projetos
	return (
		<article className="border-2 border-gray-300 bg-white p-3 sm:p-4 hover:border-newspaper-border transition-colors overflow-hidden">
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
				<h3 className="text-base sm:text-lg font-headline font-bold uppercase leading-tight break-words hyphens-auto">
					{project.name.replace(/-/g, " ")}
				</h3>
				{project.language && (
					<span
						className={`px-2 py-1 text-white text-xs font-bold ${getLanguageColor(
							project.language
						)} flex items-center gap-1 self-start flex-shrink-0`}
					>
						<FaCode size={8} className="sm:w-2.5 sm:h-2.5" />
						{project.language}
					</span>
				)}
			</div>

			<p className="text-xs sm:text-sm text-gray-600 mb-3 font-newspaper line-clamp-2 break-words">
				{project.description}
			</p>

			<div className="flex justify-between items-center text-xs text-gray-500 mb-3">
				<span className="flex items-center gap-1">
					<Calendar size={10} className="sm:w-3 sm:h-3" />
					<span className="hidden sm:inline">
						{formatDate(project.updated_at)}
					</span>
					<span className="sm:hidden">
						{formatDate(project.updated_at)
							.split("/")
							.slice(0, 2)
							.join("/")}
					</span>
				</span>
				<span className="flex items-center gap-1">
					<Star size={10} className="sm:w-3 sm:h-3" />
					{project.stargazers_count}
				</span>
			</div>

			<div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
				{/* ...existing code... */}
				<a
					href={project.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-xs bg-gray-800 text-white px-2 sm:px-3 py-1 font-bold hover:bg-gray-700 flex items-center justify-center gap-1 flex-1 sm:flex-none"
				>
					<Github size={10} className="sm:w-3 sm:h-3" />
					CÓDIGO
				</a>
				{project.homepage && (
					<a
						href={project.homepage}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs bg-headline-red text-white px-2 sm:px-3 py-1 font-bold hover:bg-red-700 flex items-center justify-center gap-1 flex-1 sm:flex-none"
					>
						<ExternalLink size={10} className="sm:w-3 sm:h-3" />
						DEMO
					</a>
				)}
			</div>
		</article>
	);
}
