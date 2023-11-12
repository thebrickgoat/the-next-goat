'use client'

import { useState } from 'react';

export default function Work() {
    const cards = [
        { id: 1, title: 'Card 1', image: 'https://picsum.photos/300/300', body: 'test', categories: ['Category 1', 'Category 2'], tags: ['tag1', 'tag2', 'tag3'] },
        { id: 2, title: 'Card 2', image: 'https://picsum.photos/300/300?test=1', categories: ['Category 2'], tags: ['tag1', 'tag2', 'tag3'] },
        { id: 3, title: 'Card 3', image: 'https://picsum.photos/300/300?test=3', categories: ['Category 1', 'Category 2'], tags: ['tag1', 'tag2', 'tag3'] },
        { id: 4, title: 'Card 4', image: 'https://picsum.photos/300/300?test=2', categories: ['Category 1'], tags: ['tag1', 'tag2', 'tag3'] },
        // Add more cards as needed
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <section id='Work'>
            <div className='p-8'>
                <h2 className='py-2 font-bold text-6xl'>WORK</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin, leo tincidunt vehicula sagittis, massa mi hendrerit lorem, ac condimentum nisi diam sed arcu. Suspendisse velit diam, mattis nec sagittis sed, viverra a purus. Proin nisi libero, eleifend sed vehicula a, volutpat id metus. Donec vel pellentesque ligula. In sed purus augue. Mauris tempus consequat dolor, ut venenatis leo semper sit amet. Nam in maximus quam. Etiam id urna in enim imperdiet venenatis a quis diam. Aliquam rhoncus risus ut velit ultrices aliquam. Quisque id ante hendrerit, auctor elit non, vulputate felis. Donec tincidunt finibus erat et posuere. Fusce scelerisque justo sit amet orci egestas feugiat. Nunc id sagittis lorem. Nam eu tristique magna.
                </p>
            </div>
            <div className="flex space-x-4 p-8">
                <button className={`px-4 py-2 shadow-md rounded ${selectedCategory === 'All' ? 'bg-work-300 text-white' : 'bg-white'}`} onClick={() => setSelectedCategory('All')}>All</button>
                <button className={`px-4 py-2 shadow-md rounded ${selectedCategory === 'Category 1' ? 'bg-work-600 text-white' : 'bg-white'}`} onClick={() => setSelectedCategory('Category 1')}>Category 1</button>
                <button className={`px-4 py-2 shadow-md rounded ${selectedCategory === 'Category 2' ? 'bg-work-900 text-white' : 'bg-white'}`} onClick={() => setSelectedCategory('Category 2')}>Category 2</button>
                {/* Add more filters as needed */}
            </div>
            <div className={`transition-color duration-500 ease-in-out ${selectedCategory === 'All' ? 'bg-work-200' : selectedCategory === 'Category 1' ? 'bg-work-400' : 'bg-work-600'}`}>
                <div className={`mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 `} >
                    {cards.filter(card => selectedCategory === 'All' || card.categories.includes(selectedCategory)).map(card => (
                        <div key={card.id} className="flex flex-col p-4 shadow-2xl rounded-lg bg-white transition-opacity duration-500 ease-in-out">
                            <img src={card.image} alt={card.title} className="w-full object-cover rounded-lg" />
                            <h2 className="text-xl font-bold mt-4">{card.title}</h2>
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