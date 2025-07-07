import {
	FaNewspaper,
	FaBook,
	FaPhone,
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaHeart,
} from "react-icons/fa";
import { User, Code, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-newspaper-border text-white p-8 mt-12">
			<div className="max-w-6xl mx-auto">
				{/* Seção principal */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Coluna 1 - Sobre */}
					<div>
						<h3 className="text-xl font-headline font-bold mb-4 uppercase flex items-center gap-2">
							<FaNewspaper />
							Sobre o Jornal
						</h3>
						<p className="font-newspaper text-gray-300 leading-relaxed">
							The Coding Journal é o portfólio digital de Carlos
							Cosme Silva, onde você encontra as últimas notícias
							sobre meus projetos, tecnologias e contribuições
							para o mundo da programação.
						</p>
					</div>

					{/* Coluna 2 - Seções */}
					<div>
						<h3 className="text-xl font-headline font-bold mb-4 uppercase flex items-center gap-2">
							<FaBook />
							Seções
						</h3>
						<ul className="space-y-2 font-newspaper">
							<li>
								<a
									href="#projetos"
									className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
								>
									<Code size={16} />
									Projetos em Destaque
								</a>
							</li>
							<li>
								<a
									href="#sobre"
									className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
								>
									<User size={16} />
									Sobre o Desenvolvedor
								</a>
							</li>
							<li>
								<a
									href="#tecnologias"
									className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
								>
									<FaBook size={16} />
									Stack Tecnológica
								</a>
							</li>
							<li>
								<a
									href="#contato"
									className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
								>
									<Mail size={16} />
									Entre em Contato
								</a>
							</li>
						</ul>
					</div>

					{/* Coluna 3 - Contato */}
					<div>
						<h3 className="text-xl font-headline font-bold mb-4 uppercase flex items-center gap-2">
							<FaPhone />
							Contato
						</h3>
						<div className="space-y-3">
							<a
								href="https://github.com/carlosecosmesilva"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
							>
								<FaGithub size={20} />
								<span className="font-newspaper">GitHub</span>
							</a>
							<a
								href="https://linkedin.com/in/carlosecosmesilva"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
							>
								<FaLinkedin size={20} />
								<span className="font-newspaper">LinkedIn</span>
							</a>
							<a
								href="mailto:carlosecosmesilva@email.com"
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
							>
								<FaEnvelope size={20} />
								<span className="font-newspaper">E-mail</span>
							</a>
						</div>
					</div>
				</div>

				{/* Linha divisória */}
				<div className="border-t border-gray-600 pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="font-newspaper text-gray-400 text-sm mb-4 md:mb-0">
							© {new Date().getFullYear()} The Coding Journal.
							Todos os direitos reservados.
						</div>
						<div className="font-newspaper text-gray-400 text-sm flex items-center gap-1">
							Desenvolvido com
							<FaHeart className="text-red-500" size={12} />
							usando React + Tailwind CSS
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
