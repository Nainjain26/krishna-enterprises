import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import MarketingStats from "@/components/MarketingStats";
import MarketingStrategy from "@/components/MarketingStrategy";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero/>
    {/* <KeyFeatures/> */}
    <MarketingStrategy/>
    <MarketingStats/>
   </div>
  );
}
