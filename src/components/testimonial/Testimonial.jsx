import Image from "next/image";
function Testimonial({
  image = "/clients/Image1.jpg",
  name = "Miss Sammy Feeney",
  position = "HOD , at ABC",
  rating = 5,
  text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet saepe provident nobis, porro optio vero perferendis nostrum velit aliquam inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, optio.",
}) {
  return (
    <div className=" flex flex-col gap-2  rounded-lg sm:h-[250px] sm:w-3/4 p-4 bg-black_light">
      <div className="h-1/2 ">
        <p>{text}</p>
      </div>
      <div className="h-1/2  flex justify-start items-center gap-4">
        <div className=" flex items-center rounded-full h-[80px] w-[80px]  ">
          <Image
            src={image}
            alt="Picture of the client"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <div className=" flex flex-col items-start justify-between h-full w-full">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p>{position}</p>
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-brand_primary">
                  &#11088;
                </span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
