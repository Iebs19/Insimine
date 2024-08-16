"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
)
DialogOverlay.displayName = "DialogOverlay"

// const DialogContent = React.forwardRef(
//   ({ className, children, ...props }, ref) => (
//     <DialogPortal>
//       <DialogOverlay />
//       <DialogPrimitive.Content
//         ref={ref}
//         className={cn(
//           "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
//           className
//         )}
//         {...props}
//       >
//         {children}
//         <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
//           <Cross2Icon className="h-4 w-4" />
//           <span className="sr-only">Close</span>
//         </DialogPrimitive.Close>
//       </DialogPrimitive.Content>
//     </DialogPortal>
//   )
// )
// DialogContent.displayName = "DialogContent"
const DialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { theme } = useTheme();
    const isLight = theme === "light";

    return (
      <DialogPrimitive.Portal>
        <DialogOverlay />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 rounded-lg",
            isLight
              ? "bg-green/30 backdrop-blur-md border "
              : "bg-darkBlue/30 backdrop-blur-md border",
            className
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  }
);
DialogContent.displayName = "DialogContent";

const DialogHeader = ({ className, ...props }) => {
  // const { theme } = useTheme();
  // const isLight = theme === "light";
  return (
    <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-center text-white",
      // isLight ? " text-white" : " text-black",
      className
    )}
    {...props}
  />
   )
}

DialogHeader.displayName = "DialogHeader"

// const DialogFooter = ({ className, ...props }) => (
//   <div
//     className={cn(
//       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
//       className
//     )}
//     {...props}
//   />
// )
// DialogFooter.displayName = "DialogFooter"
const DialogFooter = ({ className, ...props }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "flex justify-center sm:justify-start",
        className
      )}
      {...props}
    >
      {/* <DialogPrimitive.Close asChild>
        <Button
          type="button"
          variant="secondary"
          className={cn(
            "px-4 py-2 rounded text-white",
            isLight ? "bg-green/60 " : "bg-blue-500/60",
            isLight ? "hover:bg-green" : "hover:bg-blue-500"
          )}
        >
          Close
        </Button>
      </DialogPrimitive.Close> */}
    </div>
  );
};
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
)
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground text-white", className)}
      {...props}
    />
  )
)
DialogDescription.displayName = "DialogDescription"

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
