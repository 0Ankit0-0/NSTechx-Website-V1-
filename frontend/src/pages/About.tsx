import {
  Target,
  Eye,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import aboutImage from "@/assets/about-office.jpg";

// Data for Mission & Vision
const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To solve real, high-impact challenges faced by the Indian banking and financial services ecosystem through innovative technology solutions.",
    color: "text-blue-600",
    borderColor: "border-blue-600",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "We believe regulatory compliance should be proactive, predictable, and technology-driven. Our goal is to become a trusted RegTech partner for Banks and NBFCs, transforming compliance from a cost centre into a source of operational strength.",
    color: "text-green-600",
    borderColor: "border-green-600",
  },
];

// Data for Q&A Section
const qaItems = [
  {
    question: "Why does NStechX exist?",
    answer:
      "The regulatory landscape for Banks and NBFCs is becoming increasingly complex, dynamic, and data-intensive. Frequent updates, tighter supervision, and growing expectations around transparency have made compliance a strategic challenge. We formed this RegTech company to help financial institutions meet these requirements efficiently, accurately, and at scale.",
  },
  {
    question: "What exactly do we do?",
    answer:
      "Our RegTech solutions are purpose-built for the Banking and NBFC ecosystem. We address critical operational pain points through automation and intelligent controls. Our product suite includes solutions for Reconciliation, Unified Lending Interface (ULI) enablement, Fraud Risk Management Systems (FRMS), and other regulatory reporting needs.",
  },
];

// Data for Key Features
const features = [
  "Plug-and-Play Integration – Seamlessly integrates with existing systems.",
  "AI & Blockchain – Adds accuracy, speed, and regulatory compliance.",
  "Flexible Onboarding – Go live quickly without major core platform changes.",
  "Eliminate Inefficiencies – Automate operations to reduce cost and errors.",
  "Transaction Complexity – Handles high-volume, multi-rail digital transactions.",
  "Compliance-Ready – Meets audit and governance requirements out of the box.",
  "Independent & Auditable – Provides transparent, system-agnostic reporting.",
  "Real-Time Visibility – Instant insights and proactive exception handling.",
];

export default function About() {
  return (
    <>
      {/* ------------------- HERO SECTION ------------------- */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden py-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={aboutImage}
            alt="Modern fintech banking dashboard"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/90 to-green-900/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
            >
              Future-Ready AI–driven, System-Agnostic{" "}
              <br className="hidden md:block" />
              <span className="text-green-400">
                RegTech Solutions for Banks and Financial Institutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-md text-green-50 leading-relaxed mb-8 max-w-3xl text-justify lg:text-left"
            >
              NStechX India Pvt. Ltd. is a young and dynamic organization that
              empowers banks, NBFCs, and financial institutions with secure,
              scalable, and future-ready technology. Our solutions support rapid
              digital transformation while meeting evolving regulatory
              expectations. We are designed to deliver measurable operational
              outcomes, enhanced transparency, and audit ready compliance.
              Positioned for strong growth in India's expanding fintech
              landscape, NStechX combines deep domain expertise with
              cutting-edge technology to address the most pressing challenges in
              financial services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ------------------- MISSION & VISION (Moved Up) ------------------- */}
      <section className="py-16 bg-white relative -mt-10 z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`bg-white p-8 rounded-xl shadow-xl border-l-4 ${value.borderColor} h-full`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-full bg-slate-50`}>
                        <IconComponent className={`w-8 h-8 ${value.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed text-justify">
                      {value.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------- Q&A / CORE PURPOSE ------------------- */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Understanding NStechX
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Answering the critical questions about who we are and the value
                we drive.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column: Questions & Answers */}
            <div className="space-y-8">
              {qaItems.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <div className="flex gap-3 mb-3">
                      <HelpCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-slate-800">
                        {item.question}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-justify pl-9">
                      {item.answer}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Right Column: The Outcomes (What we deliver) */}
            <AnimatedSection delay={0.3}>
              <div className="bg-slate-900 text-white p-8 rounded-2xl h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">
                  What outcomes do we deliver?
                </h3>
                <p className="text-slate-300 mb-6">
                  By reducing manual effort and eliminating data
                  inconsistencies, we help institutions:
                </p>
                <ul className="space-y-4">
                  {[
                    "Stay continuously compliant with regulations",
                    "Minimize operational and regulatory risk",
                    "Improve audit readiness and accuracy",
                    "Focus more on growth and customer outcomes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-lg text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ------------------- KEY FEATURES ------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Key Features
              </h2>
              <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }} // hover:bg-slate-50
                  className="p-6 rounded-xl border border-slate-100 hover:border-green-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 h-full"
                >
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-green-700" />
                  </div>
                  <span className="text-slate-700 text-base font-medium leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
