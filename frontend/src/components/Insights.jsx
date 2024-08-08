import React from 'react';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import ShimmerButton from "@/components/magicui/shimmer-button";


function Insights() {
    return (
        <div>
            <h1 className="font-nas text-4xl p-4">The Ingenious Collection</h1>
            <h1 className="font-nas text-2xl p-2">Dive into a world of knowledge with our blogs, case studies, and whitepapers.</h1>
            <div className='flex flex-row gap-4'>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                    <h1>Title</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nisi beatae ipsum, doloribus excepturi quidem dolores suscipit possimus qui velit, doloremque explicabo maiores. Autem id laboriosam veniam corrupti dolorum sed!</h2>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        Neon Gradient Card
                    </span>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        Neon Gradient Card
                    </span>
                </NeonGradientCard>
            </div>
            <div className='flex justify-center p-4'>
                <ShimmerButton className="shadow-2xl" background='darkBlue' borderRadius='4px'>
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        View all
                    </span>
                </ShimmerButton>

            </div>

        </div>
    )
}

export default Insights