import Link from "next/link";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "./ui/card";

export type poemProp = {
    title: string,
    date: Date,
    link: string,
    description?: string,
}
const Poem = ({title, date, link, description} : poemProp) => {
    return (
        <Link href={link} target="_blank">
        <Card className="w-full" >
            <CardHeader>
                <CardTitle className="mb-[-15] text-xl" >{title}</CardTitle>
                {description && <CardDescription className="pt-2 text-lg" >{description}</CardDescription>}
            </CardHeader>
            <CardFooter>
                {date.toDateString()}
            </CardFooter>
        </Card>
        </Link>
    );
};

export default Poem;