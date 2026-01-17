import { db } from "../db";
import { HeroSectionInterface } from "@/interfaces/hero_section.interface";

export async function getHeroSection() {
  const [rows] = await db.query("SELECT * FROM hero_section");
  const [data] = rows as unknown as HeroSectionInterface[];
  return data;
}
