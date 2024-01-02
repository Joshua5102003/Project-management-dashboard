import React, { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Clients from "./clients.json";
import Sidebar from "./components/Sidebar/sidebar.js";
import "./App.css";
import { Projects } from "./contexts/Projects.js";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  const [data, setData] = useState(Clients);
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <BrowserRouter>
      <div className="app">
        <Projects.Provider value={{ data, setData }}>
          <Header posts={posts} setSearchResults={setSearchResults} />
          <div class="flex flex-cols ">
            <Sidebar />
            <Home searchResults={searchResults} />
          </div>
        </Projects.Provider>
      </div>
    </BrowserRouter>
  );
}
