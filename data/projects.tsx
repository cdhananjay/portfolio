import type { projectProp } from '@/components/Project';

const projects: projectProp[] = [
    {
        image: '/spoticry.png',
        title: 'spoticry',
        description: 'a website which roasts you based on your spotify',
        tags: [
            'fullstack',
            'nextjs',
            'gemini API',
            'spotify API',
            'better-auth',
        ],
        githubLink: 'https://github.com/cdhananjay/spoticry',
        liveLink: 'https://spoticry-roastme.vercel.app',
    },
    {
        image: '/portfolio.png',
        title: 'this very website you are viewing',
        description: 'dumb to add this here',
        tags: ['frontend', 'nextjs', 'ShadCN'],
        githubLink: 'https://github.com/cdhananjay/portfolio',
        liveLink: 'https://dhananjayc.vercel.app',
    },
    {
        image: '/75orDie.png',
        title: '75orDie',
        description: 'Attendance tracker for students to create subjects, edit timetable, mark and edit their attendance.',
        tags: ['fullstack', 'PERN', 'Drizzle', 'Neon Postgres'],
        githubLink: 'https://github.com/cdhananjay/75orDie',
        liveLink: 'https://seven5ordie.onrender.com/',
    },
];
export default projects;
export const featuredProjects: projectProp[] = [projects[2], projects[0]];
