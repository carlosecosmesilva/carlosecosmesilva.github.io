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
			<main className="max-w-7xl mx-auto px-4 py-8">
				{/* Manchete Principal */}
				<section className="mb-12">
					<div className="text-center mb-8">
						<h1 className="text-5xl md:text-7xl font-headline font-black uppercase text-headline-red mb-4 flex items-center justify-center gap-4">
							<AlertTriangle size={60} />
							BREAKING NEWS
							<AlertTriangle size={60} />
						</h1>
						<p className="text-2xl font-newspaper italic text-gray-700">
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
				<section className="mb-12">
					<div className="border-4 border-newspaper-border bg-white p-8">
						<div className="border-b-2 border-gray-300 pb-4 mb-6">
							<h2 className="text-4xl font-headline font-bold uppercase text-center flex items-center justify-center gap-3">
								<FaMicrophone />
								ENTREVISTA EXCLUSIVA
							</h2>
							<p className="text-center text-lg font-newspaper italic mt-2">
								"Conversamos com o desenvolvedor por trás dos
								projetos"
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8 items-center">
							{/* Foto do perfil (se disponível) */}
							<div className="text-center">
								{profile?.avatar_url ? (
									<img
										src={profile.avatar_url}
										alt="Carlos Cosme Silva"
										className="w-48 h-48 mx-auto rounded-full border-4 border-newspaper-border"
									/>
								) : (
									<div className="w-48 h-48 mx-auto rounded-full border-4 border-newspaper-border bg-gray-200 flex items-center justify-center text-6xl">
										👨‍💻
									</div>
								)}
								<h3 className="text-2xl font-headline font-bold mt-4">
									CARLOS COSME SILVA
								</h3>
								<p className="font-newspaper italic text-gray-600">
									Desenvolvedor Full-Stack
								</p>
							</div>

							{/* Bio/Informações */}
							<div className="space-y-4">
								<div>
									<h4 className="font-headline font-bold text-lg mb-2 flex items-center gap-2">
										<MapPin size={20} />
										LOCALIZAÇÃO:
									</h4>
									<p className="font-newspaper">
										{profile?.location || "Brasil"}
									</p>
								</div>

								<div>
									<h4 className="font-headline font-bold text-lg mb-2 flex items-center gap-2">
										<Target size={20} />
										ESPECIALIDADES:
									</h4>
									<div className="flex flex-wrap gap-2">
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
												className="bg-gray-100 border border-gray-300 px-3 py-1 text-sm font-bold"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div>
									<h4 className="font-headline font-bold text-lg mb-2 flex items-center gap-2">
										<BarChart3 size={20} />
										ESTATÍSTICAS:
									</h4>
									<div className="grid grid-cols-2 gap-4 text-center">
										<div className="bg-gray-100 border border-gray-300 p-3">
											<div className="text-2xl font-headline font-bold text-headline-red">
												{profile?.public_repos ||
													repos.length}
											</div>
											<div className="text-sm font-newspaper">
												Repositórios
											</div>
										</div>
										<div className="bg-gray-100 border border-gray-300 p-3">
											<div className="text-2xl font-headline font-bold text-headline-red">
												{repos.reduce(
													(acc, repo) =>
														acc +
														repo.stargazers_count,
													0
												)}
											</div>
											<div className="text-sm font-newspaper">
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
					<section className="mb-12">
						<h2 className="text-4xl font-headline font-bold uppercase text-center mb-8 border-b-4 border-newspaper-border pb-4 flex items-center justify-center gap-3">
							<FaChartLine />
							OUTRAS MANCHETES EM DESTAQUE
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
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
					<section className="mb-12">
						<h2 className="text-4xl font-headline font-bold uppercase text-center mb-8 border-b-4 border-newspaper-border pb-4 flex items-center justify-center gap-3">
							<FaArchive />
							ARQUIVO DE EDIÇÕES ANTERIORES
						</h2>
						<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
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
					<div className="border-4 border-newspaper-border bg-white p-8">
						<h2 className="text-4xl font-headline font-bold uppercase mb-4 flex items-center justify-center gap-3">
							<FaEnvelope />
							FALE COM A REDAÇÃO
						</h2>
						<p className="text-lg font-newspaper mb-6">
							Tem uma proposta? Quer colaborar? Entre em contato!
						</p>
						<div className="flex justify-center gap-4">
							<a
								href="https://github.com/carlosecosmesilva"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-newspaper-border text-white px-6 py-3 font-bold uppercase hover:bg-gray-700 transition-colors flex items-center gap-2"
							>
								<FaGithub />
								GitHub
							</a>
							<a
								href="https://linkedin.com/in/carlosecosmesilva"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-headline-red text-white px-6 py-3 font-bold uppercase hover:bg-red-700 transition-colors flex items-center gap-2"
							>
								<FaLinkedin />
								LinkedIn
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
