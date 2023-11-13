'use client'

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from "next/image";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function Slap(props) {
    const [slaps, setSlaps] = useState(0);
    const [wordSlaps, setWorldSlaps] = useState('loading...');
    const [slap, setSlapAudio] = useState(null)
    const [horse, setHorseAudio] = useState(null)
    const [horse2, setHorse2Audio] = useState(null)

    useEffect(() => {
        setHorseAudio(new Audio('/sounds/horse1.mp3'));
        setHorse2Audio(new Audio('/sounds/horse2.mp3'));
        setSlapAudio(new Audio('/sounds/slap.mp3'));

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
        const randomHorse = Math.random() < 0.2 ? horse : null;
        slap?.play();
        randomHorse?.play();
        setSlaps(slaps + 1);
        setWorldSlaps(wordSlaps + 1);
        await supabase.from('slaps').update({ slaps: wordSlaps + 1 }).eq('id', 1);
    };

    return (
        <div className='m-6'>
            <div>
                <Image width="180" height="180" alt="better slap that horse "className='w-full select-none'  draggable="false" src='/horse.png' onKeyDown={handleSlap} onClick={handleSlap} tabIndex="0"/>
            </div>
            <div className="mt-4" >
                <p className='text-center text-gray-800'>Your Slaps: {slaps}</p>
                <p className='text-center text-gray-800'>World Slaps: {wordSlaps}</p>
            </div>
        </div>
    )
}