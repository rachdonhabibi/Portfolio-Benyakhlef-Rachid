import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 flex items-center justify-center">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in data-driven solutions or collaboration?  
          Let’s connect! I’m always open to discussing new projects and 
          opportunities in data, analytics, and machine learning.
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
                  href="tel:+212 652837582"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +212 652837582
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Rabat, Maroc
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.linkedin.com/in/rachid-benyakhlef-2079a91a9/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="https://github.com/rachdonhabibi?tab=repositories" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.77S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 13 21.13V25"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
