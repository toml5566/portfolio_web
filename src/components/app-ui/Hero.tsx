import AnimatedIcon from "./AnimatedIcon";

const Hero = () => {
  return (
    <section className="flex flex-col items-center mt-20 text-center mx-6 h-[85vh]">
      <h1 className="font-bold leading-[98px] mt-2 text-6xl sm:tracking-wide">
        Hi, I am{" "}
        <span className="inline bg-gradient-to-r font-bold from-indigo-500 via-sky-600 to-indigo-400 bg-clip-text text-transparent">
          Tom
        </span>
      </h1>
      <p className="text-xl mt-3 text-neutral-500 sm:tracking-wide">
        I am enthusiastic about web development, <br />
        Adept in ReactJS, TypeScript, and Golang
      </p>
      <AnimatedIcon />
    </section>
  );
};

export default Hero;
