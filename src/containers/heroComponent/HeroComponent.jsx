import Image from "next/image";
import Button from "../../components/button/Button";

function HeroComponent() {
  return (
    <section
      id="hero"
      className="flex md:flex-row flex-col gap-4 h-screen py-40"
    >
      <div className=" flex flex-auto flex-col md:w-3/5  justify-between md:items-start md:text-left text-center">
        <div className="mt-10">
          <h1 className="lg:text-8xl text-5xl font-bold">
            Empowering You in the Digital Age
          </h1>
          <p className="pt-9 lg:text-2xl md:text-base sm:text-base text-sm">
            Welcome to CyberShakha, your trusted partner in navigating the
            complex landscape of cybersecurity. At CyberShakha, we believe that
            security is not just a service; it's a commitment to safeguarding
            your digital assets and empowering you with the knowledge to thrive
            in the online world.
          </p>
        </div>
        <Button className="mt-10 text-center">Contact us!</Button>
      </div>
      <div className=" flex flex-auto md:mt-0 mt-10 md:w-2/5 md:justify-end justify-center relative">
        <Image
          src="/images/lock.png"
          alt="Picture of a lock"
          className="md:w-full w-3/4 object-contain hover:customDropShadow transition-all duration-500 hover:translate-x-6 hover:translate-y-6 hover:scale-105"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}

export default HeroComponent;
