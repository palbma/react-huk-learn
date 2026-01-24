import { useEffect, useState } from "react";
import axios from "axios";

type SearchUserType = {
  login: string;
  id: number;
  avatar_url?: string;
};

type UsertType = {
  login: string;
  id: number;
  avatar_url?: string;
  followers: number;
};
type SearchResult = {};
export const Github = () => {
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);
  const [users, setUsers] = useState<SearchUserType[]>([]);
  const [tempSearch, setTempSearch] = useState<string>("it-kamasutra");
  const [searchTempSearch, setSearchTempSearch] =
    useState<string>("it-kamasutra");
  const [userDetails, setUserDetails] = useState<UsertType | null>(null);

  const fetchData = (term: string) => {
    axios
      .get(`https://api.github.com/search/users?q=${term}`)
      .then((response) => {
        setUsers(response.data.items);
      });
  };
  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login;
    }
  }, [selectedUser]);

  useEffect(() => {
    fetchData(tempSearch);
  }, [searchTempSearch]);

  useEffect(() => {
    console.log("Selected user changed:", selectedUser);
    if (!selectedUser) {
      console.log("No user selected");
      return;
    }
    axios
      .get(`https://api.github.com/users/${selectedUser?.login}`)
      .then((response) => {
        setUserDetails(response.data);
      });
  }, [selectedUser]);

  return (
    <div>
      <div>
        <input
          value={tempSearch}
          placeholder="searh"
          onChange={(e) => setTempSearch(e.target.value)}
        />
        <button onClick={() => setSearchTempSearch(tempSearch)}>Search</button>
      </div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              setSelectedUser(user);
            }}
          >
            {user.login}
          </li>
        ))}
      </ul>
      <div>
        <h2>{selectedUser ? selectedUser.login : "User1 Name"}</h2>
        <div>{userDetails ? `Followers: ${userDetails.followers}` : "Loading..."}</div>
      </div>
    </div>
  );
};
