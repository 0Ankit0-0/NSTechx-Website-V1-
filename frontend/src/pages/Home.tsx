import { Link } from "react-router-dom";
import { Shield, Zap, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fintech.jpg";

const features = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Audit-ready solutions that meet evolving regulatory expectations and standards.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Near real-time visibility across all transactions for faster decision-making.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Automation",
    description: "AI-driven reconciliation that reduces manual effort and operational costs.",
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
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern fintech banking dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Enterprise Fintech Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
              Future-Ready Reconciliation for Banks & Financial Institutions
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed mb-10 max-w-2xl">
              AI-driven, system-agnostic reconciliation and RegTech solutions that 
              simplify complex financial operations, ensure regulatory compliance, 
              and provide near real-time visibility across transactions.
            </p>
            <Link
              to="/product"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Explore Our Solution
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose NStechX
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering measurable operational outcomes with enhanced transparency 
              and audit-ready compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive Financial Operations Platform
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                NStechX provides secure, scalable technology that supports rapid 
                digital transformation while meeting evolving regulatory expectations 
                across India's expanding fintech landscape.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                  <span className="text-foreground font-medium">Transaction Processing</span>
                  <span className="text-primary font-semibold">Real-time</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                  <span className="text-foreground font-medium">Compliance Coverage</span>
                  <span className="text-primary font-semibold">100%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                  <span className="text-foreground font-medium">Integration Type</span>
                  <span className="text-primary font-semibold">System-Agnostic</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                  <span className="text-foreground font-medium">Automation Level</span>
                  <span className="text-primary font-semibold">AI-Driven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
            Discover how Verif.ai can streamline your reconciliation, settlement, 
            and dispute management processes.
          </p>
          <Link
            to="/product"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Learn About Verif.ai
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
