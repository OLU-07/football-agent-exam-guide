import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CourseModules = () => {
  const modules = [
    {
      title: "FIFA Regulations Foundation",
      description: "Master the fundamental FIFA agent regulations, licensing requirements, and professional standards.",
      duration: "4 weeks",
      lessons: 12,
      icon: "📚"
    },
    {
      title: "Contract Law & Negotiations",
      description: "Learn the legal framework of player contracts, negotiation strategies, and dispute resolution.",
      duration: "3 weeks", 
      lessons: 10,
      icon: "⚖️"
    },
    {
      title: "Transfer Mechanisms",
      description: "Understand international transfers, solidarity payments, and training compensation regulations.",
      duration: "3 weeks",
      lessons: 9,
      icon: "🔄"
    },
    {
      title: "Ethics & Professional Conduct",
      description: "Explore ethical standards, conflict resolution, and maintaining professional integrity.",
      duration: "2 weeks",
      lessons: 6,
      icon: "🤝"
    },
    {
      title: "Financial Regulations",
      description: "Navigate financial fair play, agent fees, and economic aspects of football transfers.",
      duration: "2 weeks",
      lessons: 8,
      icon: "💰"
    },
    {
      title: "Exam Preparation & Practice",
      description: "Intensive exam simulation, practice tests, and final preparation strategies.",
      duration: "2 weeks",
      lessons: 15,
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 section-subtle" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text font-montserrat">
            Comprehensive Course Modules
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertly designed curriculum covers every aspect of FIFA agent certification, 
            from fundamental regulations to advanced negotiation strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="card-hover bg-white border-none shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{module.icon}</div>
                <CardTitle className="text-xl font-montserrat text-fifa-blue">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  {module.description}
                </p>
                <div className="flex justify-center gap-6 text-sm text-fifa-light-blue">
                  <span>{module.duration}</span>
                  <span>•</span>
                  <span>{module.lessons} lessons</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-fifa-blue text-fifa-blue hover:bg-fifa-blue hover:text-white"
                >
                  View Module Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="btn-hero text-lg px-12 py-6">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseModules;