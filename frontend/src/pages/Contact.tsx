import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";

const officeInfo = [
  {
    icon: MapPin,
    title: "Registered Office",
    subtitle: "NStechX India Private Limited",
    details:
      "002 – Bldg no. 1, Manorama Nagar\nThane – 400604\nMaharashtra, India",
  },
  {
    icon: Clock,
    title: "Business Hours",
    subtitle: "",
    details: "Mon – Fri: 9:00 AM – 6:00 PM IST\nSat – Sun: Closed",
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-10 lg:py-124 bg-gradient-blue-light">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 ">
                Get in Touch
              </h1>
              {/* <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Reach out to us for any inquiries or
                to learn more about our solutions.
              </p> */}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-10 md:py-12 lg:py-14 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Office
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {officeInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <AnimatedSection key={info.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {info.title}
                        </h3>
                        {info.subtitle && (
                          <p className="text-sm text-muted-foreground font-medium">
                            {info.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                      {info.details}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
