import GradualSpacing from "@/components/magicui/gradual-spacing";
import BlurFade from "@/components/magicui/blur-fade";
import ShimmerButton from "@/components/magicui/shimmer-button";

function Hero() {
  return (
    <>
      <div className="z-10 flex flex-col justify-center px-4 md:px-6 lg:px-8">
        {/* Responsive GradualSpacing Heading */}
        <GradualSpacing
          className="font-nas pb-2 text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-left bg-gradient-to-b from-green to-lightBlue bg-clip-text text-transparent dark:from-green dark:to-lightBlue"
          text="Mining Insights for"
        />
        <GradualSpacing
          className="font-nas text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-left"
          text="Data Driven Success"
        />
        
        {/* Responsive paragraph and buttons */}
        <BlurFade delay={1} inView>
          <p className="font-nas text-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 mt-4 sm:mt-6 md:mt-8 lg:mt-10 font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            InsiMine is a trusted AI and analytics-based solutions provider
            empowering pharmaceutical and healthcare industries to make
            informed, data-driven decisions.
          </p>
          
          <div className="flex flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 md:mt-8">
            <ShimmerButton
              className="shadow-2xl"
              background="darkBlue"
              borderRadius="4px"
              href="/aboutus"
            >
              <span className="whitespace-pre-wrap text-center text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                Learn More
              </span>
            </ShimmerButton>
          </div>
        </BlurFade>
      </div>
    </>
  );
}

export default Hero;

