import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Farsø Lægehus</h3>
            <p className="text-sm md:text-base text-primary-foreground/90 leading-relaxed">
              Din lokale læge i Farsø. Vi tilbyder professionel lægebehandling 
              med fokus på tryghed, nærhed og kvalitet.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="text-sm md:text-base text-primary-foreground/90">
                  Hovedgaden 42<br />
                  9640 Farsø
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="tel:+4598123456"
                  className="text-sm md:text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  +45 98 12 34 56
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="mailto:kontakt@farsolaegehus.dk"
                  className="text-sm md:text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  kontakt@farsolaegehus.dk
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">Åbningstider</h4>
            <div className="space-y-2 text-sm md:text-base text-primary-foreground/90">
              <p>Mandag - Torsdag: 08:00 - 16:00</p>
              <p>Onsdag: 08:00 - 18:00</p>
              <p>Fredag: 08:00 - 15:00</p>
              <p className="pt-2 text-primary-foreground font-medium">
                Akut? Ring 1813
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Farsø Lægehus. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;