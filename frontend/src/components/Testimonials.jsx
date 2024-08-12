import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const ReviewCard = ({ author, company, content }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <FormatQuoteIcon
          style={{ height: 32, width: 32, transform: "scaleX(-1)" }}
        />
        <div className="flex flex-col justify-center">
          <figcaption className="text-sm font-medium dark:text-white">
            {author}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{company}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-left">"{content}"</blockquote>
    </figure>
  );
};

function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/testinomial/"); // Replace with your actual API endpoint
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        console.log(err);
      }
    };
    getReviews();
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="font-nas text-4xl mb-4">What our clients say </h1>
      <Marquee reverse pauseOnHover className="[--duration:100s]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default Testimonials;
