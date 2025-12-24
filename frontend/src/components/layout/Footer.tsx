import { Link } from "react-router-dom";
import logoImage from "@/assets/NSTechX_Vertical_Layout.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={logoImage}
                alt="NSTechX Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-secondary-foreground/70 max-w-md leading-relaxed">
              A fintech innovation company empowering banks, NBFCs, and financial 
              institutions with secure, scalable, and future-ready technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-secondary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Product", path: "/product" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-secondary-foreground">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li>contactus@nstechx.co.in</li>
              <li>+91 7208814414</li>
              <li className="leading-relaxed">
                002 – Bldg no. 1, Manorama Nagar,
                <br />
                Thane – 400604, Maharashtra
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10">
          <p className="text-center text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} NStechX India Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
