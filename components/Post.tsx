import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

export type postProp = {
    title: string,
    description: string,
    tags: string[],
    date: Date,
    contentLink: string,
}

function Post({date, title, description, tags, contentLink} : postProp) {
    return (
        <Link target="_blank" href={contentLink}>
            <Card>
            <CardHeader className="mb-[-25]" >
                <CardTitle className="m-0 text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {description}
                </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-1">
                <div>
                    {tags.map(tag => {
                        return <Badge className="m-1" key={tag} >{tag}</Badge>
                    })}
                </div>
                <p> {date.toDateString()} </p>
            </CardFooter>
        </Card>
        </Link>
    )
}
export default Post;
