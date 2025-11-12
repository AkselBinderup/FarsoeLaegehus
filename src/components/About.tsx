import  { Card, CardContent } from "@/components/ui/card";
import doctor1 from "@/assets/Steinar.jpg";
import doctor2 from "@/assets/image.png";
import { Heart, Users, Clock } from "lucide-react";

const About = () => {
  const doctors = [
    {
      name: "Steinar M Sandberg",
      role: "Speciallæge i almen medicin",
      image: doctor1,
      description: "Specialiseret i...",
    },
    {
      name: "Rikke Pedersen",
      role: "Sekræter / SOSA",
      image: doctor2,
      description: "Fokus på ...",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Omsorg",
      description: "Vi behandler hver patient med respekt og empati",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Nærhed",
      description: "Din lokale læge, der kender dig og din familie",
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Tilgængelighed",
      description: "Fleksible åbningstider og hurtig hjælp når du har brug for det",
    },
  ];

  return (
    <section id="om-os" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Om Farsø Lægehus
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Hos Farsø Lægehus arbejder vi for at give dig og din familie den bedste 
            lægebehandling i trygge og professionelle rammer. Vi kombinerer moderne 
            medicin med personlig pleje og omsorg.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 md:p-8 text-center space-y-4">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Doctors */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">
            Mød vores læger
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {doctors.map((doctor, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 md:p-8 text-center space-y-4">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover rounded-full border-4 border-primary/20"
                    />
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                    {doctor.name}
                  </h4>
                  <p className="text-sm md:text-base text-primary font-medium">
                    {doctor.role}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {doctor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;