import {projects} from "@/data/projects";
import Project from "@/components/Project";

const Page = () => {
    return (
        <main className="my-5">
            <h1 className="text-3xl font-bold mb-3" >projects</h1>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map(project => {
                    return <Project key={project.title} {...project}/>
                })}
            </div>
        </main>
    );
};

export default Page;