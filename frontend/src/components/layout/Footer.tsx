import { Link } from "react-router-dom";
import logoImage from "@/assets/logo_wo_bg.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[hsl(220,60%,8%)]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImage}
              alt="NSTechX Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm">
            {[
              { label: "Home", path: "/" },
              // { label: "Products & Solutions", path: "/product" },
              { label: "About Us", path: "/about" },
              { label: "Our Team", path: "/our-team" },
              { label: "Careers", path: "/careers" },
              { label: "Newsletter and Media", path: "/newsletter-media" },
              { label: "Contact Us", path: "/contact" },
            ].map((link, index, arr) => (
              <span key={link.path} className="flex items-center gap-2 sm:gap-6">
                <Link
                  to={link.path}
                  className="text-[hsl(220,10%,70%)] hover:text-green-400 transition-colors"
                >
                  {link.label}
                </Link>
                {index < arr.length - 1 && (
                  <span className="text-white/20 hidden sm:inline">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm text-[hsl(220,10%,70%)]">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-center text-sm text-[hsl(220,10%,60%)]">
            © {new Date().getFullYear()} NStechX India Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}