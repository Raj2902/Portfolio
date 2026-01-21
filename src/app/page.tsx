import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Chatbot } from "@/components/chatbot";
import { ContactSection } from "@/components/contact-section";
import { BlogSection } from "@/components/blog-section";
import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { Suspense } from "react";
import { HeroSection } from "@/components/server/hero-section.server";
import { HeroSkeleton } from "@/components/skeletons/hero.skeleton";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection />
          </Suspense>
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
