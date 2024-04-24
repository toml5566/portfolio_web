import { gopher, reactIcon } from "@/assets";

const AnimatedIcon = () => {
  return (
    <div className="flex mt-20 justify-center items-center gap-3 sm:gap-10">
      <img src={reactIcon} className="hover:animate-spin-slow h-36 w-36" />
      <img src={gopher} className="hover:animate-bounce h-36 w-36" />
    </div>
  );
};

export default AnimatedIcon;
