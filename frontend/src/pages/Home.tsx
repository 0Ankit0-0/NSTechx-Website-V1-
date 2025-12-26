import { Link } from "react-router-dom";
import { ShieldCheck, Sparkles, LayoutDashboard, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-fintech.jpg";

const features = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description: "Audit-ready solutions that meet evolving regulatory expectations and standards.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Sparkles,
    title: "Real-Time Processing",
    description: "Near real-time visibility across all transactions for faster decision-making.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: LayoutDashboard,
    title: "Intelligent Automation",
    description: "AI-driven reconciliation that reduces manual effort and operational costs.",
    color: "from-green-600 to-green-700",
  },
];

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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/85 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-green-300 font-medium text-sm uppercase tracking-wider mb-4"
            >
              Enterprise Fintech Solutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Future-Ready Reconciliation for Banks & Financial Institutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-green-100 leading-relaxed mb-10 max-w-2xl"
            >
              AI-driven, system-agnostic reconciliation and RegTech solutions that 
              simplify complex financial operations, ensure regulatory compliance, 
              and provide near real-time visibility across transactions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/product"
                className="inline-flex items-center gap-2 bg-gradient-blue text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Our Solution
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose NStechX
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Delivering measurable operational outcomes with enhanced transparency 
                and audit-ready compliance.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300 h-full group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
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

      {/* Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive Financial Operations Platform
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                NStechX provides secure, scalable technology that supports rapid 
                digital transformation while meeting evolving regulatory expectations 
                across India's expanding fintech landscape.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
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
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="space-y-4">
                  {[
                    { label: "Transaction Processing", value: "Real-time", gradient: "from-green-500 to-green-600" },
                    { label: "Compliance Coverage", value: "100%", gradient: "from-orange-500 to-orange-600" },
                    { label: "Integration Type", value: "System-Agnostic", gradient: "from-green-600 to-green-700" },
                    { label: "Automation Level", value: "AI-Driven", gradient: "from-orange-600 to-orange-700" },
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
                      <span className="text-foreground font-medium text-sm sm:text-base">{item.label}</span>
                      <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-bold text-xl sm:text-lg`}>
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
      <section className="py-24 bg-gradient-blue-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-orange-500" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Discover how Verif.ai can streamline your reconciliation, settlement, 
              and dispute management processes.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/product"
                className="inline-flex items-center gap-2 bg-gradient-blue text-white px-8 py-4 rounded-lg font-medium hover:shadow-2xl transition-all duration-300"
              >
                Learn About Verif.ai
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
