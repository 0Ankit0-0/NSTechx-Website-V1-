import {
  AlertTriangle,
  TrendingUp,
  FileSearch,
  ShieldCheck,
  Clock,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import productImage from "@/assets/product-verifai.jpg";
import verifLogo from "@/assets/Verif w TM.png";

const problems = [
  {
    icon: AlertTriangle,
    title: "Manual Reconciliation Costs",
    description:
      "High operational costs and resource drain from labor-intensive manual reconciliation processes.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Transaction Complexity",
    description:
      "Increasing volume and complexity of digital transactions across multiple channels and systems.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FileSearch,
    title: "Regulatory Scrutiny",
    description:
      "Rising regulatory and audit requirements demanding comprehensive compliance documentation.",
    color: "from-orange-600 to-orange-700",
  },
  {
    icon: ShieldCheck,
    title: "Audit Trail Gaps",
    description:
      "Lack of independent, auditable reconciliation solutions creating compliance risks.",
    color: "from-green-600 to-green-700",
  },
  {
    icon: Clock,
    title: "Real-Time Demands",
    description:
      "Urgent demand for real-time reporting and automation in fast-paced financial environments.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Layers,
    title: "System Integration",
    description:
      "Challenges in integrating multiple legacy and modern systems for unified operations.",
    color: "from-green-500 to-green-600",
  },
];

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

export default function Product() {
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
                {/* <span className="text-green-400 font-medium">Verif.ai</span> */}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-3 bg-gradient-orange text-white px-6 py-3 rounded-xl shadow-lg w-fit mx-auto"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/80">Platform Type</p>
                  <p className="font-semibold text-sm">RegTech Solution</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Challenges We Address
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Modern financial institutions face complex operational
                challenges that demand intelligent, automated solutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {problems.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300 h-full group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Core Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
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
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-orange text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  Get In Touch
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-24 bg-gradient-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Verif.ai delivers tangible results that transform financial operations.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "90%", label: "Reduction in manual processing", gradient: "from-yellow-400 to-orange-500" },
              { metric: "Real-time", label: "Transaction visibility", gradient: "from-green-400 to-cyan-500" },
              { metric: "100%", label: "Audit compliance coverage", gradient: "from-purple-400 to-pink-500" },
              { metric: "24/7", label: "Automated monitoring", gradient: "from-blue-400 to-indigo-500" },
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <p className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}>
                    {item.metric}
                  </p>
                  <p className="text-white/90">{item.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
