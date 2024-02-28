import Carousel from "../../components/carousel/Carousel";
import VectorComponent from "@/components/vector/Vector";
function GoalSection() {
  return (
    <section id="goal" className=" flex flex-col h-screen mt-24 relative">
      <div className=" h-1/2 py-10 flex justify-center">
        <div className=" h-full w-1/2 text-center">
          <h4 className="text-brand_primary text-xl">Our Goals</h4>
          <h2 className="text-7xl font-semibold">
            Securing Your Digital World Together
          </h2>
          <p className="mt-10 text-xl">
            At CyberShakha, we are not just a consultancy; we are your partners
            in digital security. Our dedication to excellence, personalized
            approach, and a commitment to staying at the forefront of
            cybersecurity make us the trusted choice for individuals and
            businesses alike.
          </p>
        </div>
      </div>
      {/* <div className="border h-1/2">
        <Carousel />
      </div> */}
      <div className="px-24 py-10">
        <Carousel />
      </div>
    </section>
  );
}

export default GoalSection;
