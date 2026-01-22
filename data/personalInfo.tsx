import getAge from "@/lib/getAge";

type personalInfo = {
    name: string,
    age: number,
    role: string,
    location: string,
    description: string,
}

const personalInfo : personalInfo = {
    name: "Dhananjay",
    age: getAge("2006-12-18"), //yyyy-mm-dd
    role: "aspiring software engineer",
    location: "India",
    description: "Freshman @iiitn cse, learning webdev"
}

export default personalInfo;