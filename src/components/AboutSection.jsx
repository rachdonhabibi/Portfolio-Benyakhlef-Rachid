import { Briefcase, Code, User } from "lucide-react";

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
              Data Engineer & Business Intelligence Student
            </h3>

            <p className="text-muted-foreground">
              I’m motivated by the challenge of making sense of the growing volume
              of data, aiming to turn what's often unused into something practical.
              During my Intelcia internship, I migrated BI workflows to Google
              Cloud Platform, built dashboards and semantic layers in Looker, and
              automated pipelines using Python, SQL, and Terraform.
            </p>

            <p className="text-muted-foreground">
              I adapt quickly to new tools and domains, focusing on delivering
              solutions efficiently and accurately. I’m expanding my skills toward
              big data technologies like Spark and Kafka, always learning through
              hands-on projects and collaboration.
            </p>

            <p className="text-muted-foreground">
              For me, data engineering is about solving real problems and creating
              value from what others might ignore.
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
                  <h4 className="font-semibold text-lg">Data Engineering</h4>
                  <p className="text-muted-foreground">
                    I enjoy exploring data in depth, especially transforming and
                    automating it to reveal its true value. I'm comfortable working
                    with Python, GCP, and MSBI.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Business Intelligence</h4>
                  <p className="text-muted-foreground">
                    I appreciate turning complex data into clear, useful visuals,
                    with experience in Power BI and Looker.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <a
                href="/dalf_c1.jpeg"
                target="_blank"
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Communication</h4>
                  <p className="text-muted-foreground">
                    Efficient work starts with clear communication and collaboration. I’m fluent in French (DALF C1), English, and Arabic.
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
