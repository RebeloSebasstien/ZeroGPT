import AccurateAIDetection from "@/components/Home/AccurateAIDetection";
import ChooseYourPlan from "@/components/ChooseYourPlan";
import ClientTestimonials from "@/components/Home/ClientTestimonials";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Hero from "@/components/Home/Hero";
import OurBlogs from "@/components/Home/OurBlogs";
import ScienceBehindZeroGPT from "@/components/Home/ScienceBehindZeroGPT";
import StartDetectingNow from "@/components/Home/StartDetectingNow";
import WhyChooseZeroGPT from "@/components/Home/WhyChooseZeroGPT";

export default function Home() {
  return (
    <main>  
      <Hero />
      <WhyChooseZeroGPT />
      <AccurateAIDetection />
      <ChooseYourPlan />
      <ClientTestimonials />
      <ScienceBehindZeroGPT />
      <StartDetectingNow />
      <FrequentlyAskedQuestions />
      <OurBlogs />
    </main>
  );
}
