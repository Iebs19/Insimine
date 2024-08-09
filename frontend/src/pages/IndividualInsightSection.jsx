import React from "react";
import RevealCard from "@/components/RevealCard";

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
    </div>
  );
};

export default IndividualInsightSection;
