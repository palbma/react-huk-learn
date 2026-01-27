import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
type SearchUserType = {
  login: string;
  id: number;
  avatar_url?: string;
};

type UsersPropsType = {
    term: string;
    selectedUser: SearchUserType | null;
    onUserSelect: (user: SearchUserType) => void;

};



export const Users = (props: UsersPropsType) => {
    const [users, setUsers] = useState<SearchUserType[]>([]);
   
  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${props.term}`)
      .then(res => setUsers(res.data.items));
  }, [props.term])

    

    const setSelectedUser = (user: SearchUserType) => {
        props.onUserSelect(user);
    };

  return <div> <ul>
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
      </ul></div>;
}