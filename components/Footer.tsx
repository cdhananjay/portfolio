import { Mail, Github, Linkedin } from 'lucide-react';
import {ReactElement} from "react";
import Link from "next/link";
const footerLinks: {link: string, icon: ReactElement}[] = [
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
const Footer = () => {
    return (
        <div className="flex justify-center items-center gap-2 mt-5">
            {footerLinks.map((item, index) => {
                return <Link href={item.link} key={index}> {item.icon} </Link>
            })}
        </div>
    );
};

export default Footer;