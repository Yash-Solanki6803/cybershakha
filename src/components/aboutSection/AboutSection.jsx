import Image from "next/image";
import Button from "../button/Button";
import Highlighter from "../highlighter/Highlighter";
import VectorComponent from "../vector/Vector";

function AboutSection() {
  return (
    <section id="about" className=" flex gap-4 h-screen relative">
      <div className="animate-pulse flex flex-auto flex-col w-[45%] justify-start items-start py-24 relative">
        <Highlighter size={3} className="top-1/3 left-1/2 -translate-x-1/2" />
        <div
          className=" h-3/5 w-3/5 absolute flex items-center rounded-lg shadow-lg hover:shadow-black  hover:scale-105 transition-all duration-700
        "
        >
          <Image
            src="/images/matrix.png"
            alt="Picture of a matrix"
            className="w-full h-full object-cover rounded-lg"
            width={400}
            height={400}
          />
        </div>
        <div className=" h-3/5 w-3/5 absolute bottom-24 right-24 rounded-lg shadow-lg hover:shadow-black   hover:scale-105 transition-all duration-700">
          <Image
            src="/images/typing.png"
            alt="Picture of a matrix"
            className="w-full h-full object-cover rounded-lg"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className=" flex flex-col flex-auto w-[55%] justify-start items-start p-24">
        <div className="h-3/4 w-full">
          <h4 className="text-brand_primary text-xl">About us</h4>
          <h2 className="text-7xl font-semibold">
            Discover Our Journey Protecting Your Digital World with Expertise
            and Care
          </h2>
          <p className="mt-10 text-xl ">
            At CyberShakha, we are not just a consultancy; we are your partners
            in digital security. Our dedication to excellence, personalized
            approach, and a commitment to staying at the forefront of
            cybersecurity make us the trusted choice for individuals and
            businesses alike.
          </p>
        </div>
        <Button className="mt-4">Read More</Button>
      </div>
      <VectorComponent size={5} className="bottom-0 -right-[500px]" />
      <Highlighter size={3} className="bottom-0 -right-[500px]" />
    </section>
  );
}

export default AboutSection;
