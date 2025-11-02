import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Phone, Mail, MapPin } from "lucide-react";

const OpeningHours = () => {
  const hours = [
    { day: "Mandag", time: "08:00 - 16:00" },
    { day: "Tirsdag", time: "08:00 - 16:00" },
    { day: "Onsdag", time: "08:00 - 18:00" },
    { day: "Torsdag", time: "08:00 - 16:00" },
    { day: "Fredag", time: "08:00 - 15:00" },
    { day: "Weekend", time: "Lukket" },
  ];

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Åbningstider & Kontakt
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Vi er her for at hjælpe dig. Kontakt os eller book en tid i dag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Opening Hours Card */}
          <Card className="bg-card border-border shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Clock className="w-6 h-6 text-accent" />
                Åbningstider
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Akut?</strong> Ring 1813 uden for åbningstid eller ved livstruende situationer ring 112
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="bg-card border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">Kontaktoplysninger</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                  <p className="text-muted-foreground">
                    Hovedgaden 42<br />
                    9640 Farsø<br />
                    Danmark
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                  <a 
                    href="tel:+4598123456"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    +45 98 12 34 56
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Åben for telefonisk konsultation kl. 08:00-09:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:kontakt@farsolaegehus.dk"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    kontakt@farsolaegehus.dk
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <div className="bg-muted rounded-lg overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.123456789!2d9.3389!3d56.7733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDQ2JzI0LjAiTiA5wrAyMCcyMC4wIkU!5e0!3m2!1sda!2sdk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Farsø Lægehus lokation"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;