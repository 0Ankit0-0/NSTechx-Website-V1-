import {
  AlertTriangle,
  TrendingUp,
  FileSearch,
  Shield,
  Clock,
  Layers,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import productImage from "@/assets/product-verifai.jpg";
import verifLogo from "@/assets/Verif w TM.png";

const problems = [
  {
    icon: AlertTriangle,
    title: "Manual Reconciliation Costs",
    description: "High operational costs and resource drain from labor-intensive manual reconciliation processes.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transaction Complexity",
    description: "Increasing volume and complexity of digital transactions across multiple channels and systems.",
  },
  {
    icon: FileSearch,
    title: "Regulatory Scrutiny",
    description: "Rising regulatory and audit requirements demanding comprehensive compliance documentation.",
  },
  {
    icon: Shield,
    title: "Audit Trail Gaps",
    description: "Lack of independent, auditable reconciliation solutions creating compliance risks.",
  },
  {
    icon: Clock,
    title: "Real-Time Demands",
    description: "Urgent demand for real-time reporting and automation in fast-paced financial environments.",
  },
  {
    icon: Layers,
    title: "System Integration",
    description: "Challenges in integrating multiple legacy and modern systems for unified operations.",
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <img
                  src={verifLogo}
                  alt="Verif.ai Logo"
                  className="h-8 w-auto"
                />
                <span className="text-primary font-medium">Verif.ai</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Intelligent Reconciliation Platform
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Verif.ai is NStechX's flagship AI-driven, end-to-end reconciliation, 
                settlement, and dispute management platform designed for modern 
                banking and fintech environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Built as a future-ready RegTech solution, Verif.ai transforms how 
                financial institutions manage transaction reconciliation, regulatory 
                reporting, and dispute resolution—bringing intelligence, automation, 
                and control into a single platform.
              </p>
            </div>
            <div className="relative">
              <img
                src={productImage}
                alt="Verif.ai Platform Interface"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Platform Type</p>
                    <p className="font-semibold text-foreground">RegTech Solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Challenges We Address
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern financial institutions face complex operational challenges 
              that demand intelligent, automated solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-background p-8 rounded-xl border border-border group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Core Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Verif.ai Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Verif.ai delivers a comprehensive platform that unifies reconciliation, 
                settlement, and dispute management into a single, intelligent workflow. 
                Our AI-driven approach reduces manual intervention while ensuring 
                complete regulatory compliance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With system-agnostic integration capabilities, Verif.ai connects 
                seamlessly with existing infrastructure, providing financial 
                institutions with the flexibility to modernize operations without 
                disrupting established workflows.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get In Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
              Verif.ai delivers tangible results that transform financial operations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "90%", label: "Reduction in manual processing" },
              { metric: "Real-time", label: "Transaction visibility" },
              { metric: "100%", label: "Audit compliance coverage" },
              { metric: "24/7", label: "Automated monitoring" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {item.metric}
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
