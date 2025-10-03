import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["Data Engineering", "Business Intelligence", "Cloud & Big Data", "Machine Learning", "Tools"];

const skills = [
  // Data Engineering
  { name: "Python (Pandas, BeautifulSoup, Selenium)", level: 90, category: "Data Engineering" },
  { name: "ETL (Extract, Transform, Load)", level: 85, category: "Data Engineering" },
  { name: "Airflow (DAGs, Scheduling)", level: 80, category: "Data Engineering" },
  { name: "SSIS / SSAS / SSRS", level: 75, category: "Data Engineering" },
  { name: "Web Scraping", level: 75, category: "Data Engineering" },
  { name: "GCP (BigQuery, GCS, Cloud Run, Workflows)", level: 80, category: "Data Engineering" },
  { name: "Terraform", level: 75, category: "Data Engineering" },

  // Business Intelligence
  { name: "Power BI", level: 90, category: "Business Intelligence" },
  { name: "Cognos Analytics", level: 80, category: "Business Intelligence" },
  { name: "Looker (LookML, Dashboards)", level: 80, category: "Business Intelligence" },

  // Cloud & Big Data
  { name: "AWS (S3, Cloud Services)", level: 65, category: "Cloud & Big Data" },
  { name: "GCP (BigQuery, GCS, Cloud Run, Workflows)", level: 80, category: "Cloud & Big Data" },
  { name: "MongoDB", level: 70, category: "Cloud & Big Data" },
  { name: "Cassandra", level: 65, category: "Cloud & Big Data" },

  // Machine Learning
  { name: "Scikit-learn", level: 75, category: "Machine Learning" },
  { name: "PyTorch", level: 70, category: "Machine Learning" },
  { name: "NLP (BERT, SVM, CNN, LSTM, GRU)", level: 70, category: "Machine Learning" },

  // Tools
  { name: "Docker", level: 80, category: "Tools" },
  { name: "Git/GitHub", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "C", level: 80, category: "Tools" },
];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Data Engineering");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
