// import React, { useState, useEffect } from "react";
// import RevealCard from "./RevealCard";
// import ShimmerButton from "@/components/magicui/shimmer-button";

// function BlogSection() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // Fetch blogs
//         const blogsResponse = await fetch("https://insimine.com/admin/api/blog/?limit=3&ordering=-created_at");
//         const blogsData = await blogsResponse.json();

//         // Fetch case studies
//         const caseStudiesResponse = await fetch("https://insimine.com/admin/api/case-study/?limit=3&ordering=-created_at");
//         const caseStudiesData = await caseStudiesResponse.json();

//         // Combine the data from all sources with an added type property
//         const combinedData = [
//           ...blogsData.map(item => ({ ...item, type: "blog" })),
//           ...caseStudiesData.map(item => ({ ...item, type: "case-study" })),
//         ];

//         // Sort the combined data by created_at in descending order
//         combinedData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

//         // Take the latest 3 items
//         setItems(combinedData.slice(0, 3));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-row gap-16 px-16 mb-4">
//       {items.length > 0 && (
//         <>
//           <RevealCard 
//             key={items[0].id} 
//             title={items[0].title} 
//             image={items[0].mainImage} 
//             // href={`https://insimine.com/admin/api/${items[0].type}/${items[0].id}`} 
//             height="400px" 
//             type={items[0].type}
//             id={items[0].id}
//           />
//           <div className="flex flex-col gap-8">
//             {items.slice(1).map((item) => (
//               <RevealCard
//                 key={item.id}
//                 title={item.title}
//                 image={item.mainImage}
//                 // href={`https://insimine.com/admin/api/${item.type}/${item.id}`}
//                 height="200px"
//                 type={item.type}
//                 id={item.id}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// function Insights() {
//   return (
//     <div>
//       <h1 className="font-nas text-4xl p-4">Latest Insights</h1>
//       <h1 className="font-nas text-2xl p-2 mb-8">
//         Dive into a world of knowledge with our blogs, case studies, and whitepapers.
//       </h1>
//       <BlogSection />
//       <div className="flex justify-center p-4">
//         <ShimmerButton
//           className="shadow-2xl"
//           background="darkBlue"
//           borderRadius="4px"
//           href="/insights"
//         >
//           <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
//             View all
//           </span>
//         </ShimmerButton>
//       </div>
//     </div>
//   );
// }

// export default Insights;

import React, { useState, useEffect } from "react";
import RevealCard from "./RevealCard";
import ShimmerButton from "@/components/magicui/shimmer-button";

function BlogSection() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch blogs
        const blogsResponse = await fetch("https://insimine.com/admin/api/blog/?limit=4&ordering=-created_at");
        const blogsData = await blogsResponse.json();

        // Fetch case studies
        const caseStudiesResponse = await fetch("https://insimine.com/admin/api/case-study/?limit=4&ordering=-created_at");
        const caseStudiesData = await caseStudiesResponse.json();

        // Combine the data from all sources with an added type property
        const combinedData = [
          ...blogsData.map(item => ({ ...item, type: "blog" })),
          ...caseStudiesData.map(item => ({ ...item, type: "case-study" })),
        ];

        // Sort the combined data by created_at in descending order
        combinedData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        // Take the latest 4 items
        setItems(combinedData.slice(0, 4));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-16 mb-4">
      {items.map((item) => (
        <RevealCard
          key={item.id}
          title={item.title}
          image={item.mainImage}
          height="300px"  // Consistent height across all items
          type={item.type}
          id={item.id}
        />
      ))}
    </div>
  );
}

function Insights() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16">
      <h1 className="font-nas text-xl sm:text-2xl md:text-3xl lg:text-4xl p-2 sm:p-4">
        Latest Insights
      </h1>
      <h2 className="font-nas text-base sm:text-lg md:text-xl lg:text-2xl p-2 sm:p-4 mb-4 lg:mb-8">
        Dive into a world of knowledge with our blogs, case studies, and whitepapers.
      </h2>
      <BlogSection />
      <div className="flex justify-center p-4">
        <ShimmerButton
          className="shadow-2xl"
          background="darkBlue"
          borderRadius="4px"
          href="/insights"
        >
          <span className="whitespace-pre-wrap text-center text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
            View all
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
}

export default Insights;
