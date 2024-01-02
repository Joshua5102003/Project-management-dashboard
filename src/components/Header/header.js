import React from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import LogoOut from "./logout";

export default function Header({ posts, setSearchResults }) {
  return (
    <div>
      <div className="flex justify-between m-5 mt-0 items-center border-box pr-5">
        <Logo />

        <SearchBar posts={posts} setSearchResults={setSearchResults} />

        <LogoOut />
      </div>
    </div>
  );
}
