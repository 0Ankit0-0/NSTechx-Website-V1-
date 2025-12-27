import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import productImage from "@/assets/product-verifai.jpg";
import verifLogo from "@/assets/Verif w TM.png";

const features = [
  "AI-powered transaction matching",
  "Automated dispute resolution workflows",
  "Real-time settlement tracking",
  "Comprehensive audit trail",
  "Multi-system integration",
  "Regulatory reporting automation",
  "Exception management dashboard",
  "Configurable matching rules",
];

export default function ReconciliationBanks() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[hsl(220,60%,8%)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-6">
                <div className="bg-white rounded-full p-2 flex items-center justify-center">
                  <img
                    src={verifLogo}
                    alt="Verif.ai Logo"
                    className="h-12 w-auto"
                  />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
                Intelligent Reconciliation Platform
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8">
                Verif.ai is NStechX's flagship AI-driven, end-to-end reconciliation, settlement, and dispute management platform designed for modern BFSI and fintech environments.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Built as a future-ready RegTech solution, Verif.ai transforms how financial institutions manage transaction reconciliation, regulatory reporting, and dispute resolution-bringing intelligence, automation, and control into a single platform.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="space-y-4">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src={productImage}
                alt="Verif.ai Platform Interface"
                className="rounded-2xl shadow-xl w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive features that ensure complete regulatory compliance and operational efficiency.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Verif.ai Solution Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                The Verif.ai Solution
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                Verif.ai delivers a comprehensive platform that unifies
                reconciliation, settlement, and dispute management into a
                single, intelligent workflow. Our AI-driven approach reduces
                manual intervention while ensuring complete regulatory
                compliance.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                With system-agnostic integration capabilities, Verif.ai connects
                seamlessly with existing infrastructure, providing financial
                institutions with the flexibility to modernize operations
                without disrupting established workflows.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/request-demo"
                  className="inline-flex items-center gap-2 bg-gradient-orange text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  Request a Demo
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Request a Demo
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Collect First Name, Last Name, Work Email ID & Contact No. Description of the requirements.
                </p>
                <p className="text-muted-foreground text-sm">
                  Landing Page to be created.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
