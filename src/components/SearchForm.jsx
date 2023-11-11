import React from "react";

function SearchForm() {
  return (
    <div className="mt-4 mb-7 flex justify-between cite-container">
      <input
        type="text"
        placeholder="Type here"
        className="input input-ghost w-full max-w-xs"
      />
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">
          All
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Africa</a>
          </li>
          <li>
            <a>America</a>
          </li>
          <li>
            <a>Asia</a>
          </li>
          <li>
            <a>Europe</a>
          </li>
          <li>
            <a>Oceania</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchForm;
