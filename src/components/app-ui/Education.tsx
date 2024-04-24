import { education } from "@/constants";
import { styles } from "@/lib/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type educationCardProps = {
  education: {
    title: string;
    college: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
};

const EducationCard = ({ education }: educationCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ border: "solid #e6e6e6" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={education.date}
      iconStyle={{
        background: education.iconBg,
        boxShadow: "0 0 0 4px #e6e6e6",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.college}
            className="w-[70%] h-[70%]"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{education.title}</h3>
        <p className="text-[16px] font-semibold" style={{ margin: 0 }}>
          {education.college}
        </p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc text-[14px]">
        {education.points.map((pt, i) => (
          <li key={`education-pt-${i}`}>{pt}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <span className="hash-span" id="education">
        &nbsp;
      </span>
      <section className={`${styles.paddingX} ${styles.section}`}>
        <p className={`${styles.sectionHeadText}`}>Education</p>
        <div className="mt-10">
          <VerticalTimeline layout="1-column-left" lineColor="#e6e6e6">
            {education.map((edc, i) => (
              <EducationCard key={i} education={edc} />
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Education;
