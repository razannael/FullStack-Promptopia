"use client";
import React from "react";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard.jsx";

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className="mt-10 prompt_layout">
    {data.map((post)=>(
      <PromptCard
      key={post._id}
      post={post}
      handleTagClick={handleTagClick}
      />
    ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([])
  const handleSearchChange = (e) =>{

    }

    useEffect(() => {
      const fetchPosts = async () =>{
        const response = await fetch('/api/prompt');
        const data = await response.json();
        setPosts(data);
      }
      fetchPosts();
    }, [])
    
  return (
    <section>
      <form className="relative w-full flex-center mt-5">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer "
        />
      </form>

    <PromptCardList
    data={posts}
    handleTagClick={()=>{}}>

    </PromptCardList>

    </section>
  );
};

export default Feed;
