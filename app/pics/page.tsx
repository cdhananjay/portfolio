import fs from 'node:fs';
import path from 'node:path';

export default function PicsPage() {
    const picsDir = path.join(process.cwd(), 'public/pics');
    const files = fs.readdirSync(picsDir);

    return (
        <main className="my-5">
            <h1 className="text-3xl font-bold mb-3">pics</h1>
            <div className="columns-1 md:columns-2 gap-4">
                {files.map((file) => (
                    <img
                        key={file}
                        src={`/pics/${file}`}
                        alt={file}
                        className="mb-4 w-full break-inside-avoid"
                    />
                ))}
            </div>
        </main>
    );
}
