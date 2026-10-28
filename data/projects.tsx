import type { projectProp } from '@/components/Project';

const projects: projectProp[] = [
    {
        image: '/email-verifier-website.png',
        title: 'Email Verifier - Discord Bot',
        description: "Discord bot to restrict server access to verified institutional email domains without exposing anyone's full identity.",
        tags: ["discord.js", "Nextjs", "BetterAuth", "Postgres", "Prisma"],
        githubLink: "https://github.com/cdhananjay/email-verifier",
        liveLink: "https://email-verifier-bot.vercel.app/"
    },
    {
        image: '/smriti.png',
        title: 'Smriti - Blog Site',
        description: "A modern blog platform with full-text search, Markdown editing, and user profiles. Explore blogs on any topic.",
        tags: ["React", "Express", "Postgres"],
        githubLink: "https://github.com/cdhananjay/smriti",
        liveLink: "https://smriti-blog.up.railway.app/"
    },
    {
        image: '/shiuli.png',
        title: 'shiuli - Todo List App',
        description: 'A todo list app for android & ios.',
        tags: ['Dart', 'Flutter', 'Android', 'ios'],
        githubLink: 'https://github.com/cdhananjay/shiuli',
    },
    {
        image: '/75orDie.png',
        title: '75orDie - Attendance tracker',
        description: 'Attendance tracker for students to create subjects, edit timetable, mark and edit their attendance.',
        tags: ['Express', 'React', 'Drizzle', 'Postgres'],
        githubLink: 'https://github.com/cdhananjay/75orDie',
        liveLink: 'https://seven5ordie.onrender.com/',
    },
];
export default projects;
export const featuredProjects: projectProp[] = [projects[0], projects[1]];
