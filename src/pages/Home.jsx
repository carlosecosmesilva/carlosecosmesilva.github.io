import { useState, useEffect } from "react";
import ProjectBox from "../components/ProjectBox";
import { githubService } from "../services/github";
import {
	FaNewspaper,
	FaMicrophone,
	FaChartLine,
	FaArchive,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";
import {
	AlertTriangle,
	Loader,
	MapPin,
	Target,
	BarChart3,
	User,
} from "lucide-react";

export default function Home() {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const [reposData, profileData] = await Promise.all([
					githubService.getUserRepos(),
					githubService.getUserProfile(),
				]);
				setRepos(reposData);
				setProfile(profileData);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	// Projetos em destaque (os 3 mais recentes ou com mais estrelas)
	const featuredProjects = repos
		.sort((a, b) => b.stargazers_count - a.stargazers_count)
		.slice(0, 3);

	const otherProjects = repos.slice(3);

	if (loading) {
		return (
			<div className="min-h-screen bg-newspaper-bg flex items-center justify-center">
				<div className="text-center">
					<div className="text-4xl font-headline font-bold mb-4 flex justify-center">
						<Loader className="animate-spin" size={48} />
					</div>
					<div className="text-xl font-newspaper">
						Carregando as últimas notícias...
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-newspaper-bg">
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
				{/* Manchete Principal */}
				<section className="mb-8 sm:mb-12">
					<div className="text-center mb-6 sm:mb-8">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-headline font-black uppercase text-headline-red mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
							<AlertTriangle className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15" />
							<span className="break-words">BREAKING NEWS</span>
							<AlertTriangle className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15" />
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl font-newspaper italic text-gray-700 px-2">
							"Desenvolvedor Full-Stack lança novos projetos
							revolucionários!"
						</p>
					</div>

					{featuredProjects.length > 0 && (
						<ProjectBox
							project={featuredProjects[0]}
							isHeadline={true}
						/>
					)}
				</section>

				{/* Seção "Sobre Mim" estilo entrevista */}
				<section className="mb-8 sm:mb-12">
					<div className="border-4 border-newspaper-border bg-white p-4 sm:p-6 lg:p-8">
						<div className="border-b-2 border-gray-300 pb-3 sm:pb-4 mb-4 sm:mb-6">
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold uppercase text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
								<FaMicrophone className="w-6 h-6 sm:w-8 sm:h-8" />
								<span className="break-words">
									ENTREVISTA EXCLUSIVA
								</span>
							</h2>
							<p className="text-center text-sm sm:text-base lg:text-lg font-newspaper italic mt-2 px-2">
								"Conversamos com o desenvolvedor por trás dos
								projetos"
							</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
							{/* Foto do perfil (se disponível) */}
							<div className="text-center order-1 lg:order-1">
								{profile?.avatar_url ? (
									<img
										src={profile.avatar_url}
										alt="Carlos Cosme Silva"
										className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full border-4 border-newspaper-border"
									/>
								) : (
									<div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full border-4 border-newspaper-border bg-gray-200 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl">
										👨‍💻
									</div>
								)}
								<h3 className="text-xl sm:text-2xl font-headline font-bold mt-3 sm:mt-4">
									CARLOS COSME SILVA
								</h3>
								<p className="font-newspaper italic text-gray-600 text-sm sm:text-base">
									Desenvolvedor Full-Stack
								</p>
							</div>

							{/* Bio/Informações */}
							<div className="space-y-4 order-2 lg:order-2">
								<div>
									<h4 className="font-headline font-bold text-base sm:text-lg mb-2 flex items-center gap-2">
										<MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
										LOCALIZAÇÃO:
									</h4>
									<p className="font-newspaper text-sm sm:text-base">
										{profile?.location || "Brasil"}
									</p>
								</div>

								<div>
									<h4 className="font-headline font-bold text-base sm:text-lg mb-2 flex items-center gap-2">
										<Target className="w-4 h-4 sm:w-5 sm:h-5" />
										ESPECIALIDADES:
									</h4>
									<div className="flex flex-wrap gap-1 sm:gap-2">
										{[
											"React",
											"JavaScript",
											"TypeScript",
											"Node.js",
											"Python",
											".NET",
										].map((tech) => (
											<span
												key={tech}
												className="bg-gray-100 border border-gray-300 px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div>
									<h4 className="font-headline font-bold text-base sm:text-lg mb-2 flex items-center gap-2">
										<BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
										ESTATÍSTICAS:
									</h4>
									<div className="grid grid-cols-2 gap-2 sm:gap-4 text-center">
										<div className="bg-gray-100 border border-gray-300 p-2 sm:p-3">
											<div className="text-lg sm:text-xl lg:text-2xl font-headline font-bold text-headline-red">
												{profile?.public_repos ||
													repos.length}
											</div>
											<div className="text-xs sm:text-sm font-newspaper">
												Repositórios
											</div>
										</div>
										<div className="bg-gray-100 border border-gray-300 p-2 sm:p-3">
											<div className="text-lg sm:text-xl lg:text-2xl font-headline font-bold text-headline-red">
												{repos.reduce(
													(acc, repo) =>
														acc +
														repo.stargazers_count,
													0
												)}
											</div>
											<div className="text-xs sm:text-sm font-newspaper">
												Estrelas
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Seção de Projetos Destacados */}
				{featuredProjects.length > 1 && (
					<section className="mb-8 sm:mb-12">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold uppercase text-center mb-6 sm:mb-8 border-b-4 border-newspaper-border pb-3 sm:pb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
							<FaChartLine className="w-6 h-6 sm:w-8 sm:h-8" />
							<span className="break-words text-center">
								OUTRAS MANCHETES EM DESTAQUE
							</span>
						</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
							{featuredProjects.slice(1).map((project) => (
								<ProjectBox
									key={project.id}
									project={project}
									isHeadline={false}
								/>
							))}
						</div>
					</section>
				)}

				{/* Arquivo de Projetos */}
				{otherProjects.length > 0 && (
					<section className="mb-8 sm:mb-12">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold uppercase text-center mb-6 sm:mb-8 border-b-4 border-newspaper-border pb-3 sm:pb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
							<FaArchive className="w-6 h-6 sm:w-8 sm:h-8" />
							<span className="break-words text-center">
								ARQUIVO DE EDIÇÕES ANTERIORES
							</span>
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
							{otherProjects.map((project) => (
								<ProjectBox
									key={project.id}
									project={project}
									isHeadline={false}
								/>
							))}
						</div>
					</section>
				)}

				{/* Seção de Contato */}
				<section className="text-center">
					<div className="border-4 border-newspaper-border bg-white p-4 sm:p-6 lg:p-8">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold uppercase mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
							<FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />
							<span className="break-words">
								FALE COM A REDAÇÃO
							</span>
						</h2>
						<p className="text-base sm:text-lg font-newspaper mb-4 sm:mb-6 px-2">
							Tem uma proposta? Quer colaborar? Entre em contato!
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
							<a
								href="https://github.com/carlosecosmesilva"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-newspaper-border text-white px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
							>
								<FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
								GitHub
							</a>
							<a
								href="https://linkedin.com/in/carlosecosmesilva"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-headline-red text-white px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
							>
								<FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
								LinkedIn
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
