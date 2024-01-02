import React from "react";

export default function SearchBar({ posts, setSearchResults }) {
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter((post) =>
      post.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultsArray);
  };

  return (
    <div class="flex justify-between py-3 px-6 border-b space-x-6 ">
      <form action="" class="w-[400px]  max-w-md">
        <div class="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <svg
            class="w-5 h-5 absolute ml-3 pointer-events-none"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
          <input
            onChange={handleSearchChange}
            type="text"
            name="search"
            placeholder="Search"
            autocomplete="off"
            aria-label="Search"
            class="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          />
        </div>
      </form>
    </div>
  );
}
