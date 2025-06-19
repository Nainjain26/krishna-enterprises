import Hero from "@/components/Hero";
// import KeyFeatures from "@/components/KeyFeatures";
import MarketingStats from "@/components/MarketingStats";
import MarketingStrategy from "@/components/MarketingStrategy";


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
