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
			<article className="border-4 border-newspaper-border bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
				{/* Badge de destaque */}
				<div className="bg-headline-red text-white px-3 py-1 inline-block text-sm font-bold mb-4 flex items-center gap-2">
					<AlertCircle size={16} />
					PROJETO EM DESTAQUE
				</div>

				{/* Título principal estilo manchete */}
				<h2 className="text-4xl md:text-5xl font-headline font-black uppercase leading-tight mb-4">
					{project.name.replace(/-/g, " ")}
				</h2>

				{/* Subtítulo */}
				<p className="text-xl font-newspaper italic text-gray-700 mb-4 border-l-4 border-headline-red pl-4">
					{project.description}
				</p>

				{/* Metadados */}
				<div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
					<span className="bg-gray-100 px-2 py-1 border flex items-center gap-1">
						<Calendar size={14} />
						{formatDate(project.updated_at)}
					</span>
					{project.language && (
						<span
							className={`px-2 py-1 text-white text-xs font-bold ${getLanguageColor(
								project.language
							)} flex items-center gap-1`}
						>
							<FaCode size={12} />
							{project.language}
						</span>
					)}
					<span className="bg-gray-100 px-2 py-1 border flex items-center gap-1">
						<Star size={14} />
						{project.stargazers_count} estrelas
					</span>
				</div>

				{/* Botões de ação */}
				<div className="flex gap-3">
					<a
						href={project.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-newspaper-border text-white px-6 py-2 font-bold uppercase text-sm hover:bg-gray-700 transition-colors flex items-center gap-2"
					>
						<Github size={16} />
						Ver Código
					</a>
					{project.homepage && (
						<a
							href={project.homepage}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-headline-red text-white px-6 py-2 font-bold uppercase text-sm hover:bg-red-700 transition-colors flex items-center gap-2"
						>
							<ExternalLink size={16} />
							Ver Demo
						</a>
					)}
				</div>
			</article>
		);
	}

	// Versão compacta para lista de projetos
	return (
		<article className="border-2 border-gray-300 bg-white p-4 hover:border-newspaper-border transition-colors">
			<div className="flex justify-between items-start mb-2">
				<h3 className="text-lg font-headline font-bold uppercase">
					{project.name.replace(/-/g, " ")}
				</h3>
				{project.language && (
					<span
						className={`px-2 py-1 text-white text-xs font-bold ${getLanguageColor(
							project.language
						)} flex items-center gap-1`}
					>
						<FaCode size={10} />
						{project.language}
					</span>
				)}
			</div>

			<p className="text-sm text-gray-600 mb-3 font-newspaper">
				{project.description}
			</p>

			<div className="flex justify-between items-center text-xs text-gray-500">
				<span className="flex items-center gap-1">
					<Calendar size={12} />
					{formatDate(project.updated_at)}
				</span>
				<span className="flex items-center gap-1">
					<Star size={12} />
					{project.stargazers_count}
				</span>
			</div>

			<div className="mt-3 flex gap-2">
				<a
					href={project.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-xs bg-gray-800 text-white px-3 py-1 font-bold hover:bg-gray-700 flex items-center gap-1"
				>
					<Github size={12} />
					CÓDIGO
				</a>
				{project.homepage && (
					<a
						href={project.homepage}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs bg-headline-red text-white px-3 py-1 font-bold hover:bg-red-700 flex items-center gap-1"
					>
						<ExternalLink size={12} />
						DEMO
					</a>
				)}
			</div>
		</article>
	);
}
