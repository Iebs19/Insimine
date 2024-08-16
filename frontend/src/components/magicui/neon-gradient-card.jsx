"use client";
import React from 'react';
import { cn } from "@/lib/utils"; // Ensure you have this utility or replace with your own classNames logic

const NeonGradientCard = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: 'green',
    secondColor: 'darkBlue',
  },
  ...props
}) => {
  return (
    <div
      style={{
        borderWidth: `${borderSize}px`,
        borderImage: `linear-gradient(45deg, ${neonColors.firstColor}, ${neonColors.secondColor}) 1`,
        boxShadow: `0 0 ${borderSize * 2}px ${neonColors.firstColor}, 0 0 ${borderSize * 2}px ${neonColors.secondColor}`
      }}
      className={cn(
        "relative z-10 w-full h-full",
        "p-6 bg-background",
        className
      )}
      {...props}
    >
      <div
        // className={cn(
        //   "relative h-full w-full rounded-xl bg-background p-6",
        //   "z-10"
        // )}
      >
        {children}
      </div>
    </div>
  );
};

export { NeonGradientCard };
