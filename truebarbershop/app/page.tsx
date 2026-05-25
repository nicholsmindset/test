import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import BrandReview from "@/components/BrandReview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Team />
      <Reviews />
      <BrandReview />
      <Contact />
      <Footer />
    </>
  );
}
