import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-fifa-gray">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-fifa-blue to-fifa-light-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-xl text-fifa-blue">FIFA Agent</h1>
              <p className="text-xs text-fifa-light-blue">Certification Prep</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link">Home</a>
            <a href="/#courses" className="nav-link">Courses</a>
            <a href="/practice-exam" className="nav-link">Practice Tests</a>
            <a href="#resources" className="nav-link">Resources</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-fifa-blue hover:text-fifa-navy">
              Sign In
            </Button>
            <Button className="btn-hero">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;