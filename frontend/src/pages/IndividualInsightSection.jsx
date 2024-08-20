import React, { useState, useEffect } from "react";
import RevealCard from "@/components/RevealCard";
import ShimmerButton from "@/components/magicui/shimmer-button";

const IndividualInsightSection = ({ title, fetchUrl, type }) => {
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Fetch the initial data
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        setData(data.slice(0, visibleItems));
        setHasMore(data.length > visibleItems);
      });
  }, [fetchUrl, visibleItems]);

  const handleLoadMore = () => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        const newVisibleItems = visibleItems + 6;
        setData(data.slice(0, newVisibleItems));
        setVisibleItems(newVisibleItems);
        setHasMore(data.length > newVisibleItems);
      });
  };

  return (
    <div>
      <div className="font-nas font-bold text-7xl mt-16">{title}</div>
      <span className="block mt-4 h-[2px] origin-left rounded-full bg-lightBlue/60" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8 gap-y-12">
        {data.map((item) => (
          <RevealCard
            key={item.id} 
            title={item.title}
            image={item.mainImage}
            // href={`https://insimine.com/admin/api/${type}/${item.id}`}
            height="300px"
            type={type}
            id={item.id}
          />
        ))}
      </div>
      {hasMore && (
        <ShimmerButton
          className="shadow-2xl mx-auto"
          background="darkBlue"
          borderRadius="4px"
          onClick={handleLoadMore}
        >
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Load more
          </span>
        </ShimmerButton>
      )}
    </div>
  );
};

export default IndividualInsightSection;
