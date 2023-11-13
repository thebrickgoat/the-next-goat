'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Skill from './skill';

export default function Skills() {
    const skills = [
        { title: 'HTML/CSS/JS', description: 'Description of skill 1', image: '/skills/html.svg' },
        { title: 'Node.js', description: 'Description of skill 2', image: '/skills/node.svg' },
        { title: 'React', description: 'Description of skill 3', image: '/skills/react.svg' },
        { title: 'Shopify', description: 'Description of skill 4', image: '/skills/shopify.svg' },
        { title: 'Vue.js', description: 'Description of skill 5', image: '/skills/vue.svg' },
        { title: 'Next.js', description: 'Description of skill 6', image: '/skills/next.svg' },
        { title: 'Creative Cloud', description: 'Description of skill 7', image: '/skills/cc.svg' },
        { title: 'git/Devops', description: 'Description of skill 7', image: '/skills/git.svg' },
    ];

    const [selectedSkill, setSelectedSkill] = useState(skills[0]);
    const [focusedIndex, setFocusedIndex] = useState(null);

    useEffect(() => {
        const handleKeyDown = (event) => {

            if (event.key === 'ArrowUp') {
                event.preventDefault();
                if (focusedIndex === null) {
                    setFocusedIndex(0);
                } else {
                    setFocusedIndex((prevIndex) => {
                        const newIndex = prevIndex - (skills.length / 2);
                        return newIndex < 0 ? prevIndex + (skills.length / 2) : newIndex;
                    });
                }
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                if (focusedIndex === null) {
                    setFocusedIndex(0);
                } else {
                    setFocusedIndex((prevIndex) => {
                        const newIndex = prevIndex + (skills.length / 2);
                        console.log(newIndex);
                        return newIndex > skills.length - 1 ? prevIndex - (skills.length / 2) : newIndex;
                    });
                }
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                if (focusedIndex === null) {
                    setFocusedIndex(0);
                } else {
                    setFocusedIndex((prevIndex) => {
                        const newIndex = prevIndex - 1;
                        return newIndex < 0 ? skills.length - 1 : newIndex;
                    });
                }
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                if (focusedIndex === null) {
                    setFocusedIndex(0);
                } else {
                    setFocusedIndex((prevIndex) => {
                        const newIndex = prevIndex + 1;

                        return newIndex > skills.length - 1 ? 0 : newIndex;
                    });
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [focusedIndex]);

    useEffect(() => {
        if (focusedIndex !== null) {
            setSelectedSkill(skills[focusedIndex]);
        }
    }, [focusedIndex]);

    return (
        <section
            id="Skills"
            className={`scroll-mt-16 py-16 px-8 text-white bg-skills-500 ${selectedSkill.title ? 'border-2 border-about-500' : ''}`}
        >
            <h2 className="pb-4 font-bold text-6xl">SKILLSET</h2>
            <div className="w-full">
                <p>
                    I am a skilled developer adept in React, Vue, and Shopify and seamlessly integrate these technologies to create top-notch user experiences. I excel in building dynamic interfaces with React, leverage Vue.js for modular components and efficient navigation, and harness Shopify&apos;s capabilities for robust e-commerce solutions. With a comprehensive skillset spanning coding, UX design, and deployment workflows, this developer crafts cohesive digital experiences that prioritize both functionality and aesthetics.
                </p>
            </div>
            <div className="flex gap-16 pt-8">
                <div className=" flex-col w-full md:w-1/3">
                    <Image src={selectedSkill.image} alt={selectedSkill.title} width={100} height={100} className="object-cover" />
                    <h3 className="pb-4 font-bold text-4xl">{selectedSkill.title}</h3>
                    <h3 className="pb-4 text-xl">{selectedSkill.description}</h3>
                </div>
                <div className=" flex-col w-full md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                        {skills.map((skill, index) => (
                            <Skill
                                key={index}
                                title={skill.title}
                                description={skill.description}
                                image={skill.image}
                                onClick={() => setSelectedSkill(skill)}
                                selected={selectedSkill}
                                focused={focusedIndex === index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}