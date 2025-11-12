import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Calendar } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      date: "15. november 2025",
      title: "Juleferie 2025",
      description:
        "Lægehuset holder lukket fra d. 23. december til d. 2. januar. I nødstilfælde kontakt vagtlægen på 1813.",
    },
    {
      date: "1. november 2025",
      title: "Influenzavaccination",
      description:
        "Bestil tid til din influenzavaccination. Ring eller book online. Vi anbefaler vaccination for alle over 65 år og risikogrupper.",
    },
    {
      date: "15. oktober 2025",
      title: "Ny læge på holdet",
      description:
        "Vi byder velkommen til Dr. Maria Pedersen, som fremover vil være at finde i klinikken tirsdage og torsdage.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <Info className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Seneste nyt
            </h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground">
            Hold dig opdateret med nyheder og vigtige beskeder fra lægehuset
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-xl text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;