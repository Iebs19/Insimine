// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ShimmerButton from "@/components/magicui/shimmer-button";
// import parse from "html-react-parser";
// import DOMPurify from "dompurify";

// const IndividualPage = ({ type }) => {
//   const { id } = useParams();
//   const [page, setPage] = useState(null);

//   const getFullImageUrl = (relativePath) => {
//     return `http://localhost:8000/${relativePath}`;
//   };

//   useEffect(() => {
//     const fetchPageData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8000/api/${type}/${id}`
//         );
//         console.log(type, id);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setPage(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchPageData();
//   }, [type, id]);

//   if (!page) {
//     return <div>Loading...</div>;
//   }

//   const sanitizeHTML = (html) => DOMPurify.sanitize(html);

//   return (
//     <div className="flex flex-col justify-center pt-4">
//       <div className="flex flex-row px-12 mt-4 items-center">
//         <div className="font-nas font-bold text-4xl leading text-left">
//           {page.title}
//         </div>
//         <div className="flex justify-center ml-4">
//           <img src={page.mainImage} alt={page.title} className="w-2/3" />
//         </div>
//       </div>
//       <div className="flex flex-col gap-4 gap-y-12 pt-12 px-12">
//         {page.content_blocks.map((block, index) => (
//           <div
//             key={index}
//             className="flex flex-col "
//           >
//             {block.block_type === "image" ? (
//               <>
//                 <div className="flex justify-center items-center">
//                   <img
//                     src={getFullImageUrl(block.image, block.image_size)}
//                     alt={`${block.text}`}
//                   />
//                 </div>
//                 {block.text && (
//                   <div className="text-center text-sm pt-2">
//                     <sub>{parse(sanitizeHTML(block.text))}</sub>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div>{parse((block.text))}</div>
//             )}
//           </div>
//         ))}
//       </div>
//       {type === "event" && (
//         <div className="flex justify-center mt-8">
//           <ShimmerButton
//             className="shadow-2xl mx-auto"
//             background="darkBlue"
//             borderRadius="4px"
//             href="/contact-us"
//           >
//             <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
//               Plan a Meet
//             </span>
//           </ShimmerButton>
//         </div>
//       )}
//     </div>
//   );
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

  const getFullImageUrl = (relativePath) => {
    return `https://www.insimine.com/${relativePath}`;
    // return `https://www.insimine.com/${relativePath}`;
  };

  const getImageWidth = (imageSize) => {
    switch (imageSize) {
      case "thumbnail":
        return 300;
      case "medium":
        return 450;
      case "large":
        return 650;
      default:
        return 450;
    }
  };

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(
          `https://insimine.com/admin/api/${type}/${id}`
          // `http://127.0.0.1:8000/api/${type}/${id}`
        );
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

  const sanitizeHTML = (html) => DOMPurify.sanitize(html);

  return (
    <div className="flex flex-col justify-center pt-4">
      <div className="flex flex-row px-12 mt-4 items-center justify-between">
        <div className="font-nas font-bold text-4xl leading text-left">
          {page.title}
        </div>
        <div className="flex justify-center ml-4">
          <img src={page.mainImage} alt={page.title} className="w-[450px] h-auto" />
        </div>
      </div>
      <div className="flex flex-col gap-4 gap-y-12 pt-12 px-12">
        {page.content_blocks.map((block, index) => (
          <div key={index} className="flex flex-col">
            {block.block_type === "image" ? (
              <>
                <div className="flex justify-center items-center">
                  <img
                    src={getFullImageUrl(block.image)}
                    alt={block.text ? block.text : `Content Image ${index + 1}`}
                    width={getImageWidth(block.image_size)}
                  />
                </div>
                {block.text && (
                  <div className="text-center text-sm pt-2">
                    <sub>{parse(sanitizeHTML(block.text))}</sub>
                  </div>
                )}
              </>
            ) : (
              <div className="text-left">{parse(sanitizeHTML(block.text))}</div>
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

