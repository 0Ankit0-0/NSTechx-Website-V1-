import {
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Zap,
  Shield,
  FileText,
  Clock,
  Network,
} from "lucide-react";
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
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="bg-white rounded-full p-2 flex items-center justify-center">
                  <img
                    src={verifLogo}
                    alt="Verif.ai Logo"
                    className="h-12 w-auto"
                  />
                </div>
                <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  Intelligent Reconciliation Platform
                </span>
              </div>

              <ul className="list-disc pl-5 text-base sm:text-lg text-gray-300 leading-relaxed mb-4 text-justify space-y-2">
                <li>
                  Verif.ai is NStechX's flagship AI-driven, end-to-end
                  reconciliation, settlement, and dispute management platform
                  designed for modern BFSI and fintech environments.
                </li>
                <li>
                  Built as a future-ready RegTech solution, Verif.ai transforms
                  how financial institutions manage transaction reconciliation,
                  regulatory reporting, and dispute resolution-bringing
                  intelligence, automation, and control into a single platform.
                </li>
              </ul>
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
                Comprehensive features that ensure complete regulatory
                compliance and operational efficiency.
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
                  <span className="text-foreground text-sm leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenges We Address Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                The Challenges We Address
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto text-justify">
                Modern financial institutions face complex operational
                challenges that demand intelligent, automated solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Manual Reconciliation Costs",
                  description:
                    "High operational costs and resource drain from labor-intensive manual reconciliation processes.",
                  icon: DollarSign,
                },
                {
                  title: "Digital Transaction Complexity",
                  description:
                    "Increasing volume and complexity of digital transactions across multiple channels and systems.",
                  icon: Zap,
                },
                {
                  title: "Regulatory Scrutiny",
                  description:
                    "Rising regulatory and audit requirements demanding comprehensive compliance documentation.",
                  icon: Shield,
                },
                {
                  title: "Audit Trail Gaps",
                  description:
                    "Lack of independent, auditable reconciliation solutions creating compliance risks.",
                  icon: FileText,
                },
                {
                  title: "Real-Time Demands",
                  description:
                    "Urgent demand for real-time reporting and automation in fast-paced financial environments.",
                  icon: Clock,
                },
                {
                  title: "System Integration Challenges",
                  description:
                    "Challenges in integrating multiple legacy and modern systems for unified operations.",
                  icon: Network,
                },
              ].map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <AnimatedSection key={challenge.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                          {challenge.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                        {challenge.description}
                      </p>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
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
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <div className="space-y-4">
                  {[
                    {
                      label: "Transaction Processing",
                      value: "Real-time",
                      gradient: "from-green-500 to-green-600",
                    },
                    {
                      label: "Compliance Coverage",
                      value: "100%",
                      gradient: "from-orange-500 to-orange-600",
                    },
                    {
                      label: "Integration Type",
                      value: "System-Agnostic",
                      gradient: "from-green-600 to-green-700",
                    },
                    {
                      label: "Automation Level",
                      value: "AI-Driven",
                      gradient: "from-orange-600 to-orange-700",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 bg-gradient-blue-light rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer gap-2"
                    >
                      <span className="text-foreground font-medium text-sm sm:text-base">
                        {item.label}
                      </span>
                      <span
                        className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-bold text-xl sm:text-lg`}
                      >
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
