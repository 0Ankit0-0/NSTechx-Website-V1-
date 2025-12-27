import { Target, Eye, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
// import aboutImage from "@/assets/about-office.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To solve real, high-impact challenges faced by the Indian banking and financial services ecosystem through innovative technology solutions.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading provider of secure, scalable, and future-ready technology that supports rapid digital transformation in India's expanding fintech landscape.",
  },
];

// const team = [
//   {
//     name: "Leadership Team",
//     role: "Chief Executive Officer",
//     placeholder: "CEO",
//   },
//   {
//     name: "Leadership Team",
//     role: "Chief Technology Officer",
//     placeholder: "CTO",
//   },
//   {
//     name: "Leadership Team",
//     role: "Chief Operating Officer",
//     placeholder: "COO",
//   },
//   {
//     name: "Leadership Team",
//     role: "Head of Product",
//     placeholder: "HP",
//   },
// ];

// const advisors = [
//   {
//     name: "Advisory Board",
//     role: "Strategic Advisor",
//     placeholder: "SA",
//   },
//   {
//     name: "Advisory Board",
//     role: "Investment Partner",
//     placeholder: "IP",
//   },
// ];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-[hsl(220,60%,10%)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-orange-500" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
              Future-Ready AI – driven, system-agnostic RegTech Solutions for
              Banks and Financial Institutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              NStechX India Pvt. Ltd. is a young and dynamic organization that
              empowers banks, NBFCs, and financial institutions with secure,
              scalable, and future-ready technology. Our solutions support rapid
              digital transformation while meeting evolving regulatory
              expectations. We are designed to deliver measurable operational
              outcomes, enhanced transparency, and audit-ready compliance.
              Positioned for strong growth in India's expanding fintech
              landscape, NStechX combines deep domain expertise with
              cutting-edge technology to address the most pressing challenges in
              financial services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why NStechX */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why NStechX?
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-12 md:space-y-16">
            <AnimatedSection>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Why We Exist
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                The regulatory landscape for Banks and NBFCs is becoming increasingly complex, dynamic, and data-intensive. Frequent regulatory updates, tighter supervision, and growing expectations around transparency, accuracy, and risk management have made compliance a strategic challenge rather than a back-office function. We have formed this Regulatory Technology (RegTech) company with a clear mission: to help financial institutions meet regulatory requirements efficiently, accurately, and at scale.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                What We Do
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                Our RegTech solutions are purpose-built for the Banking and NBFC ecosystem, addressing critical regulatory and operational pain points through automation and intelligent controls. Our product suite includes solutions for Reconciliation, Unified Lending Interface (ULI) enablement, Fraud Risk Management Systems (FRMS), and other regulatory reporting and compliance needs.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                By reducing manual effort, eliminating data inconsistencies, and enabling real-time monitoring, our solutions help institutions: Stay continuously compliant with evolving regulations, minimize operational and regulatory risk, improve audit readiness and reporting accuracy, focus more on growth and customer outcomes.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                We believe regulatory compliance should be proactive, predictable, and technology-driven. Our goal is to become a trusted RegTech partner for Banks and NBFCs, transforming compliance from a cost centre into a source of operational strength and confidence.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Solutions
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              "Plug-and-Play Integration – Seamlessly integrates with your existing systems with minimal effort",
              "AI and block chain technology for adding accuracy, speed and Regulatory Compliance",
              "Flexible, Low-Impact Onboarding – Go live quickly without major changes to your core platforms",
              "Eliminate Manual Inefficiencies – Automate operations to reduce cost, errors, and dependency on manual processes",
              "Built for Transaction Complexity – Designed to handle high-volume, multi-rail digital transactions with ease",
              "Compliance-Ready by Design – Meets growing regulatory, audit, and governance requirements out of the box",
              "Truly Independent & Auditable – Provides transparent, system-agnostic reconciliation and reporting",
              "Real-Time Visibility & Automation – Instant insights, real-time reports, and proactive exception handling",
            ].map((feature, index) => (
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

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-10 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full group"
                >
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-16 md:py-20 lg:py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals driving innovation in financial
                technology.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-8 rounded-xl border border-border text-center group hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-secondary-foreground">
                      {member.placeholder}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Advisors & Investors
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advisors & Investors
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Strategic partners supporting our growth and vision.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            {advisors.map((advisor, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-8 rounded-xl border border-border text-center group hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {advisor.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {advisor.role}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
            {[
              {
                stat: "2024",
                label: "Founded",
                gradient: "from-green-500 to-green-600",
              },
              {
                stat: "India",
                label: "Headquartered",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                stat: "RegTech",
                label: "Focus Area",
                gradient: "from-emerald-500 to-teal-500",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {item.stat}
                  </p>
                  <p className="text-muted-foreground">{item.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}