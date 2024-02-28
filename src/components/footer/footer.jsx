import Link from "next/link";
import Image from "next/image";
import {
  icon_fb,
  icon_instagram,
  icon_twitter,
  icon_youtube,
  icon_mail,
  icon_location,
  icon_phone,
} from "@/../public/icons";
import VectorComponent from "../vector/Vector";
import ContactForm from "../contactForm/ContactForm";

const social = {
  instagram: {
    link: "#",
    img: icon_instagram,
  },
  facebook: {
    link: "#",
    img: icon_fb,
  },
  twitter: {
    link: "#",
    img: icon_twitter,
  },
  youtube: {
    link: "#",
    img: icon_youtube,
  },
};

const contact = {
  mail: "hello@website.com",
  location: "Gujarat,India",
  phone: "+91 1234567890",
};

function Footer() {
  return (
    <section
      id="footer"
      className=" flex gap-4 h-[50vh] mt-40 py-10 relative overflow-hidden"
    >
      <div className="w-2/5 h-full  flex">
        <div className="w-3/5 h-full  flex flex-col">
          <div className="text-4xl font-semibold ">
            Cyber <span className="text-brand_primary">Shakha</span>
          </div>
          <p className="mt-2">Your trusted ally in the digital realm.</p>

          {/* social media links */}
          <nav className="w-full mt-10 flex gap-4">
            <Link
              href={social.instagram.link}
              className=" rounded-lg p-2 w-10 h-10 flex items-center justify-center hover:-brand_primary transition-all duration-300 cursor-pointer"
            >
              <Image
                src={social.instagram.img}
                alt="instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href={social.facebook.link}
              className=" rounded-lg p-2 w-10 h-10 flex items-center justify-center hover:-brand_primary transition-all duration-300 cursor-pointer"
            >
              <Image
                src={social.facebook.img}
                alt="facebook"
                width={11}
                height={20}
              />
            </Link>
            <Link
              href={social.twitter.link}
              className=" rounded-lg p-2  w-10 h-10 flex items-center justify-center hover:-brand_primary transition-all duration-300 cursor-pointer"
            >
              <Image
                src={social.twitter.img}
                alt="twitter"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href={social.youtube.link}
              className=" rounded-lg p-2  w-10 h-10  flex items-center justify-center hover:-brand_primary transition-all duration-300 cursor-pointer"
            >
              <Image
                src={social.youtube.img}
                alt="youtube"
                width={20}
                height={20}
              />
            </Link>
          </nav>
        </div>

        {/* quick links */}
        <div className="w-2/5 h-full ">
          <h4 className="text-xl">Quick Links</h4>
          <nav className="flex flex-col gap-4 mt-10">
            <Link
              className=" hover:text-brand_primary transition-all duration-300 cursor-pointer block"
              href="/about"
            >
              About us
            </Link>
            <Link
              className=" hover:text-brand_primary transition-all duration-300 cursor-pointer block"
              href="/blogs"
            >
              Blogs
            </Link>
            <Link
              className=" hover:text-brand_primary transition-all duration-300 cursor-pointer block"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className=" hover:text-brand_primary transition-all duration-300 cursor-pointer block"
              href="/terms"
            >
              Terms and Conditions
            </Link>
          </nav>
        </div>
      </div>
      <div className="w-3/5 h-full  flex">
        <div className="w-2/5 ">
          <h4 className="text-xl">Quick Links</h4>
          <article className="flex flex-col gap-4 mt-10">
            <div className="flex gap-4">
              <Image src={icon_mail} alt="mail" width={20} height={20} />
              <p>{contact.mail}</p>
            </div>
            <div className="flex gap-4">
              <Image
                src={icon_location}
                alt="location"
                width={20}
                height={20}
              />
              <p>{contact.location}</p>
            </div>
            <div className="flex gap-4">
              <Image src={icon_phone} alt="phone" width={20} height={20} />
              <p>{contact.phone}</p>
            </div>
          </article>
        </div>
        <div className="w-3/5 ">
          <ContactForm />
        </div>
      </div>
      <VectorComponent
        size={4}
        className="rotate-90 left-1/3 -bottom-[300px]"
      />
    </section>
  );
}

export default Footer;
