import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import Project from "@/components/Project"
import type {projectProp} from "@/components/Project";
const projects: projectProp[] = [
    {
        image: '/spoticry.png',
        title: "spoticry",
        description: "a website which roasts you based on your spotify",
        tags: ["fullstack", "nextjs", "gemini API", "spotify API", "better-auth"],
        githubLink: "https://github.com/cdhananjay/spoticry",
        liveLink: "https://spoticry-roastme.vercel.app",
    },
    {
        image: '/spoticry.png',
        title: "test",
        description: "a long description for a tiny project lmao",
        tags: ["idk", "woah"],
        githubLink: "e",
    }
]
function getAge() {
    const today = new Date();
    const birthDate = new Date("2006-12-18");
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
export default function Home() {
  return (
      <main>
          <section className="my-5" >
              <h1 className="text-3xl font-bold" >hi, im Dhananjay</h1>
              <p>{getAge()} y/o aspiring software engineer from India</p>
              <p>freshmen @iiitn cse, learning webdev</p>
          </section>

          <Tabs defaultValue="work" className="w-full py-2 my-5">
              <TabsList className="w-full" >
                  <TabsTrigger value="work">Work</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="work">peak unemployment</TabsContent>
              <TabsContent value="education">to be updated</TabsContent>
          </Tabs>

          <section className="my-5">
              <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                      <h1 className="text-3xl font-bold" >projects</h1>
                      <Link href="/projects">view more</Link>
                  </div>
                  <div className="mt-2 flex flex-col sm:flex-row justify-center gap-3">
                      {projects.map(project => {
                          return <Project key={project.title} image={project.image} title={project.title} description={project.description} tags={project.tags} githubLink={project.githubLink} liveLink={project.liveLink} ></Project>
                      })}
                  </div>
              </div>
          </section>
      </main>
  );
}
