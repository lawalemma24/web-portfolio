import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container  mx-auto px-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        </div>
        <Footer />
     

     </main>
  );
}
