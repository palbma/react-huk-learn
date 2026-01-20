import React, { useState } from "react";

export const Github = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <div>
        <input placeholder="searh" />
        <button>Search</button>
      </div>
      <ul>
        {["repo1", "repo2", "repo3"].map((repo) => (
          <li
            onClick={() => {
               setUser({ name: repo })
               document.title = repo
            }}
          >
            {repo}
          </li>
        ))}
      </ul>
      <div>
        <h2>{user?.name || "User1 Name"}</h2>
        <div>Details</div>
      </div>
    </div>
  );
};
