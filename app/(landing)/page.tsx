import LadingHero from "@/components/LadingHero";
import { LandingNavbar } from "@/components/LadingNavbar";

export default function LadingPage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LadingHero />
    </div>
  )
}
