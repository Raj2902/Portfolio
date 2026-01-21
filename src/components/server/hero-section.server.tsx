import { getHeroSection } from "@/lib/services/hero.service";
import { HeroSectionClient } from "../client/hero-section.client";

export async function HeroSection() {
  const data = await getHeroSection();
  return <HeroSectionClient data={data} />;
}
