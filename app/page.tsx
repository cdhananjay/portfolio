import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import Project from "@/components/Project"
import { Button } from "@/components/ui/button";
import {FileText} from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import TabItem from "@/components/TabItem";
import {featuredProjects} from "@/data/projects";
import {educationItems} from "@/data/education";

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
              <div className="flex items-center gap-2 my-2" >
                  <Button ><Link target="_blank" href="/resume.pdf" className="flex items-center gap-1">Resume<FileText /></Link></Button>
                  <SocialIcons/>
              </div>
          </section>

          <Tabs defaultValue="education" className="w-full py-2 my-5">
              {/*default to work later*/}
              <TabsList className="w-full" >
                  <TabsTrigger value="work">Work</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="work">peak unemployment</TabsContent>
              <TabsContent value="education">
                  {educationItems.map(item => <TabItem key={item.title} {...item} />)}</TabsContent>
          </Tabs>

          <section className="my-5">
              <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                      <h1 className="text-3xl font-bold" >projects</h1>
                      <Link href="/projects">view more</Link>
                  </div>
                  <div className="mt-2 flex flex-col sm:flex-row justify-center gap-3">
                      {featuredProjects.map(project => {
                          return <Project key={project.title} {...project}/>
                      })}
                  </div>
              </div>
          </section>
      </main>
  );
}
