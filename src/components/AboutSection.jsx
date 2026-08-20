import { BarChart3, Briefcase, Code, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Engineer — Cloud & Data Warehousing
            </h3>

            <p className="text-muted-foreground">
              I hold a Master of Science (M.Sc.) in Business Intelligence &
              Analytics from ENSIAS (National School of Computer Science and
              Systems Analysis) in Rabat. What drives me is turning sprawling,
              underused data into systems teams can actually rely on.
            </p>

            <p className="text-muted-foreground">
              During my end-of-studies project at Intelcia&apos;s Data Factory, I
              redesigned and migrated the on-premise MSBI platform of Altice
              Portugal (MEO) to Google Cloud after five years of technical debt.
              I reverse-engineered T-SQL stored procedures and SSIS packages and
              rewrote them as a medallion ELT in BigQuery: 97 tables down to 28
              (−71%), pipeline runtime from ~2h35 to ~20min (×3.8), and 79 KPIs
              rebuilt and validated to the unit.
            </p>

            <p className="text-muted-foreground">
              Beyond warehousing, I work with distributed and streaming stacks —
              PySpark, Kafka, Hadoop — and I care about industrialization:
              Terraform, CI/CD, Docker, orchestration. For me, data engineering
              is about solving real problems and creating value from what others
              might ignore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Data Engineering & Cloud
                  </h4>
                  <p className="text-muted-foreground">
                    Advanced SQL (T-SQL, BigQuery, PostgreSQL), medallion ELT,
                    orchestration with Airflow and Cloud Workflows, all
                    industrialized with Python, Terraform and CI/CD.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Big Data & Streaming
                  </h4>
                  <p className="text-muted-foreground">
                    Real-time and distributed processing with Kafka, PySpark
                    (Spark SQL, Structured Streaming, MLlib) and Hadoop /
                    HDFS / YARN, containerized with Docker.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Business Intelligence
                  </h4>
                  <p className="text-muted-foreground">
                    LookML semantic models feeding governed Looker dashboards,
                    plus Power BI (DAX) and Kibana — turning pipelines into
                    decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <a
                href="/dalf_c1.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Languages & Communication
                  </h4>
                  <p className="text-muted-foreground">
                    Efficient work starts with clear communication and
                    collaboration. I&apos;m fluent in French (DALF C1) and English,
                    and Arabic is my native language.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
