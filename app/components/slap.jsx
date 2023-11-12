'use client'

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function Slap(props) {
    const [slaps, setSlaps] = useState(0);
    const [wordSlaps, setWorldSlaps] = useState('loading...');
    const horse = new Audio('/sounds/horse1.mp3');
    const horse2 = new Audio('/sounds/horse2.mp3');

    useEffect(() => {
        async function fetchSlaps() {
            const { data, error } = await supabase
                .from('slaps')
                .select('*')
                .single();
            if (error) console.log('error', error);
            if (data) setWorldSlaps(data.slaps);
        }
        fetchSlaps();
    }, []);

    const handleSlap = async () => {
        const slap = new Audio('/sounds/slap.mp3');
        slap.play();
        const randomHorse = Math.random() < 0.2 ? horse : null;
        randomHorse?.play();
        setSlaps(slaps + 1);
        setWorldSlaps(wordSlaps + 1);
        await supabase.from('slaps').update({ slaps: wordSlaps + 1 }).eq('id', 1);
    };

    return (
        <div className='m-6'>
            <div>
                <img  alt="better slap that horse "className='w-full select-none'  draggable="false" src='/horse.png' onKeyDown={handleSlap} onClick={handleSlap} tabIndex="1"/>
            </div>
            <div >
                <p className='text-center'>Your Slaps: {slaps}</p>
                <p className='text-center'>World Slaps: {wordSlaps}</p>
            </div>
        </div>
    )
}