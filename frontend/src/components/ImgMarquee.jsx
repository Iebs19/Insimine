import Marquee from "@/components/magicui/marquee";
import DataLake from "../assets/Data_Lake.png";
import DataEng from "../assets/Data_Eng.png";
import GenAI from "../assets/GenAI.png"

const logos = [
  {
    name: "Data Lake",
    img: DataLake,
  },
  {
    name: "Data Eng",
    img: DataEng,
  },
  {
    name: "Gen AI",
    img: GenAI,
  },
];

const ImgMarquee = () => {
  return (
    <div className="relative flex h-[200px] flex-col items-center justify-center gap-4 overflow-hidden px-20">
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full w-full cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default ImgMarquee;
