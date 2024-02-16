import { createClient } from "@supabase/supabase-js";
import Contact from "@/app/components/contact";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function getBlogs() {
  let { data, error } = await supabase.from("blogs").select("");
  if (error) console.log("error", error);
  if (data) return data;
}

export async function generateStaticParams() {
  let posts = await getBlogs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  let { data: posts } = await supabase
    .from("blogs")
    .select()
    .eq("slug", params.slug);

  let post = posts[0];

  return (
    <div>
      <Header />
      <main>
        <section className="bg-black text-white scroll-mt-16 flex flex-col justify-center p-8 pt-16">
        <div className="border p-8 rounded-md flex flex-col gap-4 justify-between">
            <h1 className="border-4 uppercase shadow-md border-black w-fit pb-4 font-bold text-3xl md:text-6xl">
              {post.title}
            </h1>
            <div className="text-s pb-4 border-b mb-4 w-fit">
              {new Date(post.created_at).toLocaleString()}
            </div>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <a className="block mt-4" href="/blog">
              {"<"} back to blog posts
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
