import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import heroImage from "@/assets/webp_images/hero-fintech.webp";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden py-5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              transition={{ duration: 0.4 }}
              className="inline-block text-green-300 font-medium text-xs sm:text-sm uppercase tracking-wider mb-3"
            >
              ENTERPRISE REG-TECH SOLUTIONS
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
            >
              Future-Ready Reconciliation For Banks & Financial Institutions
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm sm:text-base text-green-50 leading-relaxed mb-4 md:mb-6 max-w-3xl mx-auto lg:mx-0 space-y-2"
            >
              <li>• Reg-tech company solving high-impact challenges in the Indian banking and financial services ecosystem</li>
              <li>• Young and dynamic organization empowering banks, NBFCs, and financial institutions</li>
              <li>• Provides secure, scalable, future-ready technology for digital transformation and regulatory compliance</li>
              <li>• Solutions deliver measurable operational outcomes, enhanced transparency, and audit-ready compliance</li>
              <li>• Strong growth in India's expanding fintech landscape</li>
              <li>• Combines deep domain expertise with cutting-edge technology</li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/reconciliation-banks"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 backdrop-blur-sm text-white border border-white/30 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Explore Our Solution
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-blue-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-blue-500" />
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
                to="/request-demo"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
