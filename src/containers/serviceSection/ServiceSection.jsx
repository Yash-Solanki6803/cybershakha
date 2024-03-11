import ServiceCard from "../../components/serviceCard/ServiceCard";
import { icon_eye, icon_lock, icon_time } from "../../../public/icons";
import Link from "next/link";

function ServiceSection() {
  return (
    <section id="service" className=" flex flex-col h-screen items-center ">
      <div className=" h-1/2 flex flex-col justify-center items-center  lg:w-3/4">
        <h4 className="text-brand_primary text-xl">Our Service</h4>
        <h2 className="lg:text-7xl text-5xl font-semibold text-center">
          Protecting Your Digital Assets Expertly
        </h2>
        <p className="mt-10 lg:text-xl text-lg text-center ">
          Embark on a journey to fortify and safeguard your digital wealth with
          unparalleled expertise. Explore the intricacies of securing your
          valuable digital assets through meticulous guidance and comprehensive
          strategies. Arm yourself with the knowledge to expertly navigate the
          realm of digital security and ensure the longevity of your online
          legacy.
        </p>
      </div>
      <div className="h-1/2 flex lg:flex-row flex-col  lg:gap-0 gap-4 w-full items-center justify-around relative mt-10">
        <div className="absolute text-brand_primary lg:top-0 -top-10 lg:right-20 right-0 hover:text-white cursor-pointer transition-all animate-bounce">
          <Link href="/about">View More &gt;&gt;&gt;</Link>
        </div>
        <ServiceCard
          src={icon_lock}
          title="Cyber security Assessment "
          description="Identify and mitigate vulnerabilities in your digital infrastructure with our comprehensive penetration testing services."
        />
        <ServiceCard
          src={icon_eye}
          title="Intrusion Detection and Prevention"
          description="Ensure the robustness of your digital security with our comprehensive security audits and assessments."
        />
        <ServiceCard
          src={icon_time}
          title="Incident Response and Recovery"
          description="Empower your team with the knowledge and skills to navigate the digital landscape securely."
        />
      </div>
    </section>
  );
}

export default ServiceSection;
