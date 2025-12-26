import { Target, Eye, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import aboutImage from "@/assets/about-office.jpg";

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

const team = [
  {
    name: "Leadership Team",
    role: "Chief Executive Officer",
    placeholder: "CEO",
  },
  {
    name: "Leadership Team",
    role: "Chief Technology Officer",
    placeholder: "CTO",
  },
  {
    name: "Leadership Team",
    role: "Chief Operating Officer",
    placeholder: "COO",
  },
  {
    name: "Leadership Team",
    role: "Head of Product",
    placeholder: "HP",
  },
];

const advisors = [
  {
    name: "Advisory Board",
    role: "Strategic Advisor",
    placeholder: "SA",
  },
  {
    name: "Advisory Board",
    role: "Investment Partner",
    placeholder: "IP",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-[hsl(220,60%,10%)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-orange-500" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              About NStechX
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A fintech innovation company built with a vision to solve real,
              high-impact challenges faced by the Indian banking and financial
              services ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Financial Institutions
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  NStechX India Pvt. Ltd. is a young and dynamic organization
                  that empowers banks, NBFCs, and financial institutions with
                  secure, scalable, and future-ready technology.
                </p>
                <p>
                  Our solutions support rapid digital transformation while
                  meeting evolving regulatory expectations. We are designed to
                  deliver measurable operational outcomes, enhanced
                  transparency, and audit-ready compliance.
                </p>
                <p>
                  Positioned for strong growth in India's expanding fintech
                  landscape, NStechX combines deep domain expertise with
                  cutting-edge technology to address the most pressing
                  challenges in financial services.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src={aboutImage}
                alt="NStechX Office"
                className="rounded-2xl shadow-xl w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
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
      <section className="py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals driving innovation in financial
                technology.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      {/* Advisors & Investors */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advisors & Investors
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strategic partners supporting our growth and vision.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
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
