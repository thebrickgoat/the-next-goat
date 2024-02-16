export default function Blogs(props) {
    return (
        <section id="Blog" className="scroll-mt-16 p-8">
            <h2 className="border-4 uppercase shadow-md border-black w-fit p-4 font-bold text-3xl md:text-6xl">
                Rambles
            </h2>
            <div className="py-8 mt-8">
                {props.blog.slice(0, 5).map((post, index) => (
                    <div key={index} className="py-4 first-of-type:pt-0 first-of-type:border-t-0 mb-8 border-y border-black">
                        <h3 className="text-3xl mb-4">{post.title}</h3>
                        <a href={`/blog/${post.slug}`}>read more {">"}</a>
                    </div>
                ))}
            </div>
        </section>
    );
                }