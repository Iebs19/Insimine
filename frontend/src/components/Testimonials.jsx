import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const reviews = [
    {
      name: "Director of Data Science",
      username: "Data Driven Pharma Company",
      body: "InsiMine’s big data management services have significantly enhanced our data processing capabilities. Their tailored solutions have allowed us to handle massive datasets with ease, resulting in more efficient and accurate data analysis. We highly recommend their services to any organization seeking excellence in data management.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Head of Research",
      username: "Consumer Goods Company",
      body: "InsiMine’s expertise in AI and GenAI has been a game-changer for our research and development. Their innovative approaches have accelerated our drug discovery processes and improved our predictive analytics. The team’s knowledge and professionalism are unmatched.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "CIO",
      username: "MedTech Company",
      body: "The data lake implementation provided by InsiMine has streamlined our data storage and retrieval processes. Their solution has enabled us to consolidate our disparate data sources into a centralized repository, facilitating better data governance and advanced analytics. We are extremely satisfied with their services.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "VP of Data Management",
      username: "Pharmaceutical Company",
      body: "InsiMine’s comprehensive big data solutions have transformed our data landscape. Their ability to manage and analyze large volumes of data has given us a competitive edge in the pharmaceutical industry. The team’s expertise and commitment to excellence are evident in every project they undertake.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Chief Medical Officer",
      username: "Precision Health Company",
      body: "The innovative GenAI services provided by InsiMine have revolutionized our approach to personalized medicine. Their cutting-edge solutions have enabled us to develop more accurate predictive models and improve patient outcomes. The team’s expertise and dedication are truly impressive.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "Director of AI Research",
      username: "Diagnostic Company",
      body: "InsiMine’s data engineering and AI integration services have been instrumental in advancing our research capabilities. Their solutions have enhanced our data processing efficiency and enabled us to leverage AI for groundbreaking discoveries. We highly recommend InsiMine for their exceptional services and expertise.",
      img: "https://avatar.vercel.sh/james",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <FormatQuoteIcon style={{height: 32, width: 32, transform: 'scaleX(-1)'}}/>
        <div className="flex flex-col justify-center">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-left">{body}</blockquote>
    </figure>
  );
};

function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <h1 className="font-nas text-4xl">What our clients say </h1>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default Testimonials;
