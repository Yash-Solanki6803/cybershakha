import AboutSection from "@/containers/aboutSection/AboutSection";
import StoryAndApproach from "@/components/storyAndApproach/StoryAndApproach";
import ServiceSection from "@/containers/serviceSection/ServiceSection";
import {
  icon_eye,
  icon_lock,
  icon_time,
  icon_training,
  icon_threat,
  cyber_security,
  protection,
  scan_virus,
  icon_service,
} from "@/../public/icons";
import GoalSection from "@/containers/goalSection/GoalSection";

const defaultServices = [
  {
    src: icon_lock,
    title: "Cyber security Assessment ",
  },
  {
    src: icon_eye,
    title: "Intrusion Detection and Prevention",
  },
  {
    src: icon_time,
    title: "Incident Response and Recovery",
  },
  {
    src: icon_training,
    title: "Cyber security Assessment ",
  },
  {
    src: icon_threat,
    title: "Intrusion Detection and Prevention",
  },
  {
    src: cyber_security,
    title: "Incident Response and Recovery",
  },
  {
    src: protection,
    title: "Cyber security Assessment ",
  },
  {
    src: scan_virus,
    title: "Intrusion Detection and Prevention",
  },
  {
    src: icon_service,
    title: "Incident Response and Recovery",
  },
];

function About() {
  return (
    <main className=" flex min-h-screen flex-col h-full pt-40">
      <AboutSection />
      <StoryAndApproach />
      <ServiceSection services={defaultServices} />
      <GoalSection />
    </main>
  );
}

export default About;
