import Vector from "@/components/vectorbroad/VectorBroad";
import Highlighter from "@/components/highlighter/Highlighter";

function HeroDecors() {
  return (
    <>
      <Vector
        size={9}
        className="transform -rotate-[20deg] -top-[120px] -left-[600px] lg:-left-[350px]"
      />
      <Highlighter size={2} className="-top-[10%] left-0" />
      <Highlighter size={4} className="right-0 top-[300px] opacity-10" />
    </>
  );
}

export default HeroDecors;
