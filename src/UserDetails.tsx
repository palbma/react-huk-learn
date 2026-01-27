type SearchUserType = {
  login: string;
  id: number;
  followers?: number;
};

type userDetailsPropsType = {
   username: SearchUserType | null;
};

export const UserDetails = (props: userDetailsPropsType) => {
    
    
  return (
    <div>
      <h2>{props.username?.login ?? "User name"}</h2>
      <div>Followers: {props.username?.followers ?? 0}</div>
    </div>
  );
};