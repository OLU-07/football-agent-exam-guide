const StatsSection = () => {
  const stats = [
    {
      number: "2000+",
      label: "Successful Students",
      description: "Certified FIFA agents worldwide"
    },
    {
      number: "85%",
      label: "Pass Rate",
      description: "Industry-leading success rate"
    },
    {
      number: "50+",
      label: "Countries",
      description: "Students from around the globe"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Expert assistance when you need it"
    }
  ];

  return (
    <section className="py-20 bg-fifa-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl font-bold text-fifa-gold mb-2 font-montserrat">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-white/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;