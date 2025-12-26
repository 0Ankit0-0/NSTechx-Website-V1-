import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

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
      <section className="py-24 bg-[hsl(220,60%,10%)]  overflow-hidden relative">
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
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Get in touch with our team to learn how NStechX can transform 
              your financial operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-blue-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <motion.a
                  href={item.href}
                  target={item.label === "Office" ? "_blank" : undefined}
                  rel={item.label === "Office" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-8 rounded-2xl border border-border group hover:border-primary/30 hover:shadow-2xl transition-all duration-300 block"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.value}
                  </p>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
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
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-2xl p-2 border border-border shadow-lg">
                <div className="aspect-video bg-gradient-blue-light rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">Thane, Maharashtra</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-blue-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Reach out to our team today and discover how Verif.ai can 
              streamline your reconciliation and compliance processes.
            </p>
            <motion.a
              href="mailto:contactus@nstechx.co.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-blue text-white px-8 py-4 rounded-lg font-medium hover:shadow-2xl transition-all duration-300"
            >
              <Mail size={18} />
              Email Us Today
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
