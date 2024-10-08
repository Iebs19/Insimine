import React from "react";
import RevealCard from "@/components/RevealCard";
import ShimmerButton from "@/components/magicui/shimmer-button";

const IndividualInsightSection = ({ title, data }) => {
  return (
    <div>
      <div className="font-nas font-bold text-7xl mt-16">{title}</div>
      <span className="block mt-4 h-[2px]  origin-left rounded-full bg-lightBlue/60" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8 gap-y-12">
        {data.map((blog, index) => (
          <RevealCard
            key={index}
            title={blog.title}
            image={blog.image}
            href="/blogs"
            height="300px"
          />
        ))}
      </div>
      <ShimmerButton
        className="shadow-2xl mx-auto"
        background="darkBlue"
        borderRadius="4px"
        // href={href}
      >
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Load more
        </span>
      </ShimmerButton>
    </div>
  );
};

export default IndividualInsightSection;
