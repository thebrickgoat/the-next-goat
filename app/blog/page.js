import { createClient } from "@supabase/supabase-js";
import Contact from "@/app/components/contact";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import PaginationContainer from "../components/pagination";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function getBlogs() {
  let { data, error } = await supabase.from("blogs").select("");
  if (error) console.log("error", error);
  if (data) return data;
}

export default async function Page() {
  let posts = await getBlogs();
  return (
    <div>
      <Header />
      <main>
        <section className="bg-black text-white scroll-mt-16 flex flex-col justify-center p-8">
              <PaginationContainer items={posts} title={'rambles'} />
        </section>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
