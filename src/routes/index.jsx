import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Expertise from "@/components/site/Expertise";
import Projects from "@/components/site/Projects";
import Engineering from "@/components/site/Engineering";
import Experience from "@/components/site/Experience";
import Background from "@/components/site/Background";
import GitHubSection from "@/components/site/GitHubSection";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Umar Nagieb — Software Developer | AI Integration & Web Applications" },
      {
        name: "description",
        content:
          "Portfolio of Umar Nagieb, a software developer in Indonesia building web applications, backend integrations and applied AI solutions for businesses.",
      },
      {
        property: "og:title",
        content: "Umar Nagieb — Software Developer | AI Integration & Web Applications",
      },
      {
        property: "og:description",
        content:
          "Building practical software. Integrating intelligent technology. Selected work, technical expertise and experience from an independent software developer.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Engineering />
        <Experience />
        <Background />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}