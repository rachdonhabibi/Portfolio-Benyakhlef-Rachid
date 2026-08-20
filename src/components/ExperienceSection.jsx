import { ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Data Engineer — End-of-Studies Project",
    company: "Intelcia (Data Factory) — Client: Altice Portugal / MEO",
    period: "February – August 2026 · 6 months",
    image: "/internship/Intelcia.png",
    tags: [
      "BigQuery",
      "T-SQL",
      "Python",
      "Terraform",
      "Cloud Workflows",
      "Cloud Run",
      "Cloud Build",
      "LookML",
      "Looker",
      "ELT",
    ],
    description: (
      <>
        <span>
          Redesign and migration of an on-premise MSBI decision-support platform
          to Google Cloud Platform, after five years of technical debt.
        </span>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Reverse-engineered T-SQL stored procedures and SSIS packages, then
            rewrote them in BigQuery SQL (CTEs, window functions, incremental
            MERGE, partitioned and clustered tables) as a medallion ELT: 97
            tables down to 28 (−71%), pipeline from ~2h35 to ~20min (×3.8).
          </li>
          <li>
            Industrialized in Python and Infrastructure-as-Code: Cloud Workflows
            / Cloud Run orchestration, Terraform, Cloud Build CI/CD.
          </li>
          <li>
            Built a LookML semantic model (views, explores, derived measures)
            feeding governed Looker dashboards; 79 KPIs rebuilt and validated to
            the unit, with a glossary and data catalog.
          </li>
        </ul>
      </>
    ),
    demoUrl: "https://www.intelcia.com/fr",
  },
  {
    id: 2,
    title: "Data Engineer — Internship",
    company: "Intelcia (Data Factory) — Client: JLassur (France)",
    period: "June – August 2025 · 3 months",
    image: "/internship/Intelcia.png",
    tags: [
      "BigQuery",
      "T-SQL",
      "Python",
      "Terraform",
      "Looker",
      "GCP",
    ],
    description: (
      <>
        <span>
          Ported MSBI decision-support workloads to Google Cloud Platform.
        </span>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Migrated T-SQL queries to BigQuery SQL and loaded them into
            partitioned tables.
          </li>
          <li>
            Automated pipelines with Python and Terraform, with analytics
            delivered through Looker.
          </li>
        </ul>
      </>
    ),
    demoUrl: "https://www.intelcia.com/fr",
  },
  {
    id: 3,
    title: "Data Analyst — Internship",
    company: "Archytas Conseil — Agdal, Rabat, Morocco",
    period: "June – July 2024 · 2 months",
    image: "/internship/archya.png",
    tags: ["Python", "pandas", "SQL", "ETL", "Power BI", "DAX"],
    description: (
      <>
        <span>
          Data preparation and operational reporting for business teams.
        </span>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Built ETL processes for data extraction and cleaning
            (Python/pandas, SQL queries).
          </li>
          <li>
            Designed DAX measures and Power BI dashboards for operational
            monitoring.
          </li>
        </ul>
      </>
    ),
    demoUrl: "https://www.archytas-conseil.com/",
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
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-sm text-foreground/80 mb-1">{exp.company}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  {exp.period}
                </p>
                <div className="text-muted-foreground text-sm mb-4">
                  {exp.description}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={exp.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
