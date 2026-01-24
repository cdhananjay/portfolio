import posts from "@/data/posts";
import Post from "@/components/Post";

const Page = () => {
    return (
        <main className="my-5">
            <h1 className="text-3xl font-bold mb-3" >posts</h1>
            <div className="mt-2 flex flex-col justify-center gap-3">
                {posts.map(post => {
                    return <Post key={post.title} {...post}/>
                })}
            </div>
        </main>
    );
};

export default Page;