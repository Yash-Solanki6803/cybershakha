import Carousel from "../../components/carousel/Carousel";
function GoalSection() {
  return (
    <section id="goal" className=" flex flex-col min-h-[80vh] mt-24 relative">
      <div className=" md:h-1/2 py-10 flex justify-center">
        <div className=" h-full lg:w-2/3 text-center">
          <h4 className="text-brand_primary text-xl">Our Goals</h4>
          <h2 className="xl:text-7xl text-5xl font-semibold">
            Securing Your Digital World Together
          </h2>
          <p className="mt-10 lg:text-xl">
            At CyberShakha, we are not just a consultancy; we are your partners
            in digital security. Our dedication to excellence, personalized
            approach, and a commitment to staying at the forefront of
            cybersecurity make us the trusted choice for individuals and
            businesses alike.
          </p>
        </div>
      </div>

      <div className=" xl:px-0 md:px-24 md:py-10">
        <Carousel />
      </div>
    </section>
  );
}

export default GoalSection;
