import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import TabItem from '@/components/TabItem';
import Project from '@/components/Project';
import Post from '@/components/Post';
import SocialIcons from '@/components/SocialIcons';
import personalInfo from '@/data/personalInfo';
import educationItems from '@/data/education';
import { featuredProjects } from '@/data/projects';
import { featuredPosts } from '@/data/posts';

export default function Home() {
    return (
        <main>
            <section className="my-5">
                <h1 className="text-3xl font-bold">
                    hi, im {personalInfo.name}
                </h1>
                <p>
                    {personalInfo.age} y/o {personalInfo.role} from{' '}
                    {personalInfo.location}
                </p>
                <p>{personalInfo.description}</p>
                <div className="flex items-center gap-2 my-2">
                    <Button>
                        <Link
                            target="_blank"
                            href="/resume.pdf"
                            className="flex items-center gap-1"
                        >
                            Resume
                            <FileText />
                        </Link>
                    </Button>
                    <SocialIcons />
                </div>
            </section>

            <Tabs defaultValue="education" className="w-full py-2 my-5">
                {/*default to work later*/}
                <TabsList className="w-full">
                    <TabsTrigger value="work">Work</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                    <Card>
                        <CardContent>
                            <p>peak unemployment</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="education">
                    <Card>
                        {educationItems.map((item) => (
                            <TabItem key={item.title} {...item} />
                        ))}
                    </Card>
                </TabsContent>
            </Tabs>

            <section className="my-5">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">projects</h1>
                        <Link href="/projects">view more</Link>
                    </div>
                    <div className="mt-2 flex flex-col sm:flex-row justify-center gap-3">
                        {featuredProjects.map((project) => {
                            return <Project key={project.title} {...project} />;
                        })}
                    </div>
                </div>
            </section>

            {/*<section>*/}
            {/*    <div className="flex flex-col">*/}
            {/*        <div className="flex justify-between items-center">*/}
            {/*            <h1 className="text-3xl font-bold" >posts</h1>*/}
            {/*            <Link href="/posts">view more</Link>*/}
            {/*        </div>*/}
            {/*        <div className="mt-2 flex flex-col justify-center gap-3">*/}
            {/*            {featuredPosts.map(post => {*/}
            {/*                return <Post key={post.title} {...post}/>*/}
            {/*            })}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </main>
    );
}
