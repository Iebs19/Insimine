import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

function ScrollBasedVelocity() {
  return (
    <VelocityScroll
      text="Insimine"
      default_velocity={5}
      className="font-display font-nas text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
};

export default  ScrollBasedVelocity ;
