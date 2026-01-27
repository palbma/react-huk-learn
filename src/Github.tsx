import { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "./search";
import { Users } from "./Users";
import { UserDetails } from "./UserDetails";

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
  const [searchTerm, setSearchTerm] = useState("it-kamasutra");
  const [userDetails, setUserDetails] = useState<UsertType | null>(null);

  useEffect(() => {
    if (!selectedUser) return;

    axios
      .get(`https://api.github.com/users/${selectedUser.login}`)
      .then(res => setUserDetails(res.data));
  }, [selectedUser]);

  return (
    <div>
      <Search value={searchTerm} onSubmit={setSearchTerm} />

      <Users
        term={searchTerm}
        selectedUser={selectedUser}
        onUserSelect={setSelectedUser}
      />

      <div>
       <UserDetails username={selectedUser} />
      </div>
    </div>
  );
};

