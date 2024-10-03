// import React, { useState, useEffect } from "react";
// import RevealCard from "@/components/RevealCard";
// import ShimmerButton from "@/components/magicui/shimmer-button";

// // Update InsightsColumn to receive data as a prop
// const InsightsColumn = ({ title, href, data, type }) => {
//   return (
//     <div>
//       <div className="font-nas text-3xl ml-16">
//         {title}
//         <span className="block mt-2 h-[2px] origin-left rounded-full bg-lightBlue/60" />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 h-[300px]">
//         {data?.map((item, index) => (
//           <RevealCard
//             key={index}
//             title={item.title}
//             image={item.mainImage} 
//             type={type}
//             id={item.id}
//             // href={item.pdf ? item.pdf : null}
//           />
//         ))}
//       </div>
//       <div className="flex justify-center p-4">
//         <ShimmerButton
//           className="shadow-2xl"
//           background="darkBlue"
//           borderRadius="4px"
//           href={href}
//         >
//           <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
//             View all
//           </span>
//         </ShimmerButton>
//       </div>
//     </div>
//   );
// };

// const Insights = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [caseStudies, setCaseStudies] = useState([]);
//   const [whitePapers, setWhitePapers] = useState([]);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch blogs
//     fetch("https://insimine.com/admin/api/blog/")
//       .then(response => response.json())
//       .then(data => setBlogs(data.slice(0, 3))) // Adjust this if the API response format is different

//     // Fetch case studies
//     fetch("https://insimine.com/admin/api/case-study/")
//       .then(response => response.json())
//       .then(data => setCaseStudies(data.slice(0, 3))) // Adjust this if the API response format is different

//     // Fetch white papers
//     fetch("https://insimine.com/admin/api/white-paper/")
//       .then(response => response.json())
//       .then(data => setWhitePapers(data.slice(0, 3))) // Adjust this if the API response format is different

//     // Fetch events
//     fetch("https://insimine.com/admin/api/event/")
//       .then(response => response.json())
//       .then(data => setEvents(data.slice(0, 3))) // Adjust this if the API response format is different
//   }, []);

//   return (
//     <div className="flex flex-col justify-center pt-4 gap-8">
//       <div className="font-nas font-bold text-7xl">Insights</div>
//       <div className="flex flex-col gap-8">
//         <InsightsColumn title="Blogs" href="/blogs" data={blogs} type='blog'/>
//         <InsightsColumn title="Case Studies" href="/case-studies" data={caseStudies} type='case-study'/>
//         <InsightsColumn title="White Papers" href="/white-papers" data={whitePapers} type='white-paper'/>
//         <InsightsColumn title="Events" href="/events" data={events} type='event'/>
//       </div>
//     </div>
//   );
// };

// export default Insights;


import React, { useState, useEffect } from "react";
import RevealCard from "@/components/RevealCard";
import ShimmerButton from "@/components/magicui/shimmer-button";

// Updated InsightsColumn to handle responsive layouts properly
const InsightsColumn = ({ title, href, data, type }) => {
  return (
    <div className="mt-8">
      <div className="font-nas text-3xl ml-4 sm:ml-8 lg:ml-16">
        {title}
        <span className="block mt-2 h-[2px] origin-left rounded-full bg-lightBlue/60" />
      </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-8 mt-6">
        {data?.map((item, index) => (
          <RevealCard
            key={index}
            title={item.title}
            image={item.mainImage}
            type={type}
            id={item.id}
          />
        ))}
      </div>

      {/* View All button */}
      <div className="flex justify-center p-4">
        <ShimmerButton
          className="shadow-2xl"
          background="darkBlue"
          borderRadius="4px"
          href={href}
        >
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            View all
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
};

const Insights = () => {
  const [blogs, setBlogs] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [whitePapers, setWhitePapers] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch blogs
    fetch("https://insimine.com/admin/api/blog/")
      .then(response => response.json())
      .then(data => setBlogs(data.slice(0, 3))) // Adjust this if the API response format is different

    // Fetch case studies
    fetch("https://insimine.com/admin/api/case-study/")
      .then(response => response.json())
      .then(data => setCaseStudies(data.slice(0, 3))) // Adjust this if the API response format is different

    // Fetch white papers
    fetch("https://insimine.com/admin/api/white-paper/")
      .then(response => response.json())
      .then(data => setWhitePapers(data.slice(0, 3))) // Adjust this if the API response format is different

    // Fetch events
    fetch("https://insimine.com/admin/api/event/")
      .then(response => response.json())
      .then(data => setEvents(data.slice(0, 3))) // Adjust this if the API response format is different
  }, []);

  return (
    <div className="flex flex-col justify-center pt-4 gap-8 px-4 sm:px-6 lg:px-8">
      <div className="font-nas font-bold text-4xl sm:text-5xl lg:text-7xl">Insights</div>
      <div className="flex flex-col gap-16">
        {blogs && <InsightsColumn title="Blogs" href="/blogs" data={blogs} type='blog' />}
        {caseStudies && <InsightsColumn title="Case Studies" href="/case-studies" data={caseStudies} type='case-study' />}
        {whitePapers !== 0 && <InsightsColumn title="White Papers" href="/white-papers" data={whitePapers} type='white-paper' />}
        {events && <InsightsColumn title="Events" href="/events" data={events} type='event' />}
      </div>
    </div>
  );
};

export default Insights;
