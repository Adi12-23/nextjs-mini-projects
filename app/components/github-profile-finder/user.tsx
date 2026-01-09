"use client";
import { DataProps } from ".";

interface UserProps {
  user: DataProps;
}
export default function User({ user }: UserProps) {
  const createdDate = new Date(user.created_at);
  return (
    <div className="user">
      <div>
        <img src={user.avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a
          href={`${user.html_url}`}
          style={{
            fontWeight: "bold",
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
        >
          {user.name || user.login}
        </a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{user.public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{user.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{user.following}</p>
        </div>
      </div>
    </div>
  );
}
