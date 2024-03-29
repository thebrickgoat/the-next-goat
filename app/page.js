import Hero from "./components/hero";
import Skills from "./components/skills";
import Work from "./components/work";
import About from "./components/about";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function getSkills() {
  let { data, error } = await supabase.from("skills_build").select("*");
  if (error) console.log("error", error);
  if (data) return data;
}

async function getWork() {
  let { data, error } = await supabase.from("work_build").select("*");
  if (error) console.log("error", error);
  if (data) return data;
}
async function getBlogs() {
  let { data, error } = await supabase.from("blogs").select("*");
  if (error) console.log("error", error);
  if (data) return data;
}
export default async function Home() {
  const skills = await getSkills();
  const work = await getWork();
  const blogs = await getBlogs();

  return (
    <div>
      <main>
        <Hero />
        <Header />
        <About />
        <Skills skills={skills} />
        <Work work={work} />
        <Blogs blog={blogs} />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
