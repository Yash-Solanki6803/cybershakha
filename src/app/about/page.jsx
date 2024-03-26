import AboutSection from "@/containers/aboutSection/AboutSection";
import StoryAndApproach from "@/components/storyAndApproach/StoryAndApproach";
import ServiceSection from "@/containers/serviceSection/ServiceSection";

import GoalSection from "@/containers/goalSection/GoalSection";
import { data } from "@/data";
const { services } = data;

function About() {
  return (
    <main className=" flex min-h-screen flex-col h-full pt-40">
      <AboutSection />
      <StoryAndApproach />
      <ServiceSection services={services} />
      <GoalSection />
    </main>
  );
}

export default About;
