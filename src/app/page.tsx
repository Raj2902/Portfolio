import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Chatbot } from "@/components/chatbot";
import { ContactSection } from "@/components/contact-section";
import { BlogSection } from "@/components/blog-section";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Chatbot />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
