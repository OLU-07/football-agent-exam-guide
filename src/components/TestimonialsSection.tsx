import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcus Rodriguez",
      role: "Licensed FIFA Agent",
      country: "Spain",
      image: "👨‍💼",
      quote: "This program completely transformed my understanding of FIFA regulations. The comprehensive curriculum and practice exams prepared me perfectly for the real certification exam.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Sports Lawyer & FIFA Agent",
      country: "Singapore", 
      image: "👩‍💼",
      quote: "As a sports lawyer transitioning to agent work, this course filled all the gaps in my knowledge. The legal modules were particularly excellent and up-to-date.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Player Representative",
      country: "Egypt",
      image: "🧑‍💼",
      quote: "I failed my first attempt at the FIFA exam, but this program helped me pass with flying colors on my second try. The practice tests were invaluable.",
      rating: 5
    },
    {
      name: "Elena Volkov",
      role: "FIFA Certified Agent",
      country: "Russia",
      image: "👩‍💼",
      quote: "The quality of instruction and support throughout the program was exceptional. I now represent several professional players with confidence.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text font-montserrat">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful FIFA agents who transformed their careers 
            with our comprehensive certification program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-hover bg-fifa-gray border-none shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-fifa-blue font-montserrat">
                      {testimonial.name}
                    </h4>
                    <p className="text-fifa-light-blue text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-fifa-gold text-lg">★</span>
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;