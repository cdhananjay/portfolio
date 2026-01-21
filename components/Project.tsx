import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {Github, Globe} from "lucide-react";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export type projectProp = {
    image: string,
    title: string,
    description: string,
    tags: string[],
    githubLink: string,
    liveLink?: string,
}

const Project = ({image, title, description, tags, liveLink, githubLink} : projectProp) => {
    return (
        <Card className="relative mx-auto w-full pt-0">
            <Image
                src={image}
                width={500}
                height={500}
                alt={`screenshot of ${title}`}
                className="pt-2 px-2"
            />
            <CardHeader>
                {/*<CardAction>*/}
                {/*    <Badge variant="secondary">Featured</Badge>*/}
                {/*</CardAction>*/}
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-start gap-1 ">
                <div>
                    {tags.map(tag => {
                        return <Badge className="m-1" key={tag} > {tag} </Badge>
                    })}
                </div>
                <div className="flex gap-1 " >
                    <Button > <Link target="_blank" href={githubLink} className="flex gap-1 items-center justify-center"> <Github />view code</Link> </Button>
                    { liveLink && <Button> <Link target="_blank" href={liveLink} className="flex gap-1 items-center justify-center" > <Globe />see live</Link> </Button> }
                </div>
            </CardFooter>
        </Card>
    )
};

export default Project;