import type { projectProp } from '@/components/Project';

const projects: projectProp[] = [
    {
        image: '/75orDie.png',
        title: '75orDie',
        description: 'Attendance tracker for students to create subjects, edit timetable, mark and edit their attendance.',
        tags: ['fullstack', 'PERN', 'Drizzle', 'Neon Postgres'],
        githubLink: 'https://github.com/cdhananjay/75orDie',
        liveLink: 'https://seven5ordie.onrender.com/',
    },
    {
        image: '/spoticry.png',
        title: 'spoticry',
        description: 'Get roasted for your spotify music taste.',
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
        image: '/uno-engine-js.jpg',
        title: 'uno-engine-js',
        description: 'A headless, zero-dependency uno game logic engine written in TypeScript. ',
        tags: ['npm package', 'typescript', 'javascript'],
        githubLink: 'https://github.com/cdhananjay/uno-engine-js',
        liveLink: 'https://www.npmjs.com/package/uno-engine-js',
    },
    {
        image: '/portfolio.png',
        title: 'this website',
        description: 'smoooooth',
        tags: ['frontend', 'nextjs', 'ShadCN'],
        githubLink: 'https://github.com/cdhananjay/portfolio',
        liveLink: 'https://dhananjayc.vercel.app',
    },

];
export default projects;
export const featuredProjects: projectProp[] = [projects[0], projects[1]];
