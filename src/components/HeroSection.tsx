import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-fifa-blue/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Become a Certified 
            <span className="block text-fifa-gold">FIFA Agent</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Master the FIFA Agent Regulations and pass your certification exam with our comprehensive, 
            industry-leading preparation program designed by football industry experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-hero text-lg px-12 py-6">
              Start Learning Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-secondary text-lg px-12 py-6"
              onClick={() => window.location.href = '/practice-exam'}
            >
              Take Practice Exam
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-fifa-gold rounded-full"></div>
              <span>Trusted by 2000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-fifa-gold rounded-full"></div>
              <span>85% Pass Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-fifa-gold rounded-full"></div>
              <span>Industry Expert Instructors</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-fifa-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;