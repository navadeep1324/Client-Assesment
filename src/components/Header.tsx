import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Client Assessment logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-gray-200 shadow-[0_4px_12px_rgba(0,88,165,0.15)]">
      <div className="container px-4 md:py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="PulseBoard" className="h-12 md:h-16 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8 ml-auto mr-5">
            <a href="#features" className="text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-sm tracking-[0.5px]">
              Features
            </a>
            <a href="#solutions" className="text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-sm tracking-[0.5px]">
              Products
            </a>
            <a href="#contact" className="text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-sm tracking-[0.5px]">
              Contact Us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              className="hidden md:block bg-[#0066FF] text-white hover:bg-[#0052CC] rounded-lg px-6 py-2 shadow-sm font-medium text-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-white transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <a
            href="#features"
            className="text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-base tracking-[0.5px] py-3 border-b border-gray-100 block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#solutions"
            className="text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-base tracking-[0.5px] py-3 border-b border-gray-100 block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-[#000] hover:text-[#10B2E6] transition-colors font-medium text-base tracking-[0.5px] py-3 border-b border-gray-100 block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
          <div className="pt-4">
            <Button
              className="w-full bg-[#0066FF] text-white hover:bg-[#0052CC] rounded-lg px-6 py-3 shadow-sm font-medium text-sm"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
