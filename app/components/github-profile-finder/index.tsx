"use client";
import { useEffect, useState } from "react";
import "./styles.css";
import User from "./user";

export interface DataProps {
  avatar_url: string;
  public_repos: number;
  html_url: string;
  followers: number;
  following: number;
  name: string;
  login: string;
  created_at: Date;
}

export default function GithubProfileFinder() {
  const [username, setUsername] = useState<string>("DHRUVCHARNE");
  const [data, setData] = useState<DataProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data) {
      setData(data);
      console.log(data);
      setUsername("");
    }
    setLoading(false);
  }
  function handleSubmit() {
    fetchGithubUserData()
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) return <h1>Loading Data</h1>;

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        data != null ? <User user={data} /> : null
      }
    </div>
  );
}
