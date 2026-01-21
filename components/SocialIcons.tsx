import { Mail, Github, Linkedin } from 'lucide-react';
import {ReactElement} from "react";
import Link from "next/link";
const iconLinks: {link: string, icon: ReactElement}[] = [
    {
        link: "https://github.com/cdhananjay",
        icon: <Github/>
    },
    {
        link: "https://www.linkedin.com/in/cdhananjay/",
        icon: <Linkedin/>
    },
    {
        link: "mailto:dhananjaychavan@tuta.io",
        icon: <Mail/>
    }
]
const SocialIcons = () => {
    return (
        <>
            {iconLinks.map((item, index) => {
                return <Link href={item.link} key={index} target="_blank"> {item.icon} </Link>
            })}
        </>
    );
};

export default SocialIcons;