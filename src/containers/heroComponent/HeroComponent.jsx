import Image from "next/image";
import Button from "../../components/button/Button";
import LockImage from "@/framerComponents/lockImage/LockImage";
function HeroComponent() {
  return (
    <section
      id="hero"
      className="flex   lg:flex-row flex-col gap-4 lg:h-screen  min-h-screen lg:pb-0 pt-40 pb-14"
    >
      <div className=" flex flex-auto flex-col xl:w-3/5 lg:w-1/2  justify-between lg:items-start lg:text-left text-center">
        <div className="mt-10">
          <h1 className="xl:text-8xl lg:text-7xl text-5xl font-bold">
            Empowering You in the Digital Age
          </h1>
          <p className="pt-9 lg:text-2xl sm:text-base text-sm">
            Welcome to CyberShakha, your trusted partner in navigating the
            complex landscape of cybersecurity. At CyberShakha, we believe that
            security is not just a service; it's a commitment to safeguarding
            your digital assets and empowering you with the knowledge to thrive
            in the online world.
          </p>
        </div>
        <Button className="mt-10 text-center">Contact us!</Button>
      </div>
      <LockImage />
      <div className="flex lg:hidden flex-auto lg:mt-0 mt-10 xl:w-2/5 lg:w-1/2 lg:justify-end justify-center relative">
        <Image
          src="/images/lock.png"
          alt="Picture of a lock"
          className="lg:w-full w-3/4 object-contain hover:customDropShadow transition-all duration-500 hover:translate-x-6 hover:translate-y-6 hover:scale-105"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}

export default HeroComponent;
