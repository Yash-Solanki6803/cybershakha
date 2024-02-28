import Link from "next/link";

function ContactForm() {
  return (
    <div className="flex flex-col w-full h-full">
      <h4 className="text-xl">Send an automatic email</h4>

      <input
        className="mt-10 py-3 px-5 rounded-[20px] text-xl text-black focus:outline-brand_primary cursor-pointer"
        type="text"
        placeholder="Your name here"
      />
      <textarea
        className="mt-4 w-full py-3 px-5 text-xl rounded-[20px] text-black  focus:outline-brand_primary  cursor-pointer"
        placeholder="Your message here"
        name="message"
        id="message"
        cols="30"
        rows="3"
      ></textarea>
      <div className="mt-4 relative  cursor-pointer">
        <input
          className=" py-3 pl-5 pr-8 rounded-[20px] text-xl w-full text-black focus:outline-brand_primary"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <Link
          className="bg-brand_primary_dark py-2 px-7 rounded-full absolute top-1/2  -translate-y-1/2 right-2"
          href="/"
        >
          Send
        </Link>
      </div>
    </div>
  );
}

export default ContactForm;
