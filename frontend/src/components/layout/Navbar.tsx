import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "@/assets/NSTechX.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Products & Solutions",
    path: "/product",
    dropdown: [
      { label: "Reconciliation for Banks", path: "/reconciliation-banks" },
      { label: "Reconciliation for NBFCs", path: "/reconciliation-nbfcs" },
      { label: "Reconciliation for Insurance", path: "/reconciliation-insurance" },
      { label: "Reconciliation for Fintechs", path: "/reconciliation-fintechs" },
      { label: "Unified Lending Interface (ULI)", path: "/unified-lending-interface" },
      { label: "Fraud & Risk Management System", path: "/fraud-risk-management" },
    ],
  },
  { label: "About Us", path: "/about" },
  { label: "Our Team", path: "/our-team" },
  { label: "Careers", path: "/careers" },
  { label: "Newsletter and Media", path: "/newsletter-media" },
  { label: "Contact Us", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoImage}
              alt="NSTechX Logo"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.path} className="relative">
                  <button
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                    className={`text-sm font-medium transition-all duration-300 relative py-1 group flex items-center gap-1 ${
                      isActive(item.path) || item.dropdown.some(sub => isActive(sub.path))
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen === item.label ? 'rotate-180' : ''}`} />
                    <span className={`absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                      isActive(item.path) || item.dropdown.some(sub => isActive(sub.path)) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </button>
                  {dropdownOpen === item.label && (
                    <div
                      className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg py-2 z-50"
                      onMouseEnter={() => setDropdownOpen(item.label)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm transition-all duration-200 hover:bg-accent ${
                            isActive(subItem.path)
                              ? "text-primary bg-primary/5"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 relative py-1 group ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                    isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              )
            ))}
            
            {/* Request Demo CTA Button */}
            <Link
              to="/request-demo"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-accent rounded-md transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2">
              {/* Request Demo CTA Button - Mobile */}
              <Link
                to="/request-demo"
                onClick={() => setIsOpen(false)}
                className="mx-4 mb-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm"
              >
                Request Demo
              </Link>
              
              {navItems.map((item, index) => (
                <div key={item.path}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                        style={{ animationDelay: `${index * 50}ms` }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 animate-in slide-in-from-top-2 flex items-center justify-between ${
                          isActive(item.path) || item.dropdown.some(sub => isActive(sub.path))
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {dropdownOpen === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => {
                                setIsOpen(false);
                                setDropdownOpen(null);
                              }}
                              className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 animate-in slide-in-from-top-2 ${
                                isActive(subItem.path)
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-accent hover:text-foreground hover:translate-x-1"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 animate-in slide-in-from-top-2 ${
                        isActive(item.path)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground hover:translate-x-1"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
