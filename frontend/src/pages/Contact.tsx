import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contactus@nstechx.co.in",
    href: "mailto:contactus@nstechx.co.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7208814414",
    href: "tel:+917208814414",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "002 – Bldg no. 1, Manorama Nagar, Thane – 400604, Maharashtra",
    href: "https://maps.google.com/?q=Manorama+Nagar+Thane+Maharashtra",
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Get in touch with our team to learn how NStechX can transform 
              your financial operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Office" ? "_blank" : undefined}
                rel={item.label === "Office" ? "noopener noreferrer" : undefined}
                className="bg-card p-8 rounded-xl border border-border group hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Registered Office
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    NStechX India Private Limited
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    002 – Bldg no. 1, Manorama Nagar<br />
                    Thane – 400604<br />
                    Maharashtra, India
                  </p>
                </div>
                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                    <p>Saturday – Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-2xl p-2 border border-border">
              <div className="aspect-video bg-secondary/30 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-medium">Thane, Maharashtra</p>
                  <p className="text-sm text-muted-foreground">India</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
            Reach out to our team today and discover how Verif.ai can 
            streamline your reconciliation and compliance processes.
          </p>
          <a
            href="mailto:contactus@nstechx.co.in"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail size={18} />
            Email Us Today
          </a>
        </div>
      </section>
    </>
  );
}
