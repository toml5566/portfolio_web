import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    tags: { name: string; color: string }[];
    image: string;
    link: string;
    link_icon: string;
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <div className="h-[230px] w-full relative">
          <img src={project.image} className="w-full h-full object-contain" />
          {project.link_icon !== "" && (
            <div className="absolute inset-0 flex justify-end mt-3">
              <div
                className="h-10 w-10 cursor-pointer bg-black rounded-full flex justify-center items-center"
                onClick={() => window.open(project.link, "_blank")}
              >
                <img
                  src={project.link_icon}
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </div>
          )}
        </div>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-2 text-[14px]">
        {project.tags.map((tag, i) => (
          <p key={i} className={`${tag.color}`}>{`#${tag.name}`}</p>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
