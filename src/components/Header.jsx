import { FaLaptop, FaRocket, FaChartBar, FaEnvelope } from "react-icons/fa";
import { Code2, Calendar } from "lucide-react";

export default function Header() {
	const currentDate = new Date().toLocaleDateString("pt-BR", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<header className="bg-newspaper-bg border-b-4 border-newspaper-border p-4 sm:p-6">
			{/* Data do jornal */}
			<div className="text-center text-xs sm:text-sm text-gray-600 mb-2 font-newspaper flex items-center justify-center gap-1 sm:gap-2">
				<Calendar size={14} className="sm:w-4 sm:h-4" />
				<span className="hidden sm:inline">
					{currentDate.toUpperCase()}
				</span>
				<span className="sm:hidden">
					{new Date().toLocaleDateString("pt-BR", {
						day: "2-digit",
						month: "2-digit",
					})}
				</span>
			</div>

			{/* Nome do Jornal */}
			<div className="text-center">
				<h1 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black uppercase tracking-tight leading-none">
					<span className="block">THE</span>
					<span className="block text-headline-red flex items-center justify-center gap-2 sm:gap-4">
						<Code2
							size={40}
							className="sm:w-16 sm:h-16 md:w-20 md:h-20 inline"
						/>
						<span>CODING</span>
					</span>
					<span className="block">JOURNAL</span>
				</h1>
				<div className="mt-2 text-sm sm:text-lg font-newspaper italic text-gray-700 px-2">
					"Todas as notícias do mundo da programação"
				</div>
			</div>

			{/* Linha decorativa */}
			<div className="mt-4 border-t-2 border-b-2 border-newspaper-border py-2">
				<div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm font-bold uppercase tracking-wide">
					<span className="flex items-center gap-1 sm:gap-2">
						<FaLaptop size={14} className="sm:w-4 sm:h-4" />
						<span className="hidden sm:inline">PROJETOS</span>
						<span className="sm:hidden">PROJ.</span>
					</span>
					<span className="flex items-center gap-1 sm:gap-2">
						<FaRocket size={14} className="sm:w-4 sm:h-4" />
						<span className="hidden sm:inline">TECNOLOGIAS</span>
						<span className="sm:hidden">TECH</span>
					</span>
					<span className="flex items-center gap-1 sm:gap-2">
						<FaChartBar size={14} className="sm:w-4 sm:h-4" />
						<span className="hidden sm:inline">PORTFÓLIO</span>
						<span className="sm:hidden">PORT.</span>
					</span>
					<span className="flex items-center gap-1 sm:gap-2">
						<FaEnvelope size={14} className="sm:w-4 sm:h-4" />
						<span className="hidden sm:inline">CONTATO</span>
						<span className="sm:hidden">CONT.</span>
					</span>
				</div>
			</div>
		</header>
	);
}
