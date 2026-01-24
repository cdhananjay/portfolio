import Poem from "@/components/Poem";
import poems from "@/data/poems";

const Page = () => {
    return (
        <main className="my-5">
            <h1 className="text-3xl font-bold mb-3" >poems</h1>
            <div className="mt-2 flex flex-col justify-center gap-3">
                {poems.map(poem => {
                    return <Poem key={poem.title} {...poem}/>
                })}
            </div>
        </main>
    );
};

export default Page;