// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../components/ui/dialog";
// import Form from "./Form";

// const RevealCard = ({ title, image, height, type, id }) => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const handleDialogClose = () => {
//     setIsDialogOpen(false);
//   };

//   const handleDialogOpen = () => {
//     setIsDialogOpen(true);
//   };

//   const navigate = useNavigate();
//   return (
//     <div className={`relative h-[${height}] w-full group`}>
//       <div className="flex h-1/2 flex-col justify-center bg-black p-6 z-10">
//         <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
//       </div>

//       <div
//         className="absolute inset-0 z-0 transition-transform duration-500 group-hover:top-1/2 group-hover:right-1/2 bg-slate-200"
//         style={{
//           backgroundImage: `url(${image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//         }}
//       ></div>
//       {type === "event" ? (
//         navigate(`/${type}/${id}`)
//       ) : (
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <div
//               onClick={handleDialogOpen}
//               className="absolute bottom-0 right-0 z-20 grid h-1/2 w-1/2 place-content-center bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-indigo-500"
//             >
//               <div className="flex items-center cursor-pointer">
//                 <span className="text-xs">READ MORE</span>
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-lg"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <line x1="7" y1="17" x2="17" y2="7"></line>
//                   <polyline points="7 7 17 7 17 17"></polyline>
//                 </svg>
//               </div>
//             </div>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-xl">
//             <DialogHeader>
//               <DialogTitle>Form</DialogTitle>
//               <DialogDescription>Fill the form</DialogDescription>
//             </DialogHeader>
//             <Form
//               closeDialog={handleDialogClose}
//               type={type}
//               id={id}
//               title={title}
//             />
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default RevealCard;


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import Form from "./Form";

const RevealCard = ({ title, image, height, type, id }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigate = useNavigate();

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleReadMoreClick = () => {
    if (type === "event") {
      navigate(`/${type}/${id}`);
    } else {
      handleDialogOpen();
    }
  };

  return (
    <div className={`relative h-[${height}] w-full group`}>
      <div className="flex h-1/2 flex-col justify-center bg-black p-6 z-10">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      </div>

      <div
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:top-1/2 group-hover:right-1/2 bg-slate-200"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",

        }}
      ></div>

      <div
        className="absolute bottom-0 right-0 z-20 grid h-1/2 w-1/2 place-content-center bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-indigo-500"
      >
        <div className="flex items-center cursor-pointer" onClick={handleReadMoreClick}>
          <span className="text-xs">READ MORE</span>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-lg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

      {type !== "event" && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            {/* This is no longer necessary; onClick of READ MORE is handled above */}
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Form</DialogTitle>
              <DialogDescription>Fill the form</DialogDescription>
            </DialogHeader>
            <Form
              closeDialog={handleDialogClose}
              type={type}
              id={id}
              title={title}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default RevealCard;
