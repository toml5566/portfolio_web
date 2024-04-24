import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tech } from "@/constants";
import { Card } from "../ui/card";

const TechStack = () => {
  return (
    <Tabs defaultValue="frontend" className="max-w-full">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>

      <TabsContent value="frontend">
        <Card className="grid grid-cols-2 sm:grid-cols-4 px-4 py-10 gap-10 place-items-center">
          {tech.frontend.map((t) => (
            <img key={t.id} src={t.icon} alt={t.name} className="h-20 w-20" />
          ))}
        </Card>
      </TabsContent>
      <TabsContent value="backend">
        <Card className="grid grid-cols-2 sm:grid-cols-4 px-4 py-10 gap-10 place-items-center">
          {tech.backend.map((t) => (
            <img key={t.id} src={t.icon} alt={t.name} className="h-20 w-20" />
          ))}
        </Card>
      </TabsContent>
      <TabsContent value="other">
        <Card className="grid grid-cols-2 sm:grid-cols-4 px-4 py-10 gap-10 place-items-center">
          {tech.other.map((t) => (
            <img key={t.id} src={t.icon} alt={t.name} className="h-20 w-20" />
          ))}
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TechStack;
