"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Wysiwyg from "@/app/components/wysiwyg";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function BlogUploader() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      setError(error.message)
    }
    else {
      setUser(supabase.auth.user)
    }
  }

  const handleUpload = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .insert([{ title, content: content }]);

      if (error) {
        console.error(error);
      } else {
        console.log("Blog post uploaded successfully:", data);
        // Reset form fields
        setTitle("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen gap-8 bg-black text-white flex flex-col justify-center p-8">
      {user ? (
        <>
          <h1 className="border-4 border-white p-4 w-fit	font-bold text-3xl md:text-6xl">
            make a post
          </h1>
          <input
            type="text"
            placeholder="Enter title"
            className="p-4"
            value={title}
            onChange={handleTitleChange}
          />
          <Wysiwyg />
          <button
            className="text-4xl font-bold uppercase bg-white text-black w-fit rounded-md mx-auto px-8 py-4"
            onClick={handleUpload}
          >
            post
          </button>
          </>
      ) : (
        <>
          <h1 className="border-4 border-white p-4 w-fit font-bold text-3xl md:text-6xl">
            login first
          </h1>
          <div className="flex gap-8">
          <input
            type="text"
            placeholder="Enter email"
            className="rounded-md p-4 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="rounded-md p-4 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button
            className="text-4xl font-bold uppercase bg-white text-black w-fit rounded-md px-8 py-4"
            onClick={signInWithEmail}
          >
            login
          </button>
        </>
      )}
    </div>
  );
}
