import React from "react";

function StoryAndApproach() {
  return (
    <section className="flex flex-col items-center min-h-[70vh]">
      {/* Story */}
      <article className=" py-10 flex flex-col lg:flex-row">
        <h3 className="font-semibold text-center lg:text-left text-5xl text-brand_primary lg:w-1/3">
          Our Story
        </h3>
        <p className="lg:ml-14 lg:mt-0 mt-10 text-justify font-light leading-9 lg:text-4xl md:text-3xl lg:w-2/3">
          CyberShakha was founded on the belief that cybersecurity is not just a
          service but a critical component of today's digital world. In an era
          where cyber threats continue to grow in complexity, our team of
          seasoned cybersecurity professionals came together to create a
          consultancy that stands out for its expertise, innovation, and
          unwavering dedication to our clients.
        </p>
      </article>
      <hr className="w-1/2" />
      {/* Approach */}
      <article className=" py-10 flex flex-col-reverse lg:flex-row">
        <p className="lg:ml-14 lg:mt-0 mt-10 text-justify font-light leading-9 lg:text-4xl md:text-3xl lg:w-2/3">
          CyberShakha was founded on the belief that cybersecurity is not just a
          service but a critical component of today's digital world. In an era
          where cyber threats continue to grow in complexity, our team of
          seasoned cybersecurity professionals came together to create a
          consultancy that stands out for its expertise, innovation, and
          unwavering dedication to our clients.
        </p>
        <h3 className="font-semibold text-center lg:text-left text-5xl text-brand_primary lg:w-1/3">
          Our Approach
        </h3>
      </article>
    </section>
  );
}

export default StoryAndApproach;
