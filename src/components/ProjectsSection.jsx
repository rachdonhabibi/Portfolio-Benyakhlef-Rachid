import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "UFC ETL Pipeline",
		description:
			"This project is an end-to-end ETL pipeline for UFC event and fight data. It scrapes data from UFCStats, transforms and cleans it, and loads it into a PostgreSQL data warehouse using Airflow for orchestration.",
		image: "/projects/ufc_project.png",
		tags: ["Python", "Airflow", "PostgreSQL", "ETL"],
		githubUrl: "https://github.com/rachdonhabibi/ufc-data-pipeline.git",
	},
	{
		id: 2,
		title: "ENSIAS Alumni Scraper and Data Visualization",
		description:
			"A LinkedIn data scraper combined with Power BI visualizations to analyze ENSIAS alumni career paths, certifications, and geographic distribution. Dashboards are available in the linked GitHub repository.",
		image: "/projects/dashboard1.png",
		tags: [
			"Python",
			"Selenium",
			"BeautifulSoup",
			"Power BI",
			"Data Visualization",
			"Web Scraping",
		],
		githubUrl: "https://github.com/ENSIAS-BI-A-Projects/ensias-alumni-scraper.git",
	},
	{
		id: 3,
		title: "LLMs Evaluation MSBI",
		description:
			"A Microsoft BI solution for evaluating and benchmarking Large Language Models (LLMs) using real-world data. It centralizes, structures, and analyzes LLM performance with SSIS, SSAS, and Power BI.",
		image: "/projects/MSBI.png",
		tags: [
			"Microsoft SQL Server",
			"SSIS",
			"SSAS",
			"Power BI",
			"Data Warehouse",
			"ETL",
			"OLAP",
			"LLM",
			"Benchmarking",
			"Business Intelligence",
		],
		demoUrl: "https://www.youtube.com/watch?v=wCcfFZiHByM",
		githubUrl: "https://github.com/ENSIAS-BI-A-Projects/llms-evaluation-msbi.git",
	},
	{
		id: 4,
		title: "Sentiment Analysis Pipeline – NLP & BERT",
		description:
			"A complete pipeline for sentiment analysis using tweets from X (formerly Twitter). The project combines data cleaning, visualization, and classification using ML, DL, and BERT models to extract insights and predict sentiment trends.",
		image: "/projects/sentiment.png",
		tags: [
			"Python",
			"Machine Learning",
			"Deep Learning",
			"BERT",
			"NLP",
			"Data Visualization",
			"PyTorch",
		],
		githubUrl: "https://github.com/ENSIAS-BI-A-Projects/sentiment-analysis-through-ML-DL.git",
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					{" "}
					Featured <span className="text-primary"> Projects </span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my recent projects. 
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">
									{" "}
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										<a
											href={project.demoUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<ExternalLink size={20} />
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						href="https://github.com/rachdonhabibi?tab=repositories"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
