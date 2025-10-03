import { ArrowRight, ExternalLink, Github } from "lucide-react";

const experiences = [
	{
		id: 1,
		title: (
			<>
				Data Engineering Internship – Intelcia
				<br />
				(2 months)
			</>
		),
		company: "Intelcia",
		duration: "2 months",
		image: "/internship/Intelcia.png",
		tags: [
			"Python",
			"SQL",
			"GCP",
			"Looker",
			"Terraform",
			"BigQuery",
			"Cloud Run",
			"Cloud Workflow",
		],
		description: (
			<>
				<span>
					During my internship at Intelcia, I contributed to migrating MSBI on-premise BI workflows to Google Cloud Platform.
				</span>
				<ul className="list-disc pl-5 mt-2">
					<li>Automated data pipelines using Python, SQL, and Terraform.</li>
					<li>Helped design a comprehensive data catalog and KPI glossary.</li>
					<li>Created visualizations with Looker.</li>
				</ul>
			</>
		),
		demoUrl: "https://www.intelcia.com/fr",
		githubUrl: "#",
	},
	{
		id: 2,
		title: (
			<>
				Data Analyst Internship – Archytas-Conseil
				<br />
				(1 month)
			</>
		),
		company: "Archytas Agdal, Rabat, Maroc",
		duration: "1 month",
		image: "/internship/archya.png",
		tags: [
			"Data Analyst",
			"ETL",
			"Excel",
			"Power BI",
			"Fairlynk",
			"Reporting",
		],
		description: (
			<>
				<span>
					As a Data Analyst Intern, I studied a CLM (Contract Life Cycle Management) tool and became familiar with the Fairlynk platform.
				</span>
				<ul className="list-disc pl-5 mt-2">
					<li>Implemented ETL processes for data extraction and cleaning.</li>
					<li>Visualized and reported Excel data for effective business insights using Power BI.</li>
				</ul>
			</>
		),
		demoUrl: "https://www.archytas-conseil.com/",
		githubUrl: "#",
	},
];

export const ExperienceSection = () => {
	return (
		<section id="experience" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Experience
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some highlights from my professional journey.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{experiences.map((exp, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={exp.image}
									alt={exp.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{exp.tags.map((tag) => (
										<span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">
									{" "}
									{exp.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{exp.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										<a
											href={exp.demoUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<ExternalLink size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
