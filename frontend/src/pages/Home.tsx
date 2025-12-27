import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-fintech.jpg";

const capabilities = [
  "System-agnostic integration",
  "End-to-end reconciliation",
  "Dispute management",
  "Settlement automation",
  "Regulatory reporting",
  "Audit trail visibility",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden py-20 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImage}
            alt="Modern fintech banking dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-900/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-green-300 font-medium text-xs sm:text-sm uppercase tracking-wider mb-6 md:mb-8"
            >
              Reg-tech Solutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 md:mb-8"
            >
              Future-Ready AI–driven, system-agnostic RegTech Solutions for
              Banks and Financial Institutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-green-50 leading-relaxed mb-4 md:mb-6 max-w-3xl mx-auto lg:mx-0"
            >
              NStechX India Pvt. Ltd. is a Reg-tech company built with a vision
              to solve real, high-impact challenges faced by the Indian banking
              and financial services ecosystem.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-green-50 leading-relaxed mb-4 md:mb-6 max-w-3xl mx-auto lg:mx-0"
            >
              As a young and dynamic organization, we empower banks, NBFCs, and
              financial institutions with secure, scalable, and future-ready
              technology that supports rapid digital transformation while
              meeting evolving regulatory expectations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-green-50 leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto lg:mx-0"
            >
              Our solutions are designed to deliver measurable operational
              outcomes, enhanced transparency, and audit-ready
              compliance-positioning NStechX for strong growth in India's
              expanding fintech landscape.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-green-50 leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto lg:mx-0"
            >
              Positioned for strong growth in India's expanding fintech
              landscape, NStechX combines deep domain expertise with
              cutting-edge technology to address the most pressing challenges in
              financial services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/product"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Explore Our Solution
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Comprehensive Financial Operations Platform
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 md:mb-10">
                NStechX provides secure, scalable technology that supports rapid
                digital transformation while meeting evolving regulatory
                expectations across India's expanding fintech landscape.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </motion.div>
                ))}
              </div>
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-blue-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-orange-500" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10">
              Discover how Verif.ai can streamline your reconciliation,
              settlement, and dispute management processes.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
              >
                Learn About Verif.ai
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
