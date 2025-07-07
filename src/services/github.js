const GITHUB_API_BASE = "https://api.github.com";
const USERNAME = "carlosecosmesilva";

export const githubService = {
	async getUserRepos() {
		try {
			const response = await fetch(
				`${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=50`
			);

			if (!response.ok) {
				throw new Error("Failed to fetch repositories");
			}

			const repos = await response.json();

			// Filtrar apenas repos públicos e não-fork
			return repos
				.filter((repo) => !repo.fork && !repo.private)
				.map((repo) => ({
					id: repo.id,
					name: repo.name,
					description: repo.description || "Sem descrição disponível",
					html_url: repo.html_url,
					homepage: repo.homepage,
					language: repo.language,
					stargazers_count: repo.stargazers_count,
					updated_at: repo.updated_at,
					created_at: repo.created_at,
					topics: repo.topics || [],
				}));
		} catch (error) {
			console.error("Error fetching GitHub repos:", error);
			return [];
		}
	},

	async getUserProfile() {
		try {
			const response = await fetch(
				`${GITHUB_API_BASE}/users/${USERNAME}`
			);

			if (!response.ok) {
				throw new Error("Failed to fetch user profile");
			}

			return await response.json();
		} catch (error) {
			console.error("Error fetching GitHub profile:", error);
			return null;
		}
	},
};
