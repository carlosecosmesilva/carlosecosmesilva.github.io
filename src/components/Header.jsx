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
		<header className="bg-newspaper-bg border-b-4 border-newspaper-border p-6">
			{/* Data do jornal */}
			<div className="text-center text-sm text-gray-600 mb-2 font-newspaper flex items-center justify-center gap-2">
				<Calendar size={16} />
				{currentDate.toUpperCase()}
			</div>

			{/* Nome do Jornal */}
			<div className="text-center">
				<h1 className="text-6xl md:text-8xl font-headline font-black uppercase tracking-tight">
					<span className="block">THE</span>
					<span className="block text-headline-red flex items-center justify-center gap-4">
						<Code2 size={80} className="inline" />
						CODING
					</span>
					<span className="block">JOURNAL</span>
				</h1>
				<div className="mt-2 text-lg font-newspaper italic text-gray-700">
					"Todas as notícias do mundo da programação"
				</div>
			</div>

			{/* Linha decorativa */}
			<div className="mt-4 border-t-2 border-b-2 border-newspaper-border py-2">
				<div className="flex justify-center items-center space-x-8 text-sm font-bold uppercase tracking-wide">
					<span className="flex items-center gap-2">
						<FaLaptop size={18} />
						PROJETOS
					</span>
					<span className="flex items-center gap-2">
						<FaRocket size={18} />
						TECNOLOGIAS
					</span>
					<span className="flex items-center gap-2">
						<FaChartBar size={18} />
						PORTFÓLIO
					</span>
					<span className="flex items-center gap-2">
						<FaEnvelope size={18} />
						CONTATO
					</span>
				</div>
			</div>
		</header>
	);
}
