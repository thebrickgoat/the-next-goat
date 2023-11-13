"use client"

import { useState } from "react";
import Image from "next/image";

export default function Work() {
    const cards = [
        { id: 1, title: "Card 1", image: "/testPic.jpg", body: "test", categories: ["Category 1", "Category 2"], tags: ["tag1", "tag2", "tag3"] },
        { id: 2, title: "Card 2", image: "/testPic.jpg", categories: ["Category 2"], tags: ["tag1", "tag2", "tag3"] },
        { id: 3, title: "Card 3", image: "/testPic.jpg", categories: ["Category 1", "Category 2"], tags: ["tag1", "tag2", "tag3"] },
        { id: 4, title: "Card 4", image: "/testPic.jpg", categories: ["Category 1"], tags: ["tag1", "tag2", "tag3"] },
        // Add more cards as needed
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <section id="Work" className="scroll-mt-16">
            <div className="py-16 px-8 pb-4">
                <h2 className="pb-4 font-bold text-6xl">PROJECTS AND WORKS</h2>
                <p>
                Embark on a journey through thebrickgoat&apos;s portfolio and discover a world where technology meets creativity in perfect harmony. With a commitment to excellence and a passion for pushing the boundaries, thebrickgoat is not just a developer; they are a visionary crafting the future of digital experiences.
                </p>
            </div>
            <div className="flex flex-wrap gap-4 p-8 pt-4">
                <button className={`px-4 font-bold uppercase py-2 shadow-md ${selectedCategory === "All" ? "bg-work-400 text-white" : "bg-white text-black"}`} onClick={() => setSelectedCategory("All")}>All</button>
                <button className={`px-4 font-bold uppercase py-2 shadow-md ${selectedCategory === "Category 1" ? "bg-work-500 text-white" : "bg-white text-black"}`} onClick={() => setSelectedCategory("Category 1")}>Development</button>
                <button className={`px-4 font-bold uppercase py-2 shadow-md ${selectedCategory === "Category 2" ? "bg-work-600 text-white" : "bg-white text-black"}`} onClick={() => setSelectedCategory("Category 2")}>Design</button>
                <button className={`px-4 font-bold uppercase py-2 shadow-md ${selectedCategory === "Category 3" ? "bg-work-700 text-white" : "bg-white text-black"}`} onClick={() => setSelectedCategory("Category 3")}>Games</button>
                <button className={`px-4 font-bold uppercase py-2 shadow-md ${selectedCategory === "Category 4" ? "bg-work-800 text-white" : "bg-white text-black"}`} onClick={() => setSelectedCategory("Category 4")}>Fun</button>
                {/* Add more filters as needed */}
            </div>
            <div className={`transition-color duration-500 ease-in-out ${selectedCategory === "All" ? "bg-work-400" : selectedCategory === "Category 1" ? "bg-work-500" : selectedCategory === "Category 2" ? "bg-work-600" : selectedCategory === "Category 3" ? "bg-work-700" :"bg-work-800"}`}>
                <div className={`mx-auto p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8`} >
                    {cards.filter(card => selectedCategory === "All" || card.categories.includes(selectedCategory)).map(card => (
                        <div key={card.id} className="flex flex-col p-4 shadow-2xl bg-white transition-opacity duration-500 ease-in-out">
                            <Image src={card.image} alt={card.title} width={300} height={300} className="w-full object-cover" />
                            <h2 className="text-xl text-gray-800 font-bold mt-4">{card.title}</h2>
                            <p className="text-gray-600">{card.category}</p>
                            <p className="mt-2 text-gray-500">{card.body}</p>
                            <div className="flex space-x-2 mt-4">
                                {card.categories.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};