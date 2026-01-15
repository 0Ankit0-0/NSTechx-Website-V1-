import { Clock, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import heroImage from "@/assets/webp_images/hero-fintech.webp";

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
  {
    icon: Send,
    title: "Contact",
    subtitle: "",
    details: "Email: contactus@nstechx.co.in\nPhone Number: 7208814414",
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={heroImage}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-900/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
                We’d love to hear from you. Whether you have a question about our
                services, need a demo, or anything else, our team is ready to
                answer all your questions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Office Information and Contact Form */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background to-slate-50 dark:from-background dark:to-slate-900/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Office Information */}
            <div className="flex flex-col gap-8">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                  Our Office
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>


    </>
  );
}