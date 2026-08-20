import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 flex items-center justify-center"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I&apos;m currently looking for a Data Engineer role focused on cloud
          platforms and data warehousing. If you have an opportunity, a project,
          or simply want to talk data engineering, feel free to reach out.
        </p>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:benyakhlef.rachid@outlook.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  benyakhlef.rachid@outlook.com
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+212652837582"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +212 652-837582
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">Rabat, Morocco</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/rachid-benyakhlef-2079a91a9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/rachid-benyakhlef"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
