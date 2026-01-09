"use client"
import React, { useEffect, useState } from "react";
import Suggestions from "./suggestion";

export interface UserType {
  id: number;
  firstName: string;
}

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUser, setFilteredUser] = useState<string[]>([]);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUser(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
    console.log(filteredUser)
  }

  function handleClick(event:React.MouseEvent<HTMLLIElement>){
     setShowDropdown(false)
    setSearchParams(event.currentTarget.innerText)
    setFilteredUser([])
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem: UserType) => userItem.firstName));
        setError(null);
      }
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
    console.log(filteredUser)
  }, []);

  return (
    <div className="search-container">
      {loading ? (
        <h1>Loading! Please wait</h1>
      ) : (
        <input
          name="search-users"
          value={searchParams}
          placeholder="Search Users here..."
          onChange={handleOnChange}
        />
      )}
      {showDropdown && <Suggestions data={filteredUser} handleClick={handleClick} />}
    </div>
  );
}
