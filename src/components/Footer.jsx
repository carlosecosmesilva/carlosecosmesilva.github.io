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
		<footer className="bg-newspaper-border text-white p-4 sm:p-6 lg:p-8 mt-8 sm:mt-12">
			<div className="max-w-6xl mx-auto">
				{/* Seção principal */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
					{/* Coluna 1 - Sobre */}
					<div>
						<h3 className="text-lg sm:text-xl font-headline font-bold mb-3 sm:mb-4 uppercase flex items-center gap-2">
							<FaNewspaper className="w-5 h-5 sm:w-6 sm:h-6" />
							Sobre o Jornal
						</h3>
						<p className="font-newspaper text-gray-300 leading-relaxed text-sm sm:text-base">
							The Coding Journal é o portfólio digital de Carlos
							Cosme Silva, onde você encontra as últimas notícias
							sobre meus projetos, tecnologias e contribuições
							para o mundo da programação.
						</p>
					</div>

					{/* Coluna 2 - Seções */}
					<div>
						<h3 className="text-lg sm:text-xl font-headline font-bold mb-3 sm:mb-4 uppercase flex items-center gap-2">
							<FaBook className="w-5 h-5 sm:w-6 sm:h-6" />
							Seções
						</h3>
						<ul className="space-y-2 font-newspaper text-sm sm:text-base">
							<li>
								<a
									href="#projetos"
									className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
								>
									<Code className="w-4 h-4" />
									Projetos em Destaque
								</a>
							</li>
							<li>
								<a
									href="#sobre"
									className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
								>
									<User className="w-4 h-4" />
									Sobre o Desenvolvedor
								</a>
							</li>
							<li>
								<a
									href="#tecnologias"
									className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
								>
									<FaBook className="w-4 h-4" />
									Stack Tecnológica
								</a>
							</li>
							<li>
								<a
									href="#contato"
									className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
								>
									<Mail className="w-4 h-4" />
									Entre em Contato
								</a>
							</li>
						</ul>
					</div>

					{/* Coluna 3 - Contato */}
					<div>
						<h3 className="text-lg sm:text-xl font-headline font-bold mb-3 sm:mb-4 uppercase flex items-center gap-2">
							<FaPhone className="w-5 h-5 sm:w-6 sm:h-6" />
							Contato
						</h3>
						<div className="space-y-3">
							<a
								href="https://github.com/carlosecosmesilva"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
							>
								<FaGithub className="w-5 h-5" />
								<span className="font-newspaper">GitHub</span>
							</a>
							<a
								href="https://linkedin.com/in/carlosecosmesilva"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
							>
								<FaLinkedin className="w-5 h-5" />
								<span className="font-newspaper">LinkedIn</span>
							</a>
							<a
								href="mailto:carlosecosmesilva@email.com"
								className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
							>
								<FaEnvelope className="w-5 h-5" />
								<span className="font-newspaper">E-mail</span>
							</a>
						</div>
					</div>
				</div>

				{/* Linha divisória */}
				<div className="border-t border-gray-600 pt-4 sm:pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
						<div className="font-newspaper text-gray-400 text-xs sm:text-sm text-center md:text-left">
							© {new Date().getFullYear()} The Coding Journal.
							Todos os direitos reservados.
						</div>
						<div className="font-newspaper text-gray-400 text-xs sm:text-sm flex items-center gap-1 text-center">
							Desenvolvido com
							<FaHeart className="text-red-500 w-3 h-3" />
							usando React + Tailwind CSS
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
