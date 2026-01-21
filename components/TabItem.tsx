import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

export type tabItemProp = {
    logo: string,
    link: string,
    title: string,
    subtitle: string,
    period: string,
    description: string[],
    tags?: {text: string, link: string}[]
}

const TabItem = ({logo, link, period, subtitle, title, description, tags = []} : tabItemProp) => {
    return (
        <div className="flex " >
            <div className="flex-1 flex items-center justify-center">
                <Avatar>
                    <AvatarImage
                        src={logo}
                        alt={`icon/logo for ${title}`}
                    />
                    <AvatarFallback>{title.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex-5">
                <h1 className="text-xl font-bold"><Link target="_blank" href={link}>{title}</Link></h1>
                <p>{subtitle}</p>
                <p>{period}</p>
                <ul>
                    {description.map((item, index) => {
                        return <li key={index}> {item} </li>
                    })}
                </ul>
                <div>
                    {tags.map((tag, index) => {
                        return <Link target="_blank" href={tag.link} key={index}><Badge>{tag.text}</Badge></Link>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default TabItem;