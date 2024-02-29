import HeroComponent from "@/containers/heroComponent/HeroComponent";
import AboutSection from "@/containers/aboutSection/AboutSection";
import ServiceSection from "@/containers/serviceSection/ServiceSection";
import BlogSection from "@/containers/blogSection/BlogSection";
import GoalSection from "@/containers/goalSection/GoalSection";
import TestimonialSection from "@/containers/testimonialSection/TestimonialSection";
import Footer from "@/containers/footer/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col    h-full">
      <HeroComponent />
      <AboutSection />
      <ServiceSection />
      <BlogSection />
      <GoalSection />
      <TestimonialSection />
      {/* <Footer /> */}
    </main>
  );
}
