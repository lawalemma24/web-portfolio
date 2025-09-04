import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <main className="container  mx-auto px-12">
        <HeroSection />
        <AboutSection />
        <Footer />
      </main>

    </div>
  );
}
