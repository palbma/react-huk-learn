import  {useEffect, useState} from "react";
import axios from "axios";

type SearchUserType = {
    login: string;
    id: number;
    avatar_url?: string;
};
type SearchResult = {}
export const Github = () => {
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [users, setUsers] = useState<SearchUserType[]>([])

  useEffect(() => {
      if (selectedUser) {
          document.title = selectedUser.login;
      }
  },[selectedUser])

    useEffect(() => {
        axios
            .get("https://api.github.com/search/users?q=it-kamasutra")
            .then(response => {
                setUsers(response.data.items);
            });
    }, []);
  return (
    <div>
      <div>
        <input placeholder="searh" />
        <button>Search</button>
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
        <div>Details</div>
      </div>
    </div>
  );
};
