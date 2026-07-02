import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PawTrail } from "@/components/PawTrail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Podaj Łapę — Premium salon groomerski w Starogardzie Gdańskim" },
      { name: "description", content: "Profesjonalny salon groomerski Podaj Łapę. Strzyżenie, kąpiel, trymowanie i pielęgnacja w luksusowym wydaniu. ul. Gdańska 17, Starogard Gdański." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <PawTrail />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
