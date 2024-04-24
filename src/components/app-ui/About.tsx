import { styles } from "@/lib/styles";
import TechStack from "./TechStack";

const About = () => {
  return (
    <>
      <span className="hash-span" id="about">
        &nbsp;
      </span>
      <section className={`${styles.paddingX} ${styles.section}`}>
        <p className={`${styles.sectionHeadText}`}>Overview</p>

        <p className="mt-4">
          I am a recent graduate from HKU, where I completed my master's degree
          in Computer Science. I have a strong interest in web development and
          have acquired skills in various modern technologies such as ReactJS
          and TypeScript. I am passionate about creating dynamic, user-friendly
          web solutions for real-world problems. I am constantly seeking to
          learn and grow in this ever-evolving field.
        </p>

        <div className="mt-20">
          <TechStack />
        </div>
      </section>
    </>
  );
};

export default About;
