import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";

function HeroComponent() {
  return (
    <section id="hero" className=" flex gap-4 h-[600px]">
      <div className=" flex flex-auto flex-col w-3/5 justify-between items-start">
        <div>
          <h1 className=" text-8xl font-bold">
            Empowering You in the Digital Age
          </h1>
          <p className="pt-9 md:text-2xl">
            Welcome to CyberShakha, your trusted partner in navigating the
            complex landscape of cybersecurity. At CyberShakha, we believe that
            security is not just a service; it's a commitment to safeguarding
            your digital assets and empowering you with the knowledge to thrive
            in the online world.
          </p>
        </div>
        <Button>Contact us!</Button>
      </div>
      <div className=" flex flex-auto w-2/5 justify-end">
        <Image
          src="/images/lock.png"
          alt="Picture of a lock"
          className="w-full object-contain"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}

export default HeroComponent;
