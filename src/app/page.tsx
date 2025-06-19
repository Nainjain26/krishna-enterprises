import CommitmentMessage from "@/components/CommitmentMessage";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarketingFAQ from "@/components/MarketingFAQ";
// import KeyFeatures from "@/components/KeyFeatures";
import MarketingStats from "@/components/MarketingStats";
import MarketingStrategy from "@/components/MarketingStrategy";


export default function Home() {
  return (
   <div>
    <Hero/>
    {/* <KeyFeatures/> */}
    <MarketingStrategy/>
    <CommitmentMessage/>
    <MarketingStats/>
    <MarketingFAQ/>
    <Footer/>
   </div>
  );
}
