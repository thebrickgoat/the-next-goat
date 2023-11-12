export default function Header() {
  return (
    <header className="bg-white text-black fixed top-0 w-full p-8 flex gap-4">
      <span className="text-2xl font-bold">thebrickgoat</span>
      <a href="#Skills" className="text-2xl hover:text-gray-500">
        skills
      </a>
      <a href="#Work" className="text-2xl hover:text-gray-500">
        work
      </a>
      <a href="#Contact" className="text-2xl hover:text-gray-500">
        contact
      </a>
    </header>
  );
}
