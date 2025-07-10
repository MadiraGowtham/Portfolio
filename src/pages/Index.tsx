import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Skills from "@/components/Portfolio/Skills";
import Projects from "@/components/Portfolio/Projects";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
