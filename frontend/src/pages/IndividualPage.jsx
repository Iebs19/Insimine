// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const IndividualPage = ({ type }) => {
//     const { id } = useParams();
//     const [page, setPage] = useState(null);
//     const getFullImageUrl = (relativePath) =>
//         `https://insimine.com/admin/api${relativePath}`;

//     useEffect(() => {
//         const fetchPageData = async () => {
//             try {
//                 // const response = await fetch(`https://www.insimine.com/admin/api/${type}/${id}`);
//                 const response = await fetch(
//                     `https://insimine.com/admin/api/${type}/${id}`
//                 );
//                 console.log(type, id);
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 const data = await response.json();
//                 setPage(data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchPageData();
//     }, [type, id]);

//     if (!page) {
//         return <div>Loading...</div>;
//     }

//     const renderTextContent = (block) => {
//         const textStyles = {
//             heading: "font-nas text-3xl font-bold",
//             subheading: "font-nas text-2xl font-semibold",
//             list: "list-disc pl-4", // Unordered list styling
//             points: "list-decimal pl-4", // Ordered list styling
//             normal_text: "",
//         };

//         return (
//             <div className="flex flex-col justify-center items-center">

//                 <div className={`text-left ${textStyles[block.text_type]}`}>
//                     {block.text_type === "point" ? (
//                         <ol className={textStyles.points}>
//                             {block.text.split("\n").map((line, i) => (
//                                 <li key={i}>{line}</li>
//                             ))}
//                         </ol>
//                     ) : block.text_type === "list" ? (
//                         <ul className={textStyles.list}>
//                             {block.text.split("\n").map((line, i) => (
//                                 <li key={i}>{line}</li>
//                             ))}
//                         </ul>
//                     ) : (
//                         block.text.split("\n").map((line, i) => (
//                             <p key={i} className={textStyles.normal_text}>{line}</p>
//                         ))
//                     )}
//                 </div>

//             </div>
//         );
//     };

//     return (
//         <div className="flex flex-col justify-center pt-4">
//             <div className="flex flex-row px-12 mt-4 items-center">
//                 <div className="font-nas font-bold text-4xl leading text-left">
//                     {page.title}
//                 </div>
//                 <div className="flex justify-center ml-4">
//                     <img src={page.mainImage} alt={page.title} className="w-auto" />
//                 </div>
//             </div>
//             <div className="flex flex-col gap-4 gap-y-12 pt-12 px-12">
//                 {page.content_blocks.map((block, index) => (
//                     <div
//                         key={index}
//                         className="flex flex-col justify-center items-center"
//                     >
//                         {block.block_type === "image" ? (
//                             <>
//                                 <div className="flex justify-center items-center">
//                                     <img
//                                         src={getFullImageUrl(block.image)}
//                                         alt={`${block.text}`}
//                                     />
//                                 </div>
//                                 {block.text && (
//                                     <div className="text-center text-sm pt-2">
//                                         {/* <sub>{block.text}</sub> */}
//                                     </div>
//                                 )}
//                             </>
//                         ) : (
//                             renderTextContent(block)
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default IndividualPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerButton from "@/components/magicui/shimmer-button";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const IndividualPage = ({ type }) => {
  const { id } = useParams();
  const [page, setPage] = useState(null);
  const getFullImageUrl = (relativePath) =>
    `https://insimine.com/admin/api${relativePath}`;

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(
          `https://insimine.com/admin/api/${type}/${id}`
        );
        console.log(type, id);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPage(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPageData();
  }, [type, id]);

  if (!page) {
    return <div>Loading...</div>;
  }

  const renderTextContent = (block) => {
    const textStyles = {
      heading: "font-nas text-3xl font-bold",
      subheading: "font-nas text-2xl font-semibold",
      list: "list-disc pl-4", // Unordered list styling
      points: "list-decimal pl-4 ", // Ordered list styling
      normal_text: "",
    };
    const sanitizeHTML = (html) => DOMPurify.sanitize(html);

    return (
        <div className="flex flex-col justify-center items-center">
          <div className={`text-left ${textStyles[block.text_type]}`}>
            {block.text_type === "point" ? (
              <ol className={textStyles.points}>
                {block.text
                  .split("\n")
                  .map((line, i) =>
                    parse(sanitizeHTML(`<li key=${i}>${line}</li>`))
                  )}
              </ol>
            ) : block.text_type === "list" ? (
              <ul className={textStyles.list}>
                {block.text
                  .split("\n")
                  .map((line, i) =>
                    parse(sanitizeHTML(`<li key=${i}>${line}</li>`))
                  )}
              </ul>
            ) : (
              block.text.split("\n").map((line, i) => (
                <div key={i} className={textStyles.normal_text}>
                  {parse(sanitizeHTML(line))}
                </div>
              ))
            )}
          </div>
        </div>
      );
  };

  return (
    <div className="flex flex-col justify-center pt-4">
      <div className="flex flex-row px-12 mt-4 items-center">
        <div className="font-nas font-bold text-4xl leading text-left">
          {page.title}
        </div>
        <div className="flex justify-center ml-4">
          <img src={page.mainImage} alt={page.title} className="w-auto" />
        </div>
      </div>
      <div className="flex flex-col gap-4 gap-y-12 pt-12 px-12">
        {page.content_blocks.map((block, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            {block.block_type === "image" ? (
              <>
                <div className="flex justify-center items-center">
                  <img
                    src={getFullImageUrl(block.image)}
                    alt={`${block.text}`}
                  />
                </div>
                {block.text && (
                  <div className="text-center text-sm pt-2">
                    {/* <sub>{block.text}</sub> */}
                  </div>
                )}
              </>
            ) : (
              renderTextContent(block)
            )}
          </div>
        ))}
      </div>
      {type === "event" && (
        <div className="flex justify-center mt-8">
          <ShimmerButton
            className="shadow-2xl mx-auto"
            background="darkBlue"
            borderRadius="4px"
            href="/contact-us"
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Plan a Meet
            </span>
          </ShimmerButton>
        </div>
      )}
    </div>
  );
};

export default IndividualPage;
