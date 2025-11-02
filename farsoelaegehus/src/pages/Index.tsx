import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OpeningHours from "@/components/OpeningHours";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <News />
        <OpeningHours />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
