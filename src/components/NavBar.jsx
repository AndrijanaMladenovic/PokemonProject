import React from "react";
import { useState } from "react";

export default function NavBar({ query, setQuery }) {
  return (
    <div className=" flex items-center h-20 p-4 bg-red-500 justify-around">
      <img className=" w-24" src="/public/logo.png" alt="" />
      <label htmlFor="">
        <span className=" font-bold text-white p-2">Search</span>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="rounded"
          type="search"
        />
      </label>
    </div>
  );
}
