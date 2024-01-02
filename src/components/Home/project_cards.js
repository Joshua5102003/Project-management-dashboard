import React from "react";
import { useContext } from "react";

import Card from "./card.js";
import { Projects } from "../../contexts/Projects.js";
import ProjectAdd from "./project_add.js";
import "../../Styles/card.css";

export default function ProjectCards({ searchResults }) {
  const { data } = useContext(Projects);
  console.log("hello " + searchResults);

  const dataSource =
    searchResults && searchResults.length > 0 ? searchResults : data;

  return (
    <div className="card">
      <ProjectAdd />
      <div className="flex flex-cols gap-2 flex-wrap space-evenly">
        {dataSource &&
          dataSource.map((client, index) => (
            <Card
              key={index}
              index={client.index}
              client={client.name}
              color={client.color}
              completed={client.completed}
              favorite={client.favorite}
            />
          ))}
      </div>
    </div>
  );
}
