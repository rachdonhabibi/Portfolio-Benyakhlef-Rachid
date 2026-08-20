import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  "Data Engineering",
  "Big Data",
  "Cloud (GCP)",
  "Databases",
  "BI & Visualization",
  "Machine Learning",
];

const skills = [
  // Data Engineering
  { name: "SQL (T-SQL, BigQuery SQL, PostgreSQL)", level: 95, category: "Data Engineering" },
  { name: "Python (pandas, PySpark)", level: 90, category: "Data Engineering" },
  { name: "ELT / Medallion Architecture", level: 88, category: "Data Engineering" },
  { name: "Airflow (DAGs, Scheduling)", level: 85, category: "Data Engineering" },
  { name: "Terraform (IaC)", level: 85, category: "Data Engineering" },
  { name: "Docker", level: 82, category: "Data Engineering" },
  { name: "CI/CD (Cloud Build)", level: 80, category: "Data Engineering" },
  { name: "SSIS / SSAS / SSRS", level: 80, category: "Data Engineering" },
  { name: "Git / GitHub", level: 85, category: "Data Engineering" },
  { name: "Parquet", level: 78, category: "Data Engineering" },
  { name: "Java / Scala", level: 70, category: "Data Engineering" },

  // Big Data
  { name: "PySpark (RDD, DataFrames, Spark SQL)", level: 85, category: "Big Data" },
  { name: "Spark Structured Streaming", level: 80, category: "Big Data" },
  { name: "Kafka", level: 80, category: "Big Data" },
  { name: "Hadoop / HDFS / YARN", level: 75, category: "Big Data" },
  { name: "Spark MLlib", level: 70, category: "Big Data" },
  { name: "Logstash", level: 70, category: "Big Data" },

  // Cloud (GCP)
  { name: "BigQuery (partitioning, clustering, MERGE)", level: 92, category: "Cloud (GCP)" },
  { name: "Cloud Workflows / Cloud Run", level: 85, category: "Cloud (GCP)" },
  { name: "Terraform (IaC)", level: 85, category: "Cloud (GCP)" },
  { name: "Looker", level: 85, category: "Cloud (GCP)" },
  { name: "Cloud Build (CI/CD)", level: 80, category: "Cloud (GCP)" },
  { name: "Dataproc", level: 75, category: "Cloud (GCP)" },
  { name: "Pub/Sub", level: 75, category: "Cloud (GCP)" },

  // Databases
  { name: "SQL Server (T-SQL)", level: 88, category: "Databases" },
  { name: "PostgreSQL", level: 85, category: "Databases" },
  { name: "MySQL", level: 78, category: "Databases" },
  { name: "Elasticsearch", level: 75, category: "Databases" },
  { name: "MongoDB", level: 75, category: "Databases" },
  { name: "Cassandra", level: 65, category: "Databases" },

  // BI & Visualization
  { name: "Looker / LookML", level: 88, category: "BI & Visualization" },
  { name: "Power BI (DAX)", level: 88, category: "BI & Visualization" },
  { name: "Dimensional Modeling (Star Schema)", level: 85, category: "BI & Visualization" },
  { name: "SSAS (OLAP Cubes)", level: 78, category: "BI & Visualization" },
  { name: "Kibana", level: 75, category: "BI & Visualization" },

  // Machine Learning
  { name: "Scikit-learn", level: 75, category: "Machine Learning" },
  { name: "PyTorch", level: 70, category: "Machine Learning" },
  { name: "NLP (BERT, Transformers)", level: 70, category: "Machine Learning" },
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
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
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
