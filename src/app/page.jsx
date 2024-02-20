import HeroComponent from "@/components/heroComponent/HeroComponent";
import AboutSection from "@/components/aboutSection/AboutSection";
import ServiceSection from "@/components/serviceSection/ServiceSection";
import BlogSection from "@/components/blogSection/BlogSection";
import GoalSection from "@/components/goalSection/GoalSection";
import TestimonialSection from "@/components/testimonialSection/TestimonialSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col    h-full">
      <HeroComponent />
      <AboutSection />
      <ServiceSection />
      <BlogSection />
      <GoalSection />
      <TestimonialSection />
    </main>
  );
}
