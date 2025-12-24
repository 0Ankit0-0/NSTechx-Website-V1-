import { Target, Eye, Users } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To solve real, high-impact challenges faced by the Indian banking and financial services ecosystem through innovative technology solutions.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the leading provider of secure, scalable, and future-ready technology that supports rapid digital transformation in India's expanding fintech landscape.",
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
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight mb-6">
              About NStechX
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              A fintech innovation company built with a vision to solve real, 
              high-impact challenges faced by the Indian banking and financial 
              services ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
                  meeting evolving regulatory expectations. We are designed 
                  to deliver measurable operational outcomes, enhanced 
                  transparency, and audit-ready compliance.
                </p>
                <p>
                  Positioned for strong growth in India's expanding fintech 
                  landscape, NStechX combines deep domain expertise with 
                  cutting-edge technology to address the most pressing 
                  challenges in financial services.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="NStechX Office"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background p-10 rounded-2xl border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals driving innovation in financial technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border text-center group hover:border-primary/30 transition-colors"
              >
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary-foreground">
                    {member.placeholder}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors & Investors */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advisors & Investors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic partners supporting our growth and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-xl border border-border text-center group hover:border-primary/30 transition-colors"
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {advisor.name}
                </h3>
                <p className="text-muted-foreground text-sm">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { stat: "2024", label: "Founded" },
              { stat: "India", label: "Headquartered" },
              { stat: "RegTech", label: "Focus Area" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {item.stat}
                </p>
                <p className="text-secondary-foreground/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
