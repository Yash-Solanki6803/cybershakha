import React from "react";
import Testimonial from "../../components/testimonial/Testimonial";
import VectorComponent from "../../components/vector/Vector";
import { Image1, Image2, Image3, Image4 } from "@/../public/clients";

function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className=" flex flex-col gap-4 items-center min-h-screen"
    >
      <div className=" lg:w-1/2 text-center pt-10">
        <h4 className="text-brand_primary text-xl">Testimonials</h4>
        <h2 className="lg:text-7xl text-5xl font-semibold">
          See what others people are saying
        </h2>
        <p className="mt-4">
          At CyberShakha, we are not just a consultancy; we are your partners in
          digital security. Our dedication to excellence, personalized approach,
          and a commitment to staying at the forefront of cybersecurity make us
          the trusted choice for individuals and businesses alike.
        </p>
      </div>
      <div className="mt-10 w-full lg:grid lg:grid-cols-2 flex flex-col items-center place-items-center gap-10">
        <Testimonial
          image={Image1}
          name="Miss Sammy Feeney"
          position="Investor Metrics Executive"
          rating={5}
        />
        <Testimonial
          image={Image2}
          name="Rosemary Mante"
          position="Human Integration Agent"
          rating={5}
        />
        <Testimonial
          image={Image3}
          name="Regina Weissnat"
          position="Regional Branding Consultant"
          rating={5}
        />
        <Testimonial
          image={Image4}
          name="Marianne Bode"
          position="Investor Metrics Executive"
          rating={5}
        />
      </div>
      <VectorComponent size={4} className="-left-[200px] rotate-180" />
    </section>
  );
}

export default TestimonialSection;
