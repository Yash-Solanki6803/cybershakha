import Image from "next/image";
import VectorComponent from "../../components/vector/Vector";
import Highlighter from "../../components/highlighter/Highlighter";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import {
  icon_training,
  icon_threat,
  icon_customize,
  icon_service,
} from "@/../public/icons";

function BlogSection() {
  return (
    <section
      id="blog"
      className="mt-24 flex sm:flex-row flex-col gap-32 min-h-screen relative "
    >
      <div className=" sm:w-[45%]">
        <Image
          className="object-cover w-full rounded-tr-[300px] rounded-bl-[100px] hover:shadow-2xl hover:shadow-slate-600 transition-all duration-300"
          src="/images/person_working.png"
          width={500}
          height={500}
        />
      </div>
      <div className=" sm:w-[55%]">
        <div className=" h-[30%] flex flex-col sm:items-start items-center">
          <h4 className="text-brand_primary text-xl">FEATURE POINT</h4>
          <h2 className="mt-10 text-5xl font-semibold sm:text-left text-center">
            Insights, Analysis, and Cybersecurity Wisdom:
          </h2>
        </div>
        <div className=" h-[70%] flex flex-col justify-center gap-14">
          <h3 className="underline text-4xl font-semibold text-center mt-14">
            Explore blog categories
          </h3>
          <div className=" h-full grid grid-cols-2 sm:px-14 px-10 sm:gap-0 gap-4">
            <CategoryCard
              src={icon_customize}
              title="Customized Security Solutions"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <CategoryCard
              src={icon_threat}
              title="Vulnerability Assessment"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <CategoryCard
              src={icon_service}
              title="24/7 Incident Response"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <CategoryCard
              src={icon_training}
              title="User Training Programs"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </div>
      <VectorComponent
        size={5}
        className="top-0 -left-[500px] transform rotate-180"
      />
      <Highlighter size={3} className="top-0 -left-[500px]" />
      <VectorComponent size={5} className="bottom-0 -right-[500px] transform" />
      <Highlighter size={3} className="bottom-0 -right-[500px]" />
    </section>
  );
}

export default BlogSection;
